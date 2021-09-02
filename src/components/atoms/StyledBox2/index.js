import styled from "styled-components/native";
import {FlexBox} from "../FlexBox";

export const StyledBox2 = styled(FlexBox)`
  width:auto;
  height: ${({ theme , height }) => theme.metrics.px(height || 60)}px;
  border-radius: ${({ theme , radius }) => theme.metrics.px(radius || 0)}px;
  background-color: ${({ theme , color }) => color || theme.colors.White};
  margin-right: ${({ theme , marginR }) => theme.metrics.px(marginR || 0)}px;
  padding-top :${({ theme , pT }) => theme.metrics.px(pT || 0)}px;
  padding-bottom :${({ theme , pB }) => theme.metrics.px(pB || 0)}px;
  padding-left :${({ theme , pL }) => theme.metrics.px(pL || 0)}px;
  padding-right :${({ theme , pR }) => theme.metrics.px(pR || 0)}px;
`;
//  width: ${({ theme , width }) => theme.metrics.px(width + 'px' || 'auto')};

/*${props => props.autoWidth && css`
  width: auto;
`}*/
