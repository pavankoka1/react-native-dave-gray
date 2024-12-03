// This file is a fallback for using MaterialIcons on Android and web.

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style = { marginBottom: -3 },
}) {
  return <Ionicons color={color} size={size} name={name} style={style} />;
}
