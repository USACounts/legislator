import * as React from 'react';

const SvgRi = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M10.508 12.08l-.097-2.038-.29.776.387 1.262zm1.942-1.553l-1.262-2.426-.097 2.523 1.359-.097zm-.583-3.009l.68 1.747.873 1.553.583-1.164-.874-1.65-.291-1.165h-.97zM1.093 3.538l.389 1.068 3.009 8.445.582 2.038.097 2.33.194-.291 4.66-3.689-.874-6.6 1.94-.388-4.27-5.145-4.465 1.747z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgRi;
