import styled from "styled-components/native";
import {FlexBox} from "../FlexBox";

export const StyledBox = styled(FlexBox)`
  width: ${({ theme , width }) => theme.metrics.px(width || 60)}px;
  height: ${({ theme , height }) => theme.metrics.px(height || 60)}px;
  padding: ${({ theme , padding }) => theme.metrics.px(padding || 0)}px;
  border-radius: ${({ theme , radius }) => theme.metrics.px(radius || 0)}px;
  background-color: ${({ theme , color }) => color || theme.colors.White};
  margin-right: ${({ theme , marginR }) => theme.metrics.px(marginR || 0)}px;
`;
