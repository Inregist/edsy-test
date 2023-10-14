import { formatTime } from '@/utils/timer';
import { useEffect, useRef, useState } from 'react';

export const useCountdown = () => {
  const [time, setTime] = useState(0);
  const statusRef = useRef<'idle' | 'running' | 'done' | 'stop'>('idle');
  const callbackRef = useRef<() => void>();

  const start = (duration: number, onTimeUp?: () => void) => {
    setTime(duration);
    callbackRef.current = onTimeUp;
    statusRef.current = 'running';
  };

  useEffect(() => {
    if (statusRef.current === 'done') {
      callbackRef.current?.();
    }

    if (time === 0 || statusRef.current !== 'running') {
      return;
    }

    const ref = setInterval(() => {
      setTime((prev) => {
        if (prev - 1 === 0) {
          statusRef.current = 'done';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(ref);
    };
  }, [time]);

  const stop = () => {
    statusRef.current = 'stop';
    setTime(0);
  };

  return {
    time,
    timeText: formatTime(time),
    start,
    stop,
  };
};
