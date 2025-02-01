'use client'; // Error components must be Client Components

import H1 from '@/components/h1';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className='flex flex-col gap-10 text-center py-24'>
      {/* <H1 className="mb-5">Something went wrong!</H1> */}
      <H1>{error.message}</H1>
      <button className='text-red-500'
        onClick={
          // Attempt to recover by trying to re-render the segment
          reset
        }
      >
        Try again
      </button>
    </main>
  );
}
