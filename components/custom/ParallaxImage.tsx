import { Image, StyleSheet, View, Animated, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';

const { height } = Dimensions.get('window');

const ParallaxImage = () => {
  const bgAnimation = useRef(new Animated.Value(0)).current;
  const anstAnimation = useRef(new Animated.Value(0)).current;
  const textAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create floating animations for each layer
    const createFloatingAnimation = (animatedValue:any, duration:any, delay = 0) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: duration,
            delay: delay,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
          }),
        ])
      );
    };

    // Start animations with different timings for each layer
    const bgAnim = createFloatingAnimation(bgAnimation, 3000);
    const anstAnim = createFloatingAnimation(anstAnimation, 2500, 500);
    const textAnim = createFloatingAnimation(textAnimation, 2000, 1000);

    bgAnim.start();
    anstAnim.start();
    textAnim.start();

    return () => {
      bgAnim.stop();
      anstAnim.stop();
      textAnim.stop();
    };
  }, []);

  // Transform values for tilt/rotation effect like clock tick
  const bgRotate = bgAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['-2deg', '2deg', '-2deg'],
  });

  const anstRotate = anstAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['3deg', '-3deg', '3deg'],
  });

  const textRotate = textAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['-4deg', '4deg', '-4deg'],
  });

  // Slight horizontal movement for additional depth
  const bgTranslateX = bgAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-3, 3],
  });

  const anstTranslateX = anstAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -4],
  });

  const textTranslateX = textAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-5, 5],
  });

  return (
    <View style={styles.container}>
      {/* Background Layer - Static */}
      <View style={[styles.imageLayer, styles.backgroundLayer]}>
        <Image
          source={require("@/assets/images/bg.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Middle Layer (anst) */}
      <Animated.View
        style={[
          styles.imageLayer,
          styles.middleLayer,
          {
            transform: [
              { translateX: anstTranslateX },
              { rotate: anstRotate },
            ],
          },
        ]}
      >
        <Image
          source={require("@/assets/images/anst.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Animated.View>

      {/* Text Layer (front) - Static */}
      <View style={[styles.imageLayer, styles.frontLayer]}>
        <Image
          source={require("@/assets/images/text.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: height * 0.45, // Convert 45vh to actual height
  },
  imageLayer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  backgroundLayer: {
    zIndex: 1,
    // Add shadow for depth
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  middleLayer: {
    zIndex: 2,
    // Stronger shadow for middle layer
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  frontLayer: {
    zIndex: 3,
    // Strongest shadow for front layer
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 9,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});

export default ParallaxImage;