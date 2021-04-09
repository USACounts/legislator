import * as React from 'react';

const SvgMt = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M161.658 20.974l-32.128-2.136-23.392-2.232-23.296-2.718-14.462-1.941-23.101-3.591-11.55-1.942-25.82-4.95L5.193.882l-4.174 19.8 1.844 3.592 1.456 5.533-.873.776L5.29 35.63l2.524 2.136 7.182 12.036.68 2.038 2.912-.194-3.398 15.918-1.358.388-1.845 5.339 9.61.68.776 4.464 5.436 13.298.97.776 3.786 7.765.97-.776 8.057-.097 10.191 1.067 2.524-3.3 3.009 5.436.582.291.097-.582 1.36-9.513 33.195 4.077 26.498 2.524 13.977 1.165 24.945 1.455 1.262.098h.291l.097-1.36.292-6.697.388-8.832.097-2.233.194-3.882 1.553-30.478 1.262-23.684.097-3.882-1.844-.097z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgMt;
