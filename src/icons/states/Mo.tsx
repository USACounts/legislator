import * as React from 'react';

function SvgMo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M67.669 5.446l-4.756-4.174-20.869 2.621-21.257 1.844L.89 6.32l-.098.582L3.22 11.56l2.232 1.553 2.621 4.659.388.388.971.777 2.33 1.65 2.523-.097 1.36 2.426-3.398 4.174 3.494 3.106.388 1.941 4.368 2.524 2.427 41.058.097 2.523.194 2.524.097 2.524.194 2.62.097 2.524 4.562-.291L59.42 85.62l36.98-3.591 1.845 3.785-4.27 6.795 10.482-1.553h.097v-.777l.194-4.465 1.941-2.426-.582-2.718-.097-.097-.097-.097.388-1.262.583.194.29.776-.096.292v.873l.388.097.776-.97v-.097l.097-.292 2.524-1.553.388-.194.874-7.959-.194-.388-.291-.097-6.892-5.63 1.068-2.038-1.941-5.533-3.495-2.718-6.6-2.911-4.174-3.398.486-6.988 1.261-6.503-6.988.388-2.136-2.233-.97-4.465-11.065-9.318-3.106-8.638.776-4.271-.194-.194z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgMo;
