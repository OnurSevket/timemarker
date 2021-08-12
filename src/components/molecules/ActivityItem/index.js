import React from 'react'
import {theme} from "../../../styles/theme";

import {FlexBox, StyledBox, Tag} from "../../atoms";


export const ActivityItem = ({...props})=>{
    return(
        <StyledBox
            direction={'row'}
            height={84}
            width={343}
            radius={16}
            padding={8}
            color={theme.colors.White}>
            <Tag text={'Work'}
                 textColor={theme.colors.Red}
                 color={theme.colors.RedLight}/>
            <Tag text={'Rasion Project'}
                 textColor={theme.colors.Purple}
                 color={theme.colors.PurpleLight}/>
        </StyledBox>
    );
}
