import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";

export const calculateOpacity = (
  event: NativeSyntheticEvent<NativeScrollEvent>
): number => {
  const offsetY = event.nativeEvent.contentOffset.y;
  const opacityThreshold = 200;
  const minOpacity = 0.0;
  const maxOpacity = 0.6;

  if (offsetY > 0) {
    return Math.max(
      maxOpacity - (offsetY / opacityThreshold) * (maxOpacity - minOpacity),
      minOpacity
    );
  }

  return maxOpacity;
};
