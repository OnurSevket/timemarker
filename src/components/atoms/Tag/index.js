import React from 'react'
import {theme} from "../../../styles/theme";
import {TagText, TimeDurationHMText, TimeDurationText} from "../../atoms/Text";
import {StyledBox2} from "../StyledBox2";



export const Tag = ({...props})=>{
    return(
        <StyledBox2
            height={24}
            width={150}
            direction={"row"}
            pT={5}
            pB={5}
            pR={8}
            pL={8}
            radius={6}
            color={props.color}>
                <TagText color={props.textColor}>{props.text}</TagText>
        </StyledBox2>
    );
}
//[8,5,5,8]
