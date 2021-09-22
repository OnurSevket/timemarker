import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Button = styled(TouchableOpacity)``;

export const TimeScreenButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => color || theme.colors.Background2};
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  padding-top: ${({ theme, pT }) => theme.metrics.px(pT || 0)}px;
  padding-bottom: ${({ theme, pB }) => theme.metrics.px(pB || 0)}px;
  padding-left: ${({ theme, pL }) => theme.metrics.px(pL || 0)}px;
  padding-right: ${({ theme, pR }) => theme.metrics.px(pR || 0)}px;
  margin-top: ${({ theme, mT }) => theme.metrics.px(mT || 0)}px;
  margin-bottom: ${({ theme, mB }) => theme.metrics.px(mB || 0)}px;
  margin-left: ${({ theme, mL }) => theme.metrics.px(mL || 0)}px;
  margin-right: ${({ theme, mR }) => theme.metrics.px(mR || 0)}px;
`;

/*export const Button = styled(TouchableOpacity)`
  border-radius: ${({ theme, radius }) => theme.metrics.px(radius || 500)}px;
  background-color: ${({ theme, color }) => color || theme.colors.Purple};
  height: ${({ theme, height }) => theme.metrics.px(height || 44)}px;
  width: ${({ theme, width }) => theme.metrics.px(width || 44)}px;
`;*/
//  margin: ${({ theme }) => theme.metrics.px(16) + 'px'};
