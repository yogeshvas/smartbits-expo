/** @format */

import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Ellipsis, House, Search } from "lucide-react-native"
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffffff", // White for active tab
        tabBarInactiveTintColor: "#7a8a7a", // Muted green-gray for inactive tabs
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground, // Comment this out to use solid color
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "#2d4a3d", // Dark green background
            borderTopWidth: 0,
            paddingBottom: 20,
            height: 80,
            paddingTop: 8,
            opacity: 1, // Ensure full opacity
          },
          default: {
            backgroundColor: "#2d4a3d", // Dark green background
            borderTopWidth: 0,
            paddingBottom: 10,
            height: 75,
            paddingTop: 8,
          
            opacity: 1, // Ensure full opacity
          },
        }),
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
          marginBottom: 5,
          fontFamily: "Urbanist-Medium",
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            // <Ionicons 
            //   size={24} 
            //   name={focused ? "home" : "home-outline"} 
            //   color={color} 
            // />
            <House 
            size={24}
            color={focused ? "#ffffff" : "#7a8a7a"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
           <Search
            size={24}
            color={focused ? "#ffffff" : "#7a8a7a"}
          
            />
            // <FontAwesome5 
            //   size={24} 
            //   name={focused ? "search" : "search"} 
            //   color={color} 
            // />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
          <Ellipsis 
          size={24}
          color={focused ? "#ffffff" : "#7a8a7a"}
          />
          ),
        }}
      />
    </Tabs>
  );
}