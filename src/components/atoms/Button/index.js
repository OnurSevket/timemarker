import styled from "styled-components/native";
import {FlexBox} from "../FlexBox";
import {TouchableOpacity} from "react-native";

export const Button = styled(TouchableOpacity)`
  border-radius:${({ theme , radius }) => theme.metrics.px(radius || 500)}px;
  background-color: ${({ theme , color }) => color || theme.colors.Purple};
  height: ${({ theme , height }) => theme.metrics.px(height || 44)}px;
  width: ${({ theme , width }) => theme.metrics.px(width || 44)}px;
`;
//  margin: ${({ theme }) => theme.metrics.px(16) + 'px'};
