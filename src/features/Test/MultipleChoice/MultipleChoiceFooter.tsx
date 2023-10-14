import { cn } from '@/utils/cn';
import { useTestContext } from '../TestContext';
import { Button } from '@/components/Button';

export const MultipleChoiceFooter = () => {
  const { questions, ansCount, questionIdx, back, next, submit } =
    useTestContext();

  return (
    <div className="mt-4 w-full border-t border-gray-300 pt-4">
      <div className="flex justify-between">
        {questionIdx > 0 ? (
          <Button onClick={back} variant="secondary">
            Back
          </Button>
        ) : (
          <div />
        )}

        {questionIdx < questions.length - 1 ? (
          <Button onClick={next}>Next</Button>
        ) : (
          <Button disabled={ansCount < questions.length} onClick={submit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};
