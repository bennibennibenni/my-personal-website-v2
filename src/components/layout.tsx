// import { Metadata } from 'next';
import * as React from 'react';

// export const metadata: Metadata = {
//   title: 'Components',
// };

export default function ComponentsLayout({
  children,
  location,
}: {
  children: React.ReactNode;
  location?: string;
}) {
  let content;
  if (location && location === '/') {
    content = <div>{children}</div>;
  } else {
    content = (
      <main id='wrapper' className='page'>
        <section>{children}</section>
      </main>
    );
  }
  return content;
}
