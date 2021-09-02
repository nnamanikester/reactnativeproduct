import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Logo({width, height}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 39 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0 0h15.663l7.778 8.023L26.99 4h8.266L39 7.746h-3.526L15.982 27l-.412-.08c-.073-2.44-.022-4.886-.028-7.788l6.02-5.386c-.8-.7-1.457-1.27-2.289-1.992h-7.327L0 0z"
        fill="#1B2F5D"
      />
    </Svg>
  );
}

export default Logo;
