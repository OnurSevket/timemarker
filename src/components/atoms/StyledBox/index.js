import styled from "styled-components/native";
import { FlexBox } from "../FlexBox";

export const StyledBox = styled(FlexBox)`
  height: ${({ theme, height }) => theme.metrics.px(height || 60)}px;
  padding: ${({ theme, padding }) => theme.metrics.px(padding || 0)}px;
  border-radius: ${({ theme, radius }) => theme.metrics.px(radius || 0)}px;
  background-color: ${({ theme, color }) => color || theme.colors.White};
  margin-right: ${({ theme, marginR }) => theme.metrics.px(marginR || 0)}px;
`;

export const MaxWidthBox = styled(FlexBox)`
  width: ${(props) => (props.autoWidth ? "auto" : "100%")};
  position: ${(props) => (props.absolute ? "absolute" : "relative")};
  border-radius: ${({ theme, radius }) => theme.metrics.px(radius || 0)}px;
  padding-top: ${({ theme, pT }) => theme.metrics.px(pT || 0)}px;
  padding-bottom: ${({ theme, pB }) => theme.metrics.px(pB || 0)}px;
  padding-left: ${({ theme, pL }) => theme.metrics.px(pL || 0)}px;
  padding-right: ${({ theme, pR }) => theme.metrics.px(pR || 0)}px;
  margin-top: ${({ theme, mT }) => theme.metrics.px(mT || 0)}px;
  margin-bottom: ${({ theme, mB }) => theme.metrics.px(mB || 0)}px;
  margin-left: ${({ theme, mL }) => theme.metrics.px(mL || 0)}px;
  margin-right: ${({ theme, mR }) => theme.metrics.px(mR || 0)}px;
`;

export const MaxHeightBox = styled(FlexBox)`
  height: 100%;
  margin-left: ${({ theme, mL }) => theme.metrics.px(mL || 0)}px;
  border-radius: ${({ theme, radius }) => theme.metrics.px(radius || 0)}px;
`;

export const HeightStyledBox = styled(MaxWidthBox)`
  height: ${({ theme, height }) => theme.metrics.px(height || 60)}px;
`;

export const MaxHeightCustomWidthBox = styled(MaxWidthBox)`
  height: 100%;
  width: ${({ theme, width }) => theme.metrics.px(width || 0)}px;
`;

// export const AutoWidthBox = styled(MaxWidthBox)`
//   width: auto; `;

//margin: ${({ theme , margin }) => theme.metrics.px(margin || 0)}px;
//  width: ${({ theme , width }) => theme.metrics.px(width || 60)}px;
// ${({ maxHeight }) => maxHeight &&
// `height: 100%;`
// }
// ${({ width }) => width &&
// `width: 60px;`
// }

/*${({ maxWidth }) =>
!maxWidth &&
`
      width: 100%;
    `}*/

/*export const TestBox = styled(FlexBox)`
  background: #008800;
`;
export const MaxHeigsssshtBox = styled(FlexBox)`
  height: 100%;
  ${(props) =>
    props.color != undefined &&
    `
        background: #008800;
    `}
`;

export const MaxHeightssssMLBox = styled(MaxHeightBox)`
  margin-left: 16px;
  /!*  background: #008800;*!/
`;*/
