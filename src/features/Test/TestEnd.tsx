import { WellDoneSVG } from '@/assets/undraw_well_done';

export const TestEnd = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white p-16">
      <h2 className="text-center text-2xl font-medium">Great Jobs!</h2>
      <p className="my-6 text-center text-xl font-medium sm:my-12">
        You have completed the test. <br />
        Your test result will be sent to your registered email.
      </p>
      <WellDoneSVG width="200" height="200" />
    </div>
  );
};
