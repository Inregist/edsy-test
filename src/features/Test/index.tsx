'use client';

import { TestIntro } from './TestIntro';
import { useTestContext } from './TestContext';
import { MultipleChoice } from './MultipleChoice';
import { TestEnd } from './TestEnd';
import { useEffect } from 'react';

export const Test = () => {
  const { fetchQuestion, questionIdx, questions } = useTestContext();

  useEffect(() => {
    fetchQuestion('1');
  }, []);

  const status =
    questionIdx === -1
      ? 'intro'
      : questionIdx < questions.length
      ? 'in-progress'
      : 'finish';

  return (
    <div className="min-h-[calc(100vh-3rem)] bg-blue-900 px-8 py-8 sm:px-24 sm:py-16">
      {status === 'intro' && <TestIntro />}
      {status === 'in-progress' && <MultipleChoice />}
      {status === 'finish' && <TestEnd />}
    </div>
  );
};
