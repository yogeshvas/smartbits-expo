// BackgroundComponent.tsx
import React from 'react';
import { View, ImageBackground } from 'react-native';

const BackgroundComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={require('@/assets/images/dotted_pattern.png')}
        className="flex-1 w-full h-full"
        resizeMode="repeat"
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundComponent;