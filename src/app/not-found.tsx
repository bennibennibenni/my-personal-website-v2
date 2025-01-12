import { Metadata } from 'next';
import * as React from 'react';

import Layout from '@/components/layout';

export const metadata: Metadata = {
  title: '404 - not found',
};

export default function NotFound() {
  return (
    <Layout>
      <div className='page-bg'>
        <div className='animation-wrapper'>
          <div className='particle particle-1'></div>
        </div>
      </div>
      <article className='active'>
        <h1>404 :(</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </article>
    </Layout>
  );
}
