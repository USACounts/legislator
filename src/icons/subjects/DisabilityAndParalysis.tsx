import * as React from 'react';

function SvgDisabilityAndParalysis(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={100} width={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        style={{
          textIndent: 0,
          textTransform: 'none',
          blockProgression: 'tb',
        }}
        d="M39.992 10.978c-4.947 0-9.031 4.116-9.031 9.063 0 4.25 3.043 7.77 7.03 8.687v24.25a2 2 0 002 2h24.813l11.438 20.969a2 2 0 001.75 1.062l7-.03a2 2 0 100-4l-5.813.03-11.437-20.968a2 2 0 00-1.75-1.063h-24v-9h20a2 2 0 100-4h-20V28.76c3.99-.904 6.969-4.455 6.969-8.718 0-4.947-4.022-9.063-8.97-9.063zm-.5 4.031c.17-.017.326 0 .5 0a5.023 5.023 0 015.031 5.032c0 2.785-2.246 4.937-5.031 4.937-2.785 0-5-2.152-5-4.937 0-2.611 1.959-4.775 4.5-5.032zM26.898 40.197a2 2 0 00-.906.281 26.07 26.07 0 00-12.125 15.813c-3.71 13.847 4.559 28.133 18.406 31.843 13.847 3.71 28.133-4.559 31.844-18.406a2.005 2.005 0 10-3.875-1.031C57.09 80.456 45.063 87.41 33.304 84.259c-11.759-3.15-18.713-15.178-15.562-26.937a22.03 22.03 0 0110.25-13.375 2 2 0 00-.5-3.688 2 2 0 00-.594-.062z"
        overflow="visible"
        color="#000"
      />
    </svg>
  );
}

export default SvgDisabilityAndParalysis;
