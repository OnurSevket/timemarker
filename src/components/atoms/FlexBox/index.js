import styled from "styled-components/native";

export const FlexBox = styled.View.attrs(props => ({
    flexDirection : props.direction || 'column',
    flex : props.flex || 0,
    backgroundColor : props.color || '#11ffee00',
    alignItems : props.crossAxis || 'center',
    justifyContent : props.mainAxis || 'center',
}))`
  display: flex;
`;
