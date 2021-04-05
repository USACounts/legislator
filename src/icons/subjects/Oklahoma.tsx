import * as React from 'react';

function SvgOklahoma(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={100} width={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M91.125 70c.129-.045-1.533-.227-2.402-.528-.898-.311-1.824-1.046-2.507-1.691-.641-.605-1.42-1.776-2.565-1.633-.843.105-1.792 1.448-2.803.493-1.215.475-2.24.769-3.451 1.11-.721.204-1.108.507-1.725.99-.309.242-1.05 1.068-1.427 1.12-.39.054-.229-.283-.488-.339-.571-.125-.828-.543-1.217-.683-.417-.15-.914.025-1.29-.214-.395-.251-.325-.902-.778-1.099-.52-.226-.747.372-1.328.203.158-1.167-1.655-1.438-2.402-.828-.643.524-.36 2.242-1.973 1.84.06-.391-.151-.75-.166-1.111-.669.353-1.573 1.509-2.336.97 1.197-1.332-.88-2.219-1.988-1.937-1.103.281-1.96 2.025-2.9 1.084-.521-.522-.179-1.16-.466-1.75-.251-.515-.937-.968-1.412-1.247-1.317-.772-2.415-.621-2.777.987-.601-.542-.817-.744-1.598-.987-.607-.189-1.648.084-2.125-.12-.617-.263-.673-1.141-1.369-1.386-.674-.237-2.285.412-2.843.767.038-.024.284-.121.325-.134-.26-.928.479-2.2-.732-2.727-.704-.307-1.889-.109-2.763.09-.407.093-.343.497-.966.484-.12-.002-1.046-.46-1.158-.569-.637-.618-1.145-1.754-1.744-2.531l.125-22.75C37.917 35.917 9.25 35 9.25 35c.108.076.053-5.196 0-5.125l79.125.375c.177 1.483-.376 2.894.027 4.472.342 1.338.763 2.959.947 4.399.259 2.004.346 3.633 1.057 5.534.555 1.483.656 2.687.737 4.269-.04-.119-.13-.178-.269-.175L91.125 70z"
      />
    </svg>
  );
}

export default SvgOklahoma;
