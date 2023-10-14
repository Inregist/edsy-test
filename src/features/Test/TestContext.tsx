import { useCountdown } from '@/hooks/useCountdown';
import { formatTime } from '@/utils/timer';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const TestContext = createContext({} as ReturnType<typeof useInternalHook>);

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTestContext must be used within a TestProvider');
  }
  return context;
};

type Question = {
  question: string;
  choices: string[];
  answer?: string;
};

type QuestionResponse = {
  timeLimit: number;
  questions: {
    question: string;
    choices: string[];
  }[];
};

const useInternalHook = () => {
  const [questionIdx, setQuestionIdx] = useState(-1);
  const [questions, setQuestions] = useState([] as Question[]);
  const ansCount = useRef(0);
  const questionRef = useRef<QuestionResponse>();

  const timer = useCountdown();

  const fetchQuestion = async (id: string) => {
    const res = await fetch(`/api/exams/${id}`);
    const data: QuestionResponse = await res.json();

    questionRef.current = data;
    setQuestions(data?.questions);
  };

  const start = () => {
    setQuestionIdx(0);
    setQuestions((prev) => {
      return prev.map((q) => ({
        ...q,
        answer: undefined,
      }));
    });
    ansCount.current = 0;

    const timeLimit = questionRef.current?.timeLimit ?? 0;
    timer.start(timeLimit, () => {
      alert('Time is up!');
      setQuestionIdx(questions.length);
    });
  };
  const next = () => setQuestionIdx((prev) => prev + 1);
  const back = () => setQuestionIdx((prev) => prev - 1);
  const submit = async () => {
    const ans = questions.map((q) => {
      return {
        question: q.question,
        answer: q.answer,
      };
    });

    // do something with ans
    console.log(ans);

    next();
  };

  const getQuestion = () => {
    if (questionIdx < 0 || questionIdx >= questions.length) return undefined;
    return questions[questionIdx];
  };
  const MakeAnswer = (answer: string) => {
    setQuestions((prev) => {
      if (!prev[questionIdx].answer) {
        ansCount.current = ansCount.current + 1;
      }

      prev[questionIdx].answer = answer;

      return [...prev];
    });
  };

  return {
    questions,
    timeLimit: formatTime(questionRef.current?.timeLimit),
    timer,
    questionIdx,
    start,
    next,
    back,
    submit,
    fetchQuestion,
    getQuestion,
    MakeAnswer,
    ansCount: ansCount.current,
  };
};

export const TestProvider = ({ children }: PropsWithChildren) => {
  const value = useInternalHook();
  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};
