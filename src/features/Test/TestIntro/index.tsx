import { TestSVG } from '@/assets/undraw_test';
import { useTestContext } from '../TestContext';
import { TestIntroInfoCard } from './TestIntroInfoCard';
import { Button } from '@/components/Button';

export const TestIntro = () => {
  const { start } = useTestContext();
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white sm:p-16 py-6">
      <h2 className="text-2xl font-medium text-center">General English Test</h2>

      <div className="my-8 flex flex-col xs:flex-row gap-4">
        <TestIntroInfoCard title="Total questions" value="10 questions" />
        <TestIntroInfoCard title="Test duration" value="5:00 min" />
      </div>

      <TestSVG width='200' height='200'/>

      <div className="mt-8 flex flex-col gap-y-2">
        <Button onClick={start}>Start the test</Button>
      </div>
    </div>
  );
};
