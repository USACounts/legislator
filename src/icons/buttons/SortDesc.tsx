import * as React from 'react';

const SvgSortDesc = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      viewBox="0 21 100 60"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path d="M31.8 55l-5.4 5.4V27.6c0-2.8-2.2-5-5-5s-5 2.2-5 5v32.8L11 55c-2-2-5.1-2-7.1 0s-2 5.1 0 7.1l14 13.9c1 1 2.3 1.5 3.5 1.5S24 77 24.9 76l13.9-13.9c2-1.9 2-5.1 0-7.1-1.9-1.9-5.1-2-7 0zm60.7 12.4H53.2c-2.8 0-5 2.2-5 5s2.2 5 5 5h39.3c2.8 0 5-2.2 5-5s-2.2-5-5-5zM53.2 55h29.3c2.8 0 5-2.2 5-5s-2.2-5-5-5H53.2c-2.8 0-5 2.2-5 5s2.2 5 5 5zm0-22.4h19.4c2.8 0 5-2.2 5-5s-2.2-5-5-5H53.2c-2.8 0-5 2.2-5 5s2.2 5 5 5z" />
    </svg>
  );
};

export default SvgSortDesc;
