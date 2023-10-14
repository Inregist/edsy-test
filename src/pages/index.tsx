import { Test } from '@/features/Test';
import { TestProvider } from '@/features/Test/TestContext';

export default function TestPage() {
  return (
    <TestProvider>
      <Test />
    </TestProvider>
  );
}
