import { useEffect, useRef, useState } from "react";
import { Animated, Button, Easing, View } from "react-native";

export function ReactNativeAnimation() {
  const animation = useRef(new Animated.Value(0));

  const [bigger, setBigger] = useState(false);

  function toggleBigger() {
    setBigger((curr) => !curr);
  }

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: bigger ? 1 : 0,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, [bigger]);

  return (
    <View style={{ gap: 8 }}>
      <Animated.View
        style={{
          backgroundColor: "red",
          width: animation.current.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 200],
          }),
          aspectRatio: 1,
        }}
      />
      <Button onPress={toggleBigger} title="Animate" />
    </View>
  );
}
