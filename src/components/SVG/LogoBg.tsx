import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function LogoBg({width, height}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 276 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M-53 0H79.132l65.615 67.746 29.931-33.966h69.727L276 65.41h-29.741L81.819 228l-3.471-.677c-.618-20.605-.19-41.255-.238-65.761l50.78-45.483c-6.751-5.91-12.291-10.722-19.304-16.82h-61.81L-53 0z"
        fill="#C4C4C4"
        fillOpacity={0.24}
      />
    </Svg>
  );
}

export default LogoBg;
