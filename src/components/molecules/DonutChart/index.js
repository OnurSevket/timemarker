import * as React from "react";
import { Animated, Easing, StyleSheet, TextInput, View } from "react-native";
import Svg, { Circle, Defs, G, LinearGradient, Stop } from "react-native-svg";
import { theme } from "../../../styles/theme";
import { convertTotalSecondToHoursMinutesSecond } from "../../../utils";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const DonutChart = ({
  radius = theme.metrics.px(110),
  strokeWidth = 24,
  duration = 500,
  color = theme.colors.Purple,
  delay = 500,
  textColor,
  totalSeconds,
  completedSeconds,
}) => {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(({ finished }) => {
      console.log("lASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSs", finished);
      if (finished) {
        Animated.timing(animated, {
          delay: 1000,
          toValue,
          duration,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }).stop();
      }
    });
  };

  React.useEffect(() => {
    animation(completedSeconds);

    animated.addListener(
      (v) => {
        const totalTime = convertTotalSecondToHoursMinutesSecond(v.value);
        const maxPerc = (100 * v.value) / totalSeconds;
        const strokeDashoffset =
          circumference - (circumference * maxPerc) / 100;
        if (inputRef?.current) {
          inputRef.current.setNativeProps({
            text:
              `${Math.round(totalTime.minutes)}` +
              ":" +
              `${Math.round(totalTime.seconds)}`,
          });
        }
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [totalSeconds, completedSeconds]
    );
    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Defs>
            <LinearGradient id="grad" x1="1" y1="0" x2="4" y2="0">
              <Stop offset="0" stopColor="#7012CE" stopOpacity="1" />
              <Stop offset="1" stopColor="#FFFFFF" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            // fill="transparent"
            stroke="url(#grad)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            // fill="transparent"
            stroke={theme.colors.Button}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".5"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          {
            fontSize: theme.metrics.px(theme.fontSizes.xxlBold),
            color: textColor ?? color,
          },
          styles.text,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.metrics.px(theme.fontSizes.xxlBold),

    textAlign: "center",
    color: theme.colors.Black,
  },
  /*  text2: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.metrics.px(theme.fontSizes.xxlBold),
    color: theme.colors.Black,
  },*/
});
