import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Animated, { Easing } from "react-native-reanimated";
import {
  TapGestureHandler,
  State,
  TextInput,
} from "react-native-gesture-handler";

import Svg, { Image, Circle, ClipPath } from "react-native-svg";
const { width, height } = Dimensions.get("window");

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat,
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}
class Wellcome extends Component {
  constructor() {
    super();

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            ),
          ]),
      },
    ]);
    this.onCloseChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            ),
          ]),
      },
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3 - 50, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP,
    });
    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP,
    });
    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP,
    });

    this.loadDashboard = () => {
      this.props.navigation.navigate("Home");
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end",
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }],
          }}
        >
          <Svg height={height + 50} width={width}>
            <ClipPath id="clip">
              <Circle r={height + 50} cx={width / 2} />
            </ClipPath>
            <Image
              href={require("../../assets/bg.jpg")}
              width={width}
              height={height}
              preserveAspectRatio="xMidMid slice"
              clipPath="url(#clip)"
            />
          </Svg>
        </Animated.View>
        <View style={{ height: height / 3, justifyContent: "center" }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }],
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
          <Animated.View
            style={{
              ...styles.button,
              backgroundColor: "#2E71DC",
              opacity: this.buttonOpacity,
              transform: [{ translateY: this.buttonY }],
            }}
            onTouchEnd={this.loadDashboard}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              SIGN IN WITH FACEBOOK
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              height: height / 3,
              ...StyleSheet.absoluteFill,
              opacity: this.textInputOpacity,
              transform: [{ translateY: this.textInputY }],
              top: 0,
              justifyContent: "center",
              zIndex: this.textInputZindex,
            }}
          >
            <TapGestureHandler onHandlerStateChange={this.onCloseChange}>
              <Animated.View
                style={{
                  ...styles.x,
                  transform: [{ rotate: concat(this.rotateCross, "deg") }],
                }}
              >
                <Text>x</Text>
              </Animated.View>
            </TapGestureHandler>
            <TextInput placeholder="Email" style={styles.txt} />
            <TextInput placeholder="Password" style={styles.txt} />
            <Animated.View
              on
              style={{ ...styles.button, borderColor: "black" }}
            >
              <Text>SIGN IN</Text>
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    );
  }
}
export default Wellcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    borderColor: "rgba(0,0,0,0.2)",
  },
  txt: {
    height: 50,
    borderRadius: 35,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  x: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 20,
    top: -20,
    left: width / 2 - 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    borderColor: "rgba(0,0,0,0.2)",
  },
});
