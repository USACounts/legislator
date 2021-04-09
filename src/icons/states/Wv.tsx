import * as React from 'react';

const SvgWv = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M40.73 15.713L26.947 19.11 22.677.668l-.195.097-.485 21.257-3.106 4.659-3.592 2.718-.679-.777-3.98 5.436.292 4.27-2.427.389-3.3 5.047 1.165 3.3-1.456 3.203L.74 52.306v.194l1.941 6.794 5.533 6.698 3.106 1.747h2.426l.292.097.194.097 1.067 3.009 6.115 2.232 2.427-2.135 2.524-.388 5.338-4.174 6.503-1.941 1.748-2.815.388-5.824 2.33-4.465 2.911-13.2 5.921 2.038 1.941-5.727 3.01-3.3 4.95-9.415-.195-5.63 9.027 3.883.583-4.077v-.097l-2.815-4.853-5.824-.68-3.397 2.621v1.941l-2.912.68-4.27 3.009-2.233.485-4.465 6.31-2.233-10.192-1.941.485z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgWv;
