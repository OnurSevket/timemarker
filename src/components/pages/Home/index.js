import React from 'react'
import {ActItemTitleText, FlexBox, StyledBox} from "../../atoms";
import {theme} from "../../../styles/theme";
import {ActivityItem} from "../../molecules";
import {HomeTask} from "../../organisms";
import {SafeAreaView} from "react-native";



export const HomeScreen = ()=>{
    return(
        <StyledBox
                    flex={1}
                    color={theme.colors.Grey}
        >

                {/*<ActItemTitleText>Home Screen</ActItemTitleText>*/}
                <HomeTask />
                <ActivityItem
                    name={'UI Design'}
                    tag={['Work','Rasion Project']}
                    time={'00:42:21'}/>


        </StyledBox>
    );
}

