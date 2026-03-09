'use client';

import dynamic from 'next/dynamic';

const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), {
  ssr: false,
});

export default function ScrollToTopWrapper() {
  return <ScrollToTop />;
}

