import React from 'react'
import {theme} from "../../../styles/theme";
import {TagText, TimeDurationHMText, TimeDurationText} from "../../atoms/Text";
import {FlexBox, StyledBox} from "../../atoms";

export const Tag = ({...props})=>{
    return(
        <StyledBox
            direction={'row'}
            height={24}
            flex={1}
            radius={6}
            color={props.color}>
                <TagText color={props.textColor}>{props.text}</TagText>
        </StyledBox>
    );
}
//[8,5,5,8]
