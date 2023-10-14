import { cn } from '@/utils/cn';
import { useTestContext } from '../TestContext';
import { MultipleChoiceHeader } from './MultipleChoiceHeader';
import { MultipleChoiceFooter } from './MultipleChoiceFooter';

export const MultipleChoice = () => {
  const { getQuestion, MakeAnswer, questions, questionIdx } = useTestContext();
  const question = getQuestion();
  const questionNo = questionIdx + 1;

  return (
    <div className="min-h-[8rem] rounded-xl bg-white px-8 pb-8 pt-6 sm:pt-12">
      <MultipleChoiceHeader />
      <h2 className="mb-2 mt-6 text-xl font-medium">
        Question {questionNo}/{questions.length}
      </h2>
      <h3 className="min-h-[3rem]">{question?.question}</h3>
      <div className="my-6 flex flex-col space-y-2">
        {question?.choices.map((choice) => (
          <button
            key={choice}
            onClick={() => MakeAnswer(choice)}
            className={cn(
              'block w-full rounded-md border border-gray-400 px-6 py-2 text-left font-medium hover:bg-blue-600/20',
              question?.answer === choice &&
                'border-blue-600 bg-blue-600/20 text-blue-600'
            )}
          >
            {choice}
          </button>
        ))}
      </div>
      <MultipleChoiceFooter />
    </div>
  );
};
