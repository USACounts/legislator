import * as React from 'react';

const SvgWa = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M3.134 46.05l.097-1.65-.194.097.097 1.553zm20.674-8.832l.583-.97-.68-.098.097 1.068zm-1.844-1.747l.582-1.942-.582-.194zm7.086-2.815l-.097-1.942-1.65 2.524 1.747-.582zm.194-4.077l.291-1.941-.194-.486-.097 2.427zm.291-9.512l-.097-1.068-.388-.097.485 1.165zm3.106-6.406l-.874-.097-1.747 2.717 2.621-2.62zm-2.427-2.621l.486-.388.097-.291-.583.679zm-.485.291l-.291-1.941-.874 1.65zm-.485-2.718l-.874-.388.68.97zm2.912 1.65v-1.26l-.291.485zm.873-1.261l-.388-.291h-.097l.485.29zm-5.532-2.136l-.486-.388-.194-.097.68.485zm3.591-.388l-2.62.68.679.194zm-2.135-.194l-.486-.582-.097.097.583.485zm2.038-1.165h-.388l.485.194-.097-.194zM11.967 53.913l3.494 3.785-.583 7.28.68 1.844 5.241 2.815 14.754 1.359.582 1.747 6.989.097 6.6.873 10.774-1.164 5.339.873 1.456-.68 27.274 6.213 1.844.388-.194-.97.389-4.368-.486-4.174 11.26-50.667-1.553-.291-22.713-5.339-19.801-5.047-22.422-6.212-6.697-1.65 1.553 8.444-1.456 2.718-2.62-1.359 2.523 11.745-2.718 3.882-1.262 3.592v3.688l-5.726 3.98-2.427-1.553-2.33 1.165 4.271-5.533-1.067 3.785 2.426-2.62 1.942.388-.583-4.853 1.262.194 2.62-5.824-.873-.873-3.397 4.367-2.233.097 2.427-2.717 2.718-.68-.97-4.95-2.719-.68-1.358-2.329-1.65.874-8.93-3.883-7.862-6.115-2.136 5.921-.194 2.524 1.65 4.465-1.068 14.462-.776 2.232 4.368.389-4.368 3.106 2.33 1.164-1.845 6.212-.873-4.853-1.65 5.63 2.232 2.718 2.427-.194 2.911 1.747 1.456 2.815h1.748z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
};

export default SvgWa;
