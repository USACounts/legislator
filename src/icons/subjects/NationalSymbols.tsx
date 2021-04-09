import * as React from 'react';

const SvgNationalSymbols = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 10"
      {...properties}
    >
      <path
        d="M0 0v10h16V0H0zm8 .75v.75h8V.75H8zm0 1.5V3h8v-.75H8zm0 1.5v.75h8v-.75H8zM0 5.333v.75h16v-.75H0zm0 1.584v.75h16v-.75H0zM0 8.5v.75h16V8.5H0zM.444.748L.28.833.31.653.178.523.362.498.444.333l.083.165.184.026-.133.128.031.181L.444.748zm0 1.083l-.164.086.031-.181-.133-.128.184-.027.082-.164.083.164.184.027-.133.128.031.18-.165-.085zm0 1l-.164.086.031-.181-.133-.128.184-.027.082-.164.083.164.184.027-.133.128.031.18-.165-.085zm0 1.084L.28 4l.031-.18-.133-.129.184-.026.082-.165.083.165.184.026-.133.128L.609 4l-.165-.085zm0 1.083l-.164.085.031-.18-.133-.129.184-.026.082-.165.083.165.184.026-.133.128.031.181-.165-.085zm.712-2.667l-.165.086.031-.181-.133-.128.184-.027.083-.164.082.164.184.027-.133.128.031.18-.164-.085zm0 1.084L.99 3.5l.031-.18L.89 3.19l.184-.026L1.156 3l.082.165.184.026-.133.128.031.181-.164-.085zm0-2.167l-.165.085.031-.18-.133-.129.184-.026.083-.165.082.165.184.026-.133.128.031.181-.164-.085zm0 3.167L.99 4.5l.031-.18L.89 4.19l.184-.026L1.156 4l.082.165.184.026-.133.128.031.181-.164-.085zm.71-3.667l-.164.085.031-.18L1.6.523l.184-.026.083-.165.082.165.184.026L2 .652l.031.181-.164-.085zm0 1.083l-.164.086.031-.181-.133-.128.184-.027.083-.164.082.164.184.027L2 1.736l.031.18-.164-.085zm0 1l-.164.086.031-.181-.133-.128.184-.027.083-.164.082.164.184.027L2 2.736l.031.18-.164-.085zm0 1.084L1.703 4l.031-.18L1.6 3.69l.184-.026.083-.165.082.165.184.026L2 3.819 2.031 4l-.164-.085zm0 1.083l-.164.085.031-.18-.133-.129.184-.026.083-.165.082.165.184.026L2 4.902l.031.181-.164-.085zm.712-2.667l-.165.086.031-.181-.133-.128.184-.027.083-.164.082.164.184.027-.133.128.032.18-.165-.085zm0 1.084l-.165.085.031-.18-.133-.129.184-.026L2.578 3l.082.165.184.026-.133.128.032.181-.165-.085zm0-2.167l-.165.085.031-.18-.133-.129.184-.026.083-.165.082.165.184.026-.133.128.032.181-.165-.085zm0 3.167l-.165.085.031-.18-.133-.129.184-.026L2.578 4l.082.165.184.026-.133.128.032.181-.165-.085zm.71-3.667l-.164.085.032-.18-.134-.129.184-.026.083-.165.082.165.185.026-.134.128.032.181-.165-.085zm0 1.083l-.164.086.032-.181-.134-.128.184-.027.083-.164.082.164.185.027-.134.128.032.18-.165-.085zm0 1l-.164.086.032-.181-.134-.128.184-.027.083-.164.082.164.185.027-.134.128.032.18-.165-.085zm0 1.084L3.125 4l.032-.18-.134-.129.184-.026.083-.165.082.165.185.026-.134.128.032.181-.165-.085zm0 1.083l-.164.085.032-.18-.134-.129.184-.026.083-.165.082.165.185.026-.134.128.032.181-.165-.085zM4 2.33l-.165.086.032-.181-.134-.128.185-.027L4 1.917l.082.164.185.027-.134.128.032.18L4 2.332zm0 1.084l-.165.085.032-.18-.134-.129.185-.026L4 3l.082.165.185.026-.134.128.032.181L4 3.415zm0-2.167l-.165.085.032-.18-.134-.129.185-.026L4 .833l.082.165.185.026-.134.128.032.181L4 1.248zm0 3.167l-.165.085.032-.18-.134-.129.185-.026L4 4l.082.165.185.026-.134.128.032.181L4 4.415zM4.711.748l-.165.085.032-.18-.134-.129.185-.026.082-.165.083.165.184.026-.134.128.032.181L4.71.748zm0 1.083l-.165.086.032-.181-.134-.128.185-.027.082-.164.083.164.184.027-.134.128.032.18-.165-.085zm0 1l-.165.086.032-.181-.134-.128.185-.027.082-.164.083.164.184.027-.134.128.032.18-.165-.085zm0 1.084L4.546 4l.032-.18-.134-.129.185-.026.082-.165.083.165.184.026-.134.128.032.181-.165-.085zm0 1.083l-.165.085.032-.18-.134-.129.185-.026.082-.165.083.165.184.026-.134.128.032.181-.165-.085zm.711-2.667l-.165.086.032-.181-.133-.128.184-.027.082-.164.083.164.184.027-.133.128.031.18-.165-.085zm0 1.084l-.165.085.032-.18-.133-.129.184-.026L5.422 3l.083.165.184.026-.133.128.031.181-.165-.085zm0-2.167l-.165.085.032-.18-.133-.129.184-.026.082-.165.083.165.184.026-.133.128.031.181-.165-.085zm0 3.167l-.165.085.032-.18-.133-.129.184-.026L5.422 4l.083.165.184.026-.133.128.031.181-.165-.085zM6.133.748L5.97.833 6 .653 5.867.523 6.05.498l.082-.165.083.165.184.026-.133.128.031.181-.165-.085zm0 1.083l-.164.086L6 1.736l-.133-.128.184-.027.082-.164.083.164.184.027-.133.128.031.18-.165-.085zm0 1l-.164.086L6 2.736l-.133-.128.184-.027.082-.164.083.164.184.027-.133.128.031.18-.165-.085zm0 1.084L5.97 4 6 3.82l-.133-.129.184-.026.082-.165.083.165.184.026-.133.128.031.181-.165-.085zm0 1.083l-.164.085.031-.18-.133-.129.184-.026.082-.165.083.165.184.026-.133.128.031.181-.165-.085zm.711-2.667l-.164.086.031-.181-.133-.128.184-.027.082-.164.083.164.184.027-.133.128.031.18-.165-.085zm0 1.084L6.68 3.5l.031-.18-.133-.129.184-.026L6.844 3l.083.165.184.026-.133.128.031.181-.165-.085zm0-2.167l-.164.085.031-.18-.133-.129.184-.026.082-.165.083.165.184.026-.133.128.031.181-.165-.085zm0 3.167L6.68 4.5l.031-.18-.133-.129.184-.026L6.844 4l.083.165.184.026-.133.128.031.181-.165-.085zM7.556.748L7.39.833l.031-.18L7.29.523l.184-.026.083-.165.082.165.184.026-.133.128.031.181-.164-.085zm0 1.083l-.165.086.031-.181-.133-.128.184-.027.083-.164.082.164.184.027-.133.128.031.18-.164-.085zm0 1l-.165.086.031-.181-.133-.128.184-.027.083-.164.082.164.184.027-.133.128.031.18-.164-.085zm0 1.084L7.39 4l.031-.18-.133-.129.184-.026.083-.165.082.165.184.026-.133.128L7.72 4l-.164-.085zm0 1.083l-.165.085.031-.18-.133-.129.184-.026.083-.165.082.165.184.026-.133.128.031.181-.164-.085z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgNationalSymbols;
