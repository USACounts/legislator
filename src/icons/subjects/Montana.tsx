import * as React from 'react';

function SvgMontana(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={100} width={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M41.25 68.779l50.666-1.333-2.75-41-60.416.666-19.834-1.333c.07.733-.171 1.697-.162 2.521.016 1.358-.287 2.818-.404 4.173-.155 1.795-.903 3.69.132 5.306.896 1.4 1.536 1.867 1.372 3.68-.076.841.156 1.243.893 1.759.344.241.714.277 1.068.561.42.336.728.866 1.122 1.237.397.373.561.356.815.973.259.627.283 1.372.596 1.975.405.782 1.659 2.234 2.404 2.707.28-.789 1.514-.161 2.068-.049.054 1.056.065 2.146-.339 3.141-.463 1.135-.441 1.927-.5 3.169-.027.57.01 1.324-.233 1.847-.253.541-.694.462-.939.92-.247.462.263.971.21 1.417-.052.427-.466.516-.508.982.889.263 1.282 1.091 2.067.173.606-.708.619-1.673 1.672-1.843.959-.155 1.453.874 1.916 1.603.585.919.536 1.818.496 2.841-.052 1.301.618 1.069 1.19 1.993.45.727.071 1.642.31 2.421.325 1.065 1.012.7 1.836.992.902.319 1.315 1.454 1.418 2.338.05.43-.079.782.163 1.163.569.898.579.223 1.004-.172.795-.736 1.388.174 2.314.197.779.02.918-.989 1.77-1.091.488-.059.866.336 1.334.401.583.081.813-.149 1.398-.256.906-.164 1.432.301 2-.58.459-.71.565-1.613 1.665-1.184.75.293.879 1.052 1.246 1.626.251.393.826.822.939 1.144v-5.085z"
      />
    </svg>
  );
}

export default SvgMontana;
