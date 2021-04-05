import * as React from 'react';

function SvgMd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M73.566 31.272l.68-5.241-.583 3.882-.388 1.65-.098.195.292-.098.097-.388zm.485-9.027l-.194.097.194.583v1.165-1.845zM.671 16.227L2.904 26.42l4.465-6.309 2.232-.485 4.27-3.01 2.913-.679v-1.941l3.397-2.62 5.824.679 2.815 4.853.29.097 4.466 1.165 3.203 2.33 3.106 1.358.291.291.388-.776 1.65-.097 1.36.776-1.263 2.33v.097l-1.844 5.63 6.018 3.882 6.018.291 3.98 1.844-1.65-4.659-5.145-1.747-1.262-3.98 3.203 4.271 2.621.389-2.33-2.33-1.844-6.891.486-3.98-2.039-4.368 2.136-1.747 1.553-5.63-.583 8.348 1.65 2.815 1.554-3.3.873 5.435-1.65 3.98 4.756 1.747-4.077 1.359 2.136 3.98 3.494 1.164 1.941-3.397-.194 4.756 3.3-.097 2.136 2.426h.097l.68-.873 1.94-.874 1.262-.485-.097-.194 2.524-7.474v-.291l-.485-1.941v-.098l-9.221 2.718L56.19 2.153 55.803.697l-1.65.486-6.891 2.135L9.31 13.898l-6.892 1.844-1.747.485z"
        fill="#f9f9f9"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.971}
      />
    </svg>
  );
}

export default SvgMd;
