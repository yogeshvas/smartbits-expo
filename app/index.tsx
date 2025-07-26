/** @format */

import { Image, SafeAreaView, TouchableOpacity, View, Dimensions, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import BigText from "@/components/custom/BigText";
import Text from "@/components/custom/Text";
import { router } from "expo-router";

const { height } = Dimensions.get('window');

const index = () => {
  const [visible, setVisible] = useState(false);
  
  return (
    <SafeAreaView className="flex-1 bg-[#e9e4cd]">
      <View className="flex-1 justify-center items-center px-6">
        {/* Header */}
        <View className="w-full items-center mt-10">
          <View className="flex-row items-center justify-center mb-2">
            <BigText weight="500" size={36} className="text-[#193532] tracking-tight">
              Feed Your{" "}
            </BigText>
            <View className="relative">
              <BigText weight="900" size={36} className="text-[#193532] tracking-tight">
                Brain
              </BigText>
              <View className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-[#7fb069] rounded-sm" />
            </View>
          </View>
          
          <View className="flex-row items-center mb-5">
            <Text size={15} weight="600" className="text-[#5a5a5a] text-center tracking-tight">
              with smartbits
            </Text>
            <View className="ml-2">
              <Text size={20}>✨</Text>
            </View>
          </View>
        </View>

        {/* Image with floating effect */}
        <View className="w-full h-[350px] my-10">
          <View className="flex-1 relative justify-center items-center">
            <Image
              resizeMode="contain"
              className="w-full h-full"
              source={require("@/assets/images/landing.png")}
            />
            {/* Floating circles for visual interest */}
            <View className="absolute bg-[#7fb069]/10 rounded-full w-[60px] h-[60px] top-5 right-5" />
            <View className="absolute bg-[#193532]/5 rounded-full w-10 h-10 bottom-[60px] left-[30px]" />
            <View className="absolute bg-[#e9e4cd]/80 rounded-full w-[30px] h-[30px] top-[100px] left-5" />
          </View>
        </View>

        {/* Enhanced button */}
        <View className="w-full px-5 items-center">
          <TouchableOpacity
            className="w-full h-[60px] bg-[#193532] rounded-3xl justify-center items-center"
            activeOpacity={0.8}
            onPress={()=> router.push("/(auth)/login")}
          >
            <View className="flex-row items-center justify-center ">
              <Text weight="700" size={18} className="text-white mr-2 tracking-tight">
                Get Started
              </Text>
            </View>
          </TouchableOpacity>
          
          {/* Secondary action */}
          <TouchableOpacity className="py-3 px-6" activeOpacity={0.7} onPress={() => setVisible(true)}>
            <Text weight="600" size={16} className="text-[#193532]/80 tracking-tight">
              Learn More
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Enhanced Modal */}
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
        animationType="slide"
      >
        <View className="flex-1 bg-[#193532]/80 justify-end">
          <View className="bg-[#e9e4cd] h-[75%] rounded-t-3xl px-6 pt-6 pb-8">
            <View className="flex-row justify-between items-center mb-6">
              <View className="flex-1">
                <BigText weight="700" size={28} className="text-[#193532] tracking-tight">
                  Discover Smartbits
                </BigText>
                <Text size={16} weight="500" className="text-[#7fb069] mt-1">
                  Your Daily Dose of Knowledge
                </Text>
              </View>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text size={24} className="text-[#193532]/60">✕</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
              <View className="mb-6">
                <Text size={16} className="text-[#5a5a5a]/90 leading-6 mb-6">
                  Smartbits is your go-to audiobooks app, delivering a fresh audiobook every day to spark your curiosity and expand your mind. Transform your daily routine into a learning journey.
                </Text>
              </View>

              {/* Features with Icons */}
              <View className="space-y-6 mb-8">
                {/* Feature 1 */}
                <View className="flex-row items-start">
                  <View className="w-12 h-12 bg-[#7fb069]/20 rounded-2xl justify-center items-center mr-4">
                    <Text size={20}>📚</Text>
                  </View>
                  <View className="flex-1">
                    <Text weight="600" size={18} className="text-[#193532] mb-2">
                      Daily Audio Summaries
                    </Text>
                    <Text size={16} className="text-[#5a5a5a]/90 leading-6">
                      Get concise, powerful summaries of each audiobook, designed to give you the key takeaways in minutes. Perfect for busy minds who want to learn fast.
                    </Text>
                  </View>
                </View>

                {/* Feature 2 */}
                <View className="flex-row items-start">
                  <View className="w-12 h-12 bg-[#7fb069]/20 rounded-2xl justify-center items-center mr-4">
                    <Text size={20}>📖</Text>
                  </View>
                  <View className="flex-1">
                    <Text weight="600" size={18} className="text-[#193532] mb-2">
                      Master New Words
                    </Text>
                    <Text size={16} className="text-[#5a5a5a]/90 leading-6">
                      Boost your vocabulary with new English words introduced daily. Each word comes with clear definitions and examples, helping you communicate with confidence.
                    </Text>
                  </View>
                </View>

                {/* Feature 3 */}
                <View className="flex-row items-start">
                  <View className="w-12 h-12 bg-[#7fb069]/20 rounded-2xl justify-center items-center mr-4">
                    <Text size={20}>💼</Text>
                  </View>
                  <View className="flex-1">
                    <Text weight="600" size={18} className="text-[#193532] mb-2">
                      Speak Like a CEO
                    </Text>
                    <Text size={16} className="text-[#5a5a5a]/90 leading-6">
                      Learn the art of impactful communication with tips inspired by top leaders. Articulate ideas with precision, charisma, and authority.
                    </Text>
                  </View>
                </View>
              </View>

              {/* Stats Section */}
              <View className="bg-[#193532]/5 rounded-2xl p-6 mb-8">
                <View className="flex-row justify-around">
                  <View className="items-center">
                    <BigText weight="700" size={24} className="text-[#7fb069]">365</BigText>
                    <Text size={12} weight="500" className="text-[#5a5a5a] mt-1">Books/Year</Text>
                  </View>
                  <View className="items-center">
                    <BigText weight="700" size={24} className="text-[#7fb069]">15</BigText>
                    <Text size={12} weight="500" className="text-[#5a5a5a] mt-1">Min Daily</Text>
                  </View>
                  <View className="items-center">
                    <BigText weight="700" size={24} className="text-[#7fb069]">1000+</BigText>
                    <Text size={12} weight="500" className="text-[#5a5a5a] mt-1">New Words</Text>
                  </View>
                </View>
              </View>

              <View className="items-center">
                <TouchableOpacity
                  className="bg-[#193532] px-10 py-4 rounded-2xl"
                  activeOpacity={0.8}
                  onPress={() => setVisible(false)}
                >
                  <Text weight="700" size={16} className="text-white tracking-tight">
                    Explore Now
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            
            {/* Decorative elements */}
            {/* <View className="absolute bg-[#7fb069]/20 rounded-full w-[80px] h-[80px] top-20 right-5" />
            <View className="absolute bg-[#193532]/10 rounded-full w-12 h-12 bottom-20 left-5" /> */}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default index;