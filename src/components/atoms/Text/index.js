import styled from "styled-components/native";

export const TimeDurationText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size:  ${({ theme }) => theme.metrics.px( theme.fontSizes.xSmall)}px;
  color:  ${({ theme,color }) => color || theme.colors.Black};
`;


export const TimeDurationHMText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size:  ${({ theme }) => theme.metrics.px( theme.fontSizes.xBold)}px;
  color:  ${({ theme,color }) => color || theme.colors.Black};
`;

export const TimeDurationTimeSymbolText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size:  ${({ theme }) => theme.metrics.px( theme.fontSizes.regular)}px;
  color:  ${({ theme,color }) => color || theme.colors.Grey};
`;

export const TagText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size:  ${({ theme }) => theme.metrics.px( theme.fontSizes.xLight)}px;
  color:  ${({ theme,color }) => color || theme.colors.Grey};
  line-height: ${({ theme }) => theme.metrics.px( 20)}px;
`;//TODO line height meselesini düşün!!!!!!

export const ActItemTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size:  ${({ theme }) => theme.metrics.px( theme.fontSizes.light)}px;
  color:  ${({ theme,color }) => color || theme.colors.BlackSolid};

`;

export const HomeTaskTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size:  ${({ theme }) => theme.metrics.px( theme.fontSizes.bold)}px;
  color:  ${({ theme,color }) => color || theme.colors.Black};

`;

//margin: 8px 5px 5px 8px;
// xLight : 12,
// light : 14,
// xSmall : 16,
// small : 18,
// regular : 20,
// bold : 24,
// xBold : 32,
// xxlBold : 40,
// black : 48,
