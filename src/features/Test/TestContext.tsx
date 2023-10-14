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

  const fetchQuestion = async () => {
    const res = await fetch(`/api/exams/1`);
    const data: QuestionResponse = await res.json();
    setQuestions(data?.questions);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const start = () => {
    setQuestionIdx(0);
    setQuestions((prev) => {
      return prev.map((q) => ({
        ...q,
        answer: undefined,
      }));
    });
    ansCount.current = 0;
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
    questionIdx,
    start,
    next,
    back,
    submit,
    getQuestion,
    MakeAnswer,
    ansCount: ansCount.current,
  };
};

export const TestProvider = ({ children }: PropsWithChildren) => {
  const value = useInternalHook();
  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};