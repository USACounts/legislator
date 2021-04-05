import * as React from 'react';

function SvgArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M69.407 52.399a3.19 3.19 0 00.189-.206c.031-.037.06-.076.09-.115l.043-.057a3.377 3.377 0 00.001-4.041c-.018-.025-.037-.052-.057-.076-.025-.03-.048-.062-.075-.093a2.905 2.905 0 00-.194-.216L54.3 32.493c-1.327-1.327-3.479-1.327-4.808 0s-1.329 3.479 0 4.808l9.299 9.3L33 46.602a3.398 3.398 0 100 6.798l25.791-.001-9.299 9.299a3.401 3.401 0 004.808 4.811l15.103-15.102c0-.003.003-.004.004-.008z" />
      <path d="M16 50.001C16 68.777 31.223 84 50 84s33.999-15.223 34-34c0-18.777-15.223-34-34-34-18.777.001-34 15.223-34 34.001zm61.2 0c0 15.021-12.179 27.199-27.2 27.2-15.021 0-27.2-12.18-27.2-27.2 0-15.022 12.179-27.2 27.2-27.2 15.021-.001 27.2 12.178 27.2 27.2z" />
    </svg>
  );
}

export default SvgArrow;
