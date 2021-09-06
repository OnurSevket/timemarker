import React from "react";
import Svg,{Path,G} from 'react-native-svg'

export default function PieChartIcon(){
    return(
        <Svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G opacity="0.4">
                <Path d="M12.0022 3.78047C12.2488 3.76016 12.498 3.75 12.7499 3.75C17.7186 3.75 21.7499 7.78125 21.7499 12.75C21.7499 17.7188 17.7186 21.75 12.7499 21.75C10.8432 21.7499 8.98581 21.1446 7.44523 20.0213C5.90464 18.8979 4.76041 17.3145 4.17737 15.4992" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                <Path d="M12 2.25C6.61501 2.25 2.25001 6.615 2.25001 12C2.24796 13.3731 2.53697 14.7311 3.09798 15.9844L12 12V2.25Z" fill="#C4C4C4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </G>
        </Svg>

    );
}
