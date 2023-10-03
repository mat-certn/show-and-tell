import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CSSTransitionExample } from "./examples/transition/CSSTransitionExample";
import { CSSAnimateExample } from "./examples/animate/CSSAnimateExample";
import { CSSKeyframesExample } from "./examples/keyframes/CSSKeyframesExample";
import { SVGAnimationExample } from "./examples/svg/SVGAnimationExample";
import { ReactNativeAnimation } from "./examples/react-native-animation/ReactNativeAnimation";
import { ReactNativeLayoutAnimations } from "./examples/react-native-layout-animations/ReactNativeLayoutAnimations";

export default function App() {
  return (
    <View style={styles.container}>
      <ReactNativeLayoutAnimations />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
