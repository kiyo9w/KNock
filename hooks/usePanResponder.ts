import { useRef } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';

export const usePanResponder = () => {
  const { height } = Dimensions.get('window');
  const sheetHeight = height * 0.6;
  const panY = useRef(new Animated.Value(0)).current;

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: false,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: sheetHeight,
    duration: 300,
    useNativeDriver: false,
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Use extractOffset instead of setOffset with __getValue()
        panY.extractOffset();
      },
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (evt, gestureState) => {
        // Flatten the offset back into the value
        panY.flattenOffset();
        if (gestureState.dy > 0 && gestureState.vy > 0.5) {
          closeAnim.start();
        } else {
          resetPositionAnim.start();
        }
      },
    })
  ).current;

  return {
    panHandlers: panResponder.panHandlers,
    panY,
    sheetHeight,
  };
};
