import React from "react";
import Svg,{Path} from 'react-native-svg'

export default function DesktopIcon(){
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M21 3H3C2.17157 3 1.5 3.67157 1.5 4.5V16.5C1.5 17.3284 2.17157 18 3 18H21C21.8284 18 22.5 17.3284 22.5 16.5V4.5C22.5 3.67157 21.8284 3 21 3Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            <Path d="M14.25 21L13.875 18H10.125L9.75 21H14.25Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17.25 21H6.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M1.5 14.25V16.5C1.50111 16.8975 1.65951 17.2784 1.94057 17.5594C2.22163 17.8405 2.60252 17.9989 3 18H21C21.3975 17.9989 21.7784 17.8405 22.0594 17.5594C22.3405 17.2784 22.4989 16.8975 22.5 16.5V14.25H1.5ZM12 17.25C11.8517 17.25 11.7067 17.206 11.5833 17.1236C11.46 17.0412 11.3639 16.9241 11.3071 16.787C11.2503 16.65 11.2355 16.4992 11.2644 16.3537C11.2934 16.2082 11.3648 16.0746 11.4697 15.9697C11.5746 15.8648 11.7082 15.7933 11.8537 15.7644C11.9992 15.7355 12.15 15.7503 12.287 15.8071C12.4241 15.8639 12.5412 15.96 12.6236 16.0833C12.706 16.2067 12.75 16.3517 12.75 16.5C12.75 16.6989 12.671 16.8897 12.5303 17.0303C12.3897 17.171 12.1989 17.25 12 17.25Z" fill="white"/>
        </Svg>
    );
}
