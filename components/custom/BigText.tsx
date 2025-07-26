/** @format */

import { StyleSheet, Text as CoreText } from "react-native";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  style?: React.ComponentProps<typeof CoreText>["style"];
  weight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  size?: number;
  [key: string]: any; // Allow other Text props
}

const fontWeights: Record<string, string> = {
  "100": "PlayfairDisplay-Regular",
  "200": "PlayfairDisplay-Regular",
  "300": "PlayfairDisplay-Regular",
  "400": "PlayfairDisplay-Regular",
  "500": "PlayfairDisplay-Medium",
  "600": "PlayfairDisplay-SemiBold",
  "700": "PlayfairDisplay-SemiBold",
  "800": "PlayfairDisplay-Bold",
  "900": "PlayfairDisplay-Bold",
};

const BigText: React.FC<TextProps> = ({
  children,
  style,
  weight = "400",
  size,
  ...props
}) => {
  const fontFamily = fontWeights[weight] || "Urbanist-Regular";
  return (
    <CoreText
      style={[styles.text, { fontFamily, fontSize: size }, style]}
      {...props}
    >
      {children}
    </CoreText>
  );
};

export default BigText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "PlayfairDisplay-Regular", // Fallback font
  },
});
