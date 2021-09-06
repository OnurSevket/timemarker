import React from "react";
import Svg,{Path,G} from 'react-native-svg'

export default function PlusIcon(){
    return(
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G opacity="0.4">
            <Path d="M16 7V25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M25 16H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </G>
    </Svg>

);
}
