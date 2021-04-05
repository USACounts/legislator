import * as React from 'react';

function SvgMe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.8 97.4h-.097l.194.096-.097-.097zm7.182-20.675l-.776-1.165v.582zm-1.359-1.068v-.97l-.097-.583zm3.495-4.076l-.194-.098.097.292.097-.194zm9.706-4.854l-.194-1.456-.388.68zm-2.427.583l.097-1.068-1.164.194 1.067.874zm3.592-3.203H43.6v.194zm-4.853 1.456l-.874-.195-.097.874.97-.68zm4.95-3.01l.873.68-.29-.776-.583.097zm-2.62.098l-.874 1.65 1.164-.583zm-4.175.097l-.388.582.291.874.097-1.456zm5.727-3.203l-.097-.777-.291.486.388.29zm-.485.388l-.874-.777v.68l.874.097zm-5.436 2.232l-.194-1.067-.388.873zm9.221-3.397l-1.456 2.136-.097-1.553 1.553-.583zm7.086-6.503l-.68-.97-.388.193zm2.62-4.368l-.582-.291-.097.291h.68zm1.262-7.57h-.873l.97.29-.097-.29zm1.456.97l-.29-1.747-.777-.097zm-1.553-1.553l-.194-1.844-.68 1.261zM.893 54.983l14.074 33.001.194.68 6.115 7.473v-.097l.97-.29.195-5.533 1.553-1.942.97-5.144-.873-.874 1.65-5.047 5.63-2.62 3.688-4.465 1.359-7.766 5.92-.388-.776-3.98 7.377-2.814.485-4.368 1.747.388 4.854-3.98 2.135-5.144-4.95-4.95-5.242-1.068-1.94-3.98v-2.329l-3.204.97-3.591-1.26v-3.98L29.526 4.51 22.441.82l-7.862 6.6-2.136-.387L10.6 3.636l-2.524.97-3.591 17.86 1.262 5.824 1.068 11.842L4 49.256l1.941 1.456-2.33 4.465-2.523-.388-.194.194z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgMe;
