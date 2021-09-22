import styled from "styled-components/native";

export const TimeDurationText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.xSmall)}px;
  color: ${({ theme, color }) => color || theme.colors.Black};
`;

export const TimeDurationHMText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.xBold)}px;
  color: ${({ theme, color }) => color || theme.colors.Black};
`;

export const TimeDurationTimeSymbolText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.regular)}px;
  color: ${({ theme, color }) => color || theme.colors.Grey};
`;

export const TagText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.xLight)}px;
  color: ${({ theme, color }) => color || theme.colors.Grey};
  line-height: ${({ theme }) => theme.metrics.px(14)}px;
`; //TODO line height meselesini düşün!!!!!!

export const ActItemTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.light)}px;
  color: ${({ theme, color }) => color || theme.colors.BlackSolid};
`;

export const HomeTaskTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.bold)}px;
  color: ${({ theme, color }) => color || theme.colors.Black};
`;

export const CurrentTaskTimeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.xBold)}px;
  color: ${({ theme, color }) => color || theme.colors.White};
`;

export const CurrentTaskTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.xSmall)}px;
  color: ${({ theme, color }) => color || theme.colors.White};
  margin-left: ${({ theme, mL }) => theme.metrics.px(mL || 0)}px;
`;

export const TodayTaskTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.regular)}px;
  color: ${({ theme, color }) => color || theme.colors.Black};
`;

export const TodayTaskSeeAll = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.xSmall)}px;
  color: ${({ theme, color }) => color || theme.colors.Black};
`;

export const TimerScreenButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.small)}px;
  color: ${({ theme, color }) => color || theme.colors.Black};
`;

export const TimerScreenTimerText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.xxlBold)}px;
  color: ${({ theme, color }) => color || theme.colors.Black};
`;

export const TimerScreenHeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.bold)}px;
  color: ${({ theme, color }) => color || theme.colors.Black};
  margin-left: ${({ theme, mL }) => theme.metrics.px(mL || 0)}px;
`;

export const SwitchText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(theme.fontSizes.xSmall)}px;
  color: ${({ theme, color }) => color || theme.colors.Black};
  line-height: ${({ theme }) => theme.metrics.px(18)}px;
  opacity: ${({ theme, opacity }) => theme.metrics.px(opacity || 1)};
  margin-left: ${({ theme, mL }) => theme.metrics.px(mL || 0)}px;
  margin-right: ${({ theme, mR }) => theme.metrics.px(mR || 0)}px;
`; //TODO line height meselesini düşün!!!!!!

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
