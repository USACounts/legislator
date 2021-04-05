import * as React from 'react';

function SvgOrganizationOfAmericanStates(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={1200}
      height={1200}
      {...props}
    >
      <image
        data-name="Color Fill 1"
        x={423}
        y={464}
        width={532}
        height={220}
        xlinkHref="data:img/png;base64,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"
      />
    </svg>
  );
}

export default SvgOrganizationOfAmericanStates;
