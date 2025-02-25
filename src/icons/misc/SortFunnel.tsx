import * as React from 'react';

const SvgSortFunnel = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      {...properties}
    >
      <path d="M48 3.1C27 3.1 4.8 8.4 4.8 18.4c0 2.2 1.2 4.3 3.5 6.3l27.5 36.8c.8 1.1 1.3 2.5 1.3 3.7v16.9C37.1 88.1 42 93 48 93s10.9-4.9 10.8-10.9V65.2c0-1.4.5-2.7 1.3-3.7l27.6-36.8c2.3-1.9 3.5-4.1 3.5-6.3C91.2 8.5 69 3.1 48 3.1zm0 23.7c-3.3 0-31.6-.2-31.6-8.1s28.4-8.1 31.6-8.1 31.6.2 31.6 8.1-28.3 8.1-31.6 8.1z" />
    </svg>
  );
};

export default SvgSortFunnel;
