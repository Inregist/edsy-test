import { ClockSVG } from '@/assets/clock';
import { useTestContext } from '../TestContext';

export const MultipleChoiceHeader = () => {
  const { questions, ansCount, timer } = useTestContext();

  return (
    <div>
      <div className="flex flex-col justify-between text-blue-600 xs:flex-row">
        <p className="font-medium">Multiple Choice</p>
        <div className="my-2 flex items-center justify-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium xs:my-0">
          <ClockSVG className="mr-2 text-blue-700" width="16" height="16" />
          Time remaining {timer.timeText}
        </div>
      </div>
      <div className="mt-2 h-2 w-full rounded bg-blue-300">
        <div
          className="h-full rounded bg-blue-700"
          style={{
            width: `${(ansCount / questions.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};
