import React from "react";
import {ActItemTitleText, FlexBox, HomeTaskTitleText, MoreIcon, StyledBox2} from "../../atoms";
import { TouchableOpacity} from "react-native";
import {theme} from "../../../styles/theme";

export const HomeTask = ()=>{
    return(
        <StyledBox2 height={100} color={theme.colors.Background2}>

            <FlexBox
                // flex={1}
                 direction={'row'}
                mainAxis={'space-between'}
                crossAxis={'space-between'}
                color={theme.colors.Purple}
            >
                <HomeTaskTitleText>Task</HomeTaskTitleText>

                    <FlexBox
                        color={theme.colors.Grey2}>
                        <TouchableOpacity>
                            <MoreIcon/>
                        </TouchableOpacity>
                    </FlexBox>



            </FlexBox>
        </StyledBox2>
    )
}
