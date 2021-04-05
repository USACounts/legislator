import * as React from 'react';

function SvgIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M41.344 1.224l-14.85 2.62-3.398.68-12.036 1.94-2.523 2.04L4.75 10.25l-1.456-.097-1.747-.873-.582-.583L7.76 56.55l-1.359 5.145 2.427 4.562.776 3.785-3.688 8.639-2.136 1.553-.097 8.638.389.098.388-.098 1.456-2.717h3.591l4.368-1.456 5.435 2.038.583-2.232 3.106-2.33 4.659.68 2.524-4.95 6.891.582-.097-2.815 6.115-8.056-.97-3.689 4.27-.097 5.241-4.174-1.261-4.756.194-.194-.194-1.65-5.824-34.36-2.62-14.657-.292-1.553-.291-1.262z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgIn;
