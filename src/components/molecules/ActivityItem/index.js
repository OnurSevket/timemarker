import React from 'react'
import {theme} from "../../../styles/theme";

import {ActItemTitleText, DesktopIcon, FlexBox, PlayIcon, StyledBox, Tag, TagText} from "../../atoms";
import {CircleItem} from "../../atoms/CircleItem";
import styled from "styled-components/native/dist/styled-components.native.esm";


export const ActivityItem = ({...props})=>{
    return(
        <StyledBox
            direction={'row'}
            mainAxis={'space-between'}
            crossAxis={'flex-start'}
            height={84}
            width={343}
            radius={16}
            padding={16}
            color={theme.colors.White}>
            <FlexBox
                direction={'row'}
                mainAxis={'flex-start'}
                crossAxis={'flex-start'}>
                <FlexBox
                    crossAxis={'flex-start'}
                    mainAxis={'flex-start'}>
                    <CircleItem>
                        <DesktopIcon />
                    </CircleItem>
                </FlexBox>
                <MaxHeightMLBox
                    crossAxis={'flex-start'}
                    mainAxis={'space-between'}>
                    <ActItemTitleText>UI Design</ActItemTitleText>
                    <FlexBox
                        direction={'row'}
                        mainAxis={'space-between'}
                        crossAxis={'flex-start'}>
                        <Tag text={props.tag[0]}
                             textColor={theme.colors.Red}
                             color={theme.colors.RedLight}/>
                        <Tag text={props.tag[1]}
                             textColor={theme.colors.Purple}
                             color={theme.colors.PurpleLight}/>
                    </FlexBox>
                </MaxHeightMLBox>
            </FlexBox>
            <MaxHeightBox
                mainAxis={'space-between'}
                crossAxis={'flex-end'}>
                <TagText color={theme.colors.Grey2}>{props.time}</TagText>
                <PlayIcon/>
            </MaxHeightBox>
        </StyledBox>
    );
}
export const MaxHeightBox = styled(FlexBox)`
  height: 100%;
`;

export const MaxHeightMLBox = styled(MaxHeightBox)`
  margin-left: 16px;
/*  background: #008800;*/
`;

export const TestBox = styled(FlexBox)`
  background: #008800;
`;
