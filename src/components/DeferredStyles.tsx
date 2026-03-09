'use client';

import { useEffect } from 'react';

export default function DeferredStyles() {
  useEffect(() => {
    // Delay loading to prevent CLS - wait for layout to stabilize
    const timer = setTimeout(() => {
      const linkEl = document.createElement('link');
      linkEl.rel = 'stylesheet';
      linkEl.href = '/css/deferred.css';
      linkEl.type = 'text/css';
      linkEl.media = 'all';
      linkEl.setAttribute('data-deferred', 'true');
      document.head.appendChild(linkEl);
    }, 400);

    return () => {
      clearTimeout(timer);
      const linkEl = document.querySelector('link[data-deferred="true"]');
      if (linkEl && document.head.contains(linkEl)) {
        document.head.removeChild(linkEl);
      }
    };
  }, []);
  
  return null;
} 