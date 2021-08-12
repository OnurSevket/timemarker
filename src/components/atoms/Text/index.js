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
`;

// xLight : 12,
// light : 14,
// xSmall : 16,
// small : 18,
// regular : 20,
// bold : 24,
// xBold : 32,
// xxlBold : 40,
// black : 48,
