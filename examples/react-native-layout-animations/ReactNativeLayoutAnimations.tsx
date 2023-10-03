import { useState } from "react";
import { Button, View } from "react-native";
import Animated, {
  LinearTransition,
  SlideInDown,
} from "react-native-reanimated";

export function ReactNativeLayoutAnimations() {
  const [show, setShow] = useState(false);

  return (
    <View style={{ gap: 8 }}>
      {show && (
        <Animated.View
          entering={SlideInDown}
          layout={LinearTransition}
          style={[
            {
              width: 100,
              aspectRatio: 1,
              backgroundColor: "red",
            },
          ]}
        />
      )}
      <Button
        onPress={() => {
          setShow((curr) => !curr);
        }}
        title="Animate"
      />
    </View>
  );
}
