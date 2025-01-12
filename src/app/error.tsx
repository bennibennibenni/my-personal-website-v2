'use client'; // Error components must be Client Components

import * as React from 'react';

import Layout from '@/components/layout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <Layout>
      <div className='page-bg'>
        <div className='animation-wrapper'>
          <div className='particle particle-1'></div>
        </div>
      </div>
      <article className='active'>
        <h1> Oops, something went wrong! :(</h1>
        <p>
          <button onClick={reset} className='mt-4'>
            Try again
          </button>
        </p>
      </article>
    </Layout>
  );
}
