import { TestSVG } from '@/assets/undraw_test';
import { useTestContext } from '../TestContext';
import { TestIntroInfoCard } from './TestIntroInfoCard';
import { Button } from '@/components/Button';

export const TestIntro = () => {
  const { start, timeLimit, questions } = useTestContext();
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white py-6 sm:p-16">
      <h2 className="text-center text-2xl font-medium">General English Test</h2>

      <div className="my-8 flex flex-col gap-4 xs:flex-row">
        <TestIntroInfoCard
          title="Total questions"
          value={`${questions.length} question${
            questions.length > 1 ? 's' : ''
          }`}
        />
        <TestIntroInfoCard title="Test duration" value={`${timeLimit} min`} />
      </div>

      <TestSVG width="200" height="200" />

      <div className="mt-8 flex flex-col gap-y-2">
        <Button onClick={start}>Start the test</Button>
      </div>
    </div>
  );
};
