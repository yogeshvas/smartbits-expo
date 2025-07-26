import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '@/components/custom/Text'
import BigText from '@/components/custom/BigText'
import { 
  User, 
  Settings, 
  BookOpen, 
  Download, 
  Bell, 
  Shield, 
  HelpCircle, 
  Star, 
  Share2, 
  LogOut,
  ChevronRight,
  Moon,
  Headphones,
  BarChart3,
  Gift
} from 'lucide-react-native'
import { router } from 'expo-router'

const more = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true)

  // User stats data
  const userStats = {
    booksCompleted: 47,
    hoursListened: 128,
    currentStreak: 12,
    wordsLearned: 892
  }

  const StatCard = ({ icon, value, label, color = "#7fb069" }) => (
    <View className="bg-white/80 rounded-2xl p-4 flex-1 mx-1">
      <View className="items-center">
        <View 
          className="w-10 h-10 rounded-2xl justify-center items-center mb-2"
          style={{ backgroundColor: `${color}20` }}
        >
          {icon}
        </View>
        <BigText weight="700" size={20} className="text-[#193532] mb-1">
          {value}
        </BigText>
        <Text size={12} weight="500" className="text-[#5a5a5a]/80 text-center tracking-tight">
          {label}
        </Text>
      </View>
    </View>
  )

  const MenuItem = ({ icon, title, subtitle, onPress, hasSwitch, switchValue, onSwitchChange, showChevron = true }) => (
    <TouchableOpacity 
      className="bg-white/60 rounded-2xl p-4 mb-3 flex-row items-center"
      activeOpacity={0.8}
      onPress={onPress}
      disabled={hasSwitch}
     
    >
      <View 
        className="w-10 h-10 bg-[#7fb069]/20 rounded-2xl justify-center items-center mr-4"
      >
        {icon}
      </View>
      
      <View className="flex-1">
        <Text size={16} weight="600" className="text-[#193532] tracking-tight">
          {title}
        </Text>
        {subtitle && (
          <Text size={13} weight="500" className="text-[#5a5a5a]/70 mt-0.5 tracking-tight">
            {subtitle}
          </Text>
        )}
      </View>

      {hasSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: '#5a5a5a30', true: '#7fb06980' }}
          thumbColor={switchValue ? '#7fb069' : '#5a5a5a60'}
        />
      ) : showChevron && (
        <ChevronRight size={20} color="#5a5a5a60" />
      )}
    </TouchableOpacity>
  )

  const SectionHeader = ({ title }:any) => (
    <Text size={18} weight="600" className="text-[#193532] px-5 mb-4 mt-6 tracking-tight">
      {title}
    </Text>
  )

  return (
    <SafeAreaView className="flex-1 bg-[#e9e4cd]">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 py-4">
          <BigText weight="700" size={28} className="text-[#193532] tracking-tight">
            Profile
          </BigText>
        </View>

        {/* Profile Section */}
        <View className="px-5 mb-6">
          <View 
            className="bg-white/80 rounded-3xl p-6"
           
          >
            <View className="flex-row items-center mb-4">
              <Image 
                source={{ uri: "https://avatars.githubusercontent.com/u/130190342?v=4" }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
                resizeMode="cover"
              />
              <View className="flex-1 ml-4">
                <BigText weight="600" size={22} className="text-[#193532] tracking-tight">
                   Yogesh Vashisth
                </BigText>
                <Text size={14} weight="500" className="text-[#7fb069] mt-1 tracking-tight">
                  Premium Member
                </Text>
                <Text size={13} weight="500" className="text-[#5a5a5a]/70 mt-0.5 tracking-tight">
                  Member since Jan 2024
                </Text>
              </View>
              <TouchableOpacity 
                className="bg-[#193532] px-4 py-2 rounded-xl"
                activeOpacity={0.8}
              >
                <Text size={14} weight="600" className="text-white tracking-tight">
                  Edit
                </Text>
              </TouchableOpacity>
            </View>

            {/* Stats */}
            <View className="flex-row mt-4">
              <StatCard 
                icon={<BookOpen size={18} color="#7fb069" />}
                value={userStats.booksCompleted}
                label="Books Completed"
              />
              <StatCard 
                icon={<Headphones size={18} color="#193532" />}
                value={`${userStats.hoursListened}h`}
                label="Hours Listened"
                color="#193532"
              />
            </View>
            
            <View className="flex-row mt-2">
              <StatCard 
                icon={<BarChart3 size={18} color="#e9a446" />}
                value={`${userStats.currentStreak} days`}
                label="Current Streak"
                color="#e9a446"
              />
              <StatCard 
                icon={<Text size={16}>✨</Text>}
                value={userStats.wordsLearned}
                label="Words Learned"
                color="#7fb069"
              />
            </View>
          </View>
        </View>

        {/* Library Section */}
        <SectionHeader title="Library" />
        <View className="px-5">
          <MenuItem 
            icon={<Download size={18} color="#7fb069" />}
            title="Downloaded Books"
            subtitle="12 books available offline"
            onPress={() => {}}
          />
          <MenuItem 
            icon={<BookOpen size={18} color="#7fb069" />}
            title="Reading History"
            subtitle="View your reading journey"
            onPress={() => {}}
          />
          <MenuItem 
            icon={<Star size={18} color="#7fb069" />}
            title="Favorites"
            subtitle="8 books in your favorites"
            onPress={() => {}}
          />
        </View>

        {/* Settings Section */}
        <SectionHeader title="Settings" />
        <View className="px-5">
          <MenuItem 
            icon={<Bell size={18} color="#7fb069" />}
            title="Notifications"
            subtitle="Daily reading reminders"
            hasSwitch={true}
            switchValue={notificationsEnabled}
            onSwitchChange={setNotificationsEnabled}
          />
         
          <MenuItem 
            icon={<Headphones size={18} color="#7fb069" />}
            title="Auto-play Next"
            subtitle="Automatically continue to next chapter"
            hasSwitch={true}
            switchValue={autoPlayEnabled}
            onSwitchChange={setAutoPlayEnabled}
          />
          <MenuItem 
            icon={<Settings size={18} color="#7fb069" />}
            title="Playback Settings"
            subtitle="Speed, sleep timer, and more"
            onPress={() => {}}
          />
        </View>

        {/* Support Section */}
        <SectionHeader title="Support" />
        <View className="px-5">
          <MenuItem 
            icon={<Gift size={18} color="#7fb069" />}
            title="Upgrade to Premium"
            subtitle="Unlock unlimited access"
            onPress={() => {}}
          />
          <MenuItem 
            icon={<HelpCircle size={18} color="#7fb069" />}
            title="Help & FAQ"
            subtitle="Get answers to common questions"
            onPress={() => {}}
          />
          <MenuItem 
            icon={<Share2 size={18} color="#7fb069" />}
            title="Share App"
            subtitle="Tell friends about Smartbits"
            onPress={() => {}}
          />
          <MenuItem 
            icon={<Star size={18} color="#7fb069" />}
            title="Rate Us"
            subtitle="Help us improve with your feedback"
            onPress={() => {}}
          />
        </View>

        {/* Account Section */}
        <SectionHeader title="Account" />
        <View className="px-5 mb-8">
          <MenuItem 
            icon={<Shield size={18} color="#7fb069" />}
            title="Privacy Policy"
            onPress={() => {}}
          />
          <MenuItem 
            icon={<Settings size={18} color="#7fb069" />}
            title="Terms of Service"
            onPress={() => {}}
          />
          <MenuItem 
            icon={<LogOut size={18} color="#ff6b6b" />}
            title="Sign Out"
            onPress={() => router.replace("/(auth)/login")}
            showChevron={false}
          />
        </View>

        {/* App Version */}
        <View className="items-center pb-8">
          <Text size={13} weight="500" className="text-[#5a5a5a]/60 tracking-tight">
            Smartbits v1.2.3
          </Text>
        </View>
      </ScrollView>
      <View className='h-10'></View>
    </SafeAreaView>
  )
}

export default more

const styles = StyleSheet.create({})