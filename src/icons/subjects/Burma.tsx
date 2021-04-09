import * as React from 'react';

const SvgBurma = (properties: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M26.5 41.875c-.422-.787.1-1.604.598-2.365.149.476.232.218.502.474.69-1.155 1.015-2.773.41-4.092.403.187.855.389 1.344.336.353-1.443-.512-4.807 1.503-4.623.13-.754.357-1.748.175-2.483-.191-.768-.928-1.293-1.111-2.103.604-.034 2.24.332 2.704.111.633-.301.6-1.295.845-2.008.428-1.241 1.499-2.463 1.766-3.594-1.854-.827-.866-2.282-.332-3.659.243-.624.727-1.107.848-1.744.128-.676-.11-1.042.101-1.756.247-.838.728-1.309 1.437-1.871.207-.164.846-.289.935-.386.321-.349.304-.956.562-1.346.761-1.148 2.84-1.542 3.243-3 .406.436.798.986.866 1.591 1.324.372.771-.946.882-1.612.099-.602.854-.873.269-1.628.667-.137 1.267-.576 1.953-.167.74-1.017 2.248-.509 2.021.778.923.135.613.563.976 1.025.133.169.121.52.285.722.271.333.74-.028 1.005.26.688.749.607 2.434.994 3.388.479 1.179.836 2.398.725 3.753-.072.88-.472 1.249-.881 1.752-.282.347-1.154-.067-.547.881-.218-.055-.479.048-.685.01-.158.824.361 2.296-1.122 1.878-.132.172-.504.656-.53.852-.051.391.499.532.49.65-.047.616-.461 1.08-.394 1.628.066.543.796 1.151 1.035 1.597.378.705.586 1.344.643 2.248 1.129-1.153 1.415-1.54 3.06-1.254.058.571-.124 1.89.959 1.43 1.466.263.196.737.734 1.55.246.371 1.396.305 1.812.65-.976.418-.097 1.355.551.356 1.578.879 1.352.753 1.228 2.522-.03.438.402.147.205.837-.111.387-.489.689-.714 1-.411.569-.93 1.136-1.219 1.765.84.091 1.227-.836 2.087-.493.073-.223.292-.386.379-.568 1.146.633 1.053 1.746.922 2.812.718.07 1.367.202 1.945.631.145-.552 2.911-1.609 3.513-1.246 1.192.719-.623 1.987-1.202 2.468-.231-1.46-1.105.798-1.507.809.029.451.003.641.347.957-.475.107-.767.399-.891.883-.69-.283-.932.356-.996.998-.717-.032-2.709.078-2.582.997.407.055.56.3.835.491-.51.673-1.063.273-1.481.528-.801.49-.193.548-.619 1.252-.4.661-1.881 1.352-2.606 1.609-.267-1.611-2.094-.137-2.39.65.663.466.259 1.722-.373 2.092.072.017.145.032.218.046-.023.595.123 1.17.535 1.604-.641.53-1.838.986-2.255 1.725 1.16.211 1.777 2.207 2.134 3.131.989-.218 2.3 2.414 2.882 3.25.124-.023.232-.06.356-.092.819 1.183 1.647 2.537 1.277 3.638-.377 1.121-1.372 3.101-.203 4.225-2.032.118.333 3.409.913 4.025.696.739 1.676 1.324 2.253 2.126.538.748.402 1.76 1.215 2.355-1.013-.094-1.062 1.631-.815 2.345.084.246.607.424.735.765.208.558-.198 1.002.222 1.402.076 1.17.064 1.769 1.129 2.247.383.908-1.682 3.972-2.258 4.838-.094.141-.479-.104-.574.045-.149.233-.03.529-.147.727-.197.332-.44.988-.604 1.372-.394.93-.646 1.908-.931 2.876-.254-.852-.392-2.079-.582-3.011 1.289-.716.42-1.774.863-2.866.199-.49.634-.417.756-.875.098-.37-.337-.955-.237-1.454 1.287-.288-.526-1.501-.799-1.918-.486-.747-.217-.802-.216-1.512.001-.245.377-.306.38-.622.001-.186-.375-.273-.387-.393-.146-1.485-.36-4.171-1.622-5.238-.326.348-.287.817-.397 1.324-1.062-1.653-.827-1.59-.846-3.314-.012-1.024-.832-1.742.352-2.437-.358-.254-.947-.56-1.236-.905-.422-.502-.237-.875-.488-1.406-.394-.831-.668-.892-.759-1.875-.074-.801.244-1.547-.644-1.869.608-.989-.04-2.142.756-2.99-1.913 1.194-1.812.453-2.487-1.113-.388-.897-1.497-2.575-2.457-2.758.213.451.09 1.064.191 1.349.219.61.829.568.622 1.363-.109.055-.221-.002-.336.037-.279 1.362-1.671 1.454-2.529.651-.069.629-.045 1.188.532 1.556-.814.491-1.879.394-2.748.829-1.072.536-2.24 1.463-3.5 1.551-.019-.175-.181-.345-.169-.586a3.06 3.06 0 00-1.213.377c.042.287-.104.682-.04.961-1.073-.485.444-1.938.51-2.717-.578.074-1.792 1.485-1.988 1.886-.001-1.486.363-2.288.656-3.652.107-.503-.09-1.244.003-1.659.111-.497.396-.664.831-1.194-1.142-.234-1.393-1.157-1.49-2.146-.047-.475.114-1.036 0-1.497-.164-.664-.547-.638-.752-1.163-.344-.879-1.082-4.238-2.35-4.468.013.669.207 1.536.433 2.145-.571-.57-1.567-.764-2.049-1.299-.479-.532-.521-1.357-1.016-1.821.789-.194.822.582 1.243 1.065.055-.489-.094-1.016-.244-1.443.625-.078.84.476 1.115.943.541-1.459.057-2.135-1.033-2.803-.252-.154-1.175-1.033-1.313-1.07-.572-.151-.832.433-1.39.261.813-1.078-.516-1.144-1.247-1.337.083.395.161.888.081 1.318-1.217-1.036-2.055-2.486-2.132-4.089-.048.253-.175.616-.222.884"
      />
    </svg>
  );
};

export default SvgBurma;
