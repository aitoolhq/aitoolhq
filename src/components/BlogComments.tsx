'use client';

import { useEffect } from 'react';

export function BlogComments() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', 'aitoolhq/aitoolhq');
    script.setAttribute('data-repo-id', 'R_kgDOL8-9ZQ');
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', 'DIC_kwDOL8-9Zc4Cd7H8');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'en');

    const commentsDiv = document.getElementById('giscus-comments');
    if (commentsDiv) {
      commentsDiv.appendChild(script);
    }

    return () => {
      const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div id="giscus-comments" style={{ marginTop: '3rem' }}>
      {/* Giscus comments will load here */}
    </div>
  );
}
