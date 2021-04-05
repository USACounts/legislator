import * as React from 'react';

function SvgElSalvador(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={100} width={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M5.333 49.5c.645-.967 3.347-5.209 2.017-6.204.351-.641.603-1.339.984-1.934.25-.39.768-1.515 1.033-1.875.4-.541 1.075-.737 1.629-1.121.686-.475 1.17-.911 1.837-1.704 1.197-1.424 2.369-2.599 4.126-3.371.774-.34 1.194-.45 2.045-.425 1.083.031.97.287 2.209-.079 1.719-.507 3.809-1.626 5.462-1.796 1.848-.19 2.567.738 2.491-2.158-.023-.887-.365-1.285.209-2.071.602-.824 3.334-2.969 4.307-3.441 1.521-.738 2.48-.796 3.79-1.989.889-.811.12-1.256 1.745-1 .853.135 1.226.874 1.971 1.007 1.301.232 1.316-.336 2.525.322.553.301.99 1.247 1.491 1.512 1.091.577 2.674.435 3.671 1.284.505.432.697.527.968 1.204.542 1.354.021 1.411 1.158 2.325 1.644 1.322 3.28.505 5.341.184 1.296-.202 2.57-.05 3.896.366 1.086.342 1.559.465 2.762.464.646 0 1.759-.124 2.333.163 1.067.533 1.985 2.076 2.709 3.138.826 1.213 2.156 2.695 2.67 4.033.38.991-.087 1.542.622 2.207.491.46 1.455.55 2 .956 1.214.903 2.838 2.476 4.057.378.909-1.564 1.021-3.938 1.805-5.649 1.776.893 3.246-.001 4.978.101 1.285.075 3.183 1.01 4.456 1.553 1.057.451 2.957.676 3.671 1.63.496.663.466 1.587.257 2.511-.123.543-.521 1.035-.606 1.475-.043.22.208.838.178 1.172-.144 1.571-.747 3.298-1.12 4.824-.462 1.891.466 2.256.833 4.046.369 1.799-.88 3.282-1.31 5-.416 1.659.799 3.674.341 5.129.018-.057-.032.513-.028.487-.075-.169-.584-.716-.676-1.027-1.967 1.593 1.443 3.383.788 5.307-.644 1.893-3.516 3.247-4.124 5.187-.406-.33-2.306.308-3.159.367-.349.024-.65.35-1.009.353-.177.002-.759-.296-1.008-.335a13.552 13.552 0 00-1.825-.171c-2.43-.068-5.469 1.529-7.87.629-1.139-.427-1.589-1.604-2.63-2.304-.998-.671-1.978-1.151-2.955-1.866-1.12-.821-2.383-1.5-3.045-2.787-.637-1.237-.456-2.417-.525-3.813-.772-.095-1.464-.64-2.295-.546-.536.061-.825.818-1.346.866-.558.051-.762-.289-1.167-.354-1.314-.211-3.092-.651-4.333.463-2.052 1.843 2.214 1.645 3.494 1.596 1.074-.042 1.026-.804 1.672.322.798 1.394-.342 1.254-.837 1.828-1.028 1.192-1.394 2.342-3.159 2.013-1.654-.309-2.351-1.916-3.846-2.717-.947-.507-1.849-.564-2.797-.993-.951-.43-1.479-1.408-2.365-1.84-1.707-.832-3.951-1.109-5.783-1.868-2.084-.863-3.069-2.732-4.872-3.12-.988-.212-1.876-.419-2.712-.35-1.573.131-3.234 1.166-4.767 1.148-.475-1.478-4.673-2.037-6.042-2.298-3.394-.648-2.376-2.432-4.442-4.351-1.68-1.561-4.058-.521-6.05-.826-1.271-.195-3.432.851-4.375.382-.583-.29-1.156-2.177-1.119-2.049"
      />
    </svg>
  );
}

export default SvgElSalvador;
