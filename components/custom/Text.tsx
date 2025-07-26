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
  "100": "Urbanist-Thin",
  "200": "Urbanist-Thin",
  "300": "Urbanist-ExtraLight",
  "400": "Urbanist-Regular",
  "500": "Urbanist-Medium",
  "600": "Urbanist-SemiBold",
  "700": "Urbanist-Bold",
  "800": "Urbanist-ExtraBold",
  "900": "Urbanist-Black",
};

const Text: React.FC<TextProps> = ({
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

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Urbanist-Regular", // Fallback font
  },
});
