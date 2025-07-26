import { StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '@/components/custom/Text'
import BigText from '@/components/custom/BigText'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, BookOpen } from 'lucide-react-native'
import { router } from 'expo-router'

const login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle login/signup logic here
      router.push("/(tabs)")
    }, 2000)
  }

  const InputField = ({ 
    icon, 
    placeholder, 
    value, 
    onChangeText, 
    secureTextEntry = false, 
    showToggle = false,
    onTogglePress,
    showPassword: showPass,
    keyboardType = 'default'
  }) => (
    <View 
      className="bg-white/90 rounded-3xl px-6 py-5 mb-5 flex-row items-center border border-white/20"
      style={{
       
      }}
    >
      <View className="mr-4 p-1">
        {icon}
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#8b9a96"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !showPass}
        keyboardType={keyboardType}
        className="flex-1"
        style={{
          fontSize: 16,
          fontFamily:"Urbanist-Medium",
          color: '#193532',
          lineHeight: 20,
        }}
      />
      {showToggle && (
        <TouchableOpacity 
          onPress={onTogglePress} 
          activeOpacity={0.7}
          className="p-2 -mr-2"
        >
          {showPass ? (
            <EyeOff size={22} color="#8b9a96" />
          ) : (
            <Eye size={22} color="#8b9a96" />
          )}
        </TouchableOpacity>
      )}
    </View>
  )

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#f8f6f0' }}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView 
          className="flex-1" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex-1 px-6">
            {/* Header with App Icon */}
            <View className="items-center mt-12 mb-10">
              <View 
                className="bg-[#193532] rounded-3xl p-6 mb-6"
                style={{
                  
                }}
              >
                <BookOpen size={36} color="#f8f6f0" />
              </View>

              <BigText weight="800" size={34} className="text-[#193532] tracking-tight mb-3">
                {isLogin ? 'Welcome Back' : 'Get Started'}
              </BigText>
              <Text size={17} weight="500" className="text-[#6b7a77] text-center tracking-tight leading-6 px-4">
                {isLogin 
                  ? 'Sign in to continue your reading journey and discover new stories' 
                  : 'Create your account and unlock a world of endless reading possibilities'
                }
              </Text>
            </View>

            {/* Enhanced Toggle Buttons */}
            <View 
              className="flex-row bg-white/80 rounded-3xl p-2 mb-8"
              style={{
               
              }}
            >
              <TouchableOpacity 
                className={`flex-1 py-4 rounded-2xl ${isLogin ? 'bg-[#193532]' : ''}`}
                activeOpacity={0.8}
                onPress={() => setIsLogin(true)}
                style={isLogin ? {
                 
                } : {}}
              >
                <Text 
                  size={16} 
                  weight="700" 
                  className={`text-center tracking-tight ${isLogin ? 'text-white' : 'text-[#6b7a77]'}`}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className={`flex-1 py-4 rounded-2xl ${!isLogin ? 'bg-[#193532]' : ''}`}
                activeOpacity={0.8}
                onPress={() => setIsLogin(false)}
                style={!isLogin ? {
                
                } : {}}
              >
                <Text 
                  size={16} 
                  weight="700" 
                  className={`text-center tracking-tight ${!isLogin ? 'text-white' : 'text-[#6b7a77]'}`}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Enhanced Form */}
            <View className="mb-8">
              {!isLogin && (
                <InputField
                  icon={<User size={22} color="#6b7a77" />}
                  placeholder="Full Name"
                  value={formData.name}
                  onChangeText={(value) => handleInputChange('name', value)}
                />
              )}
              
              <InputField
                icon={<Mail size={22} color="#6b7a77" />}
                placeholder="Email Address"
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                keyboardType="email-address"
              />
              
              <InputField
                icon={<Lock size={22} color="#6b7a77" />}
                placeholder="Password"
                value={formData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                secureTextEntry={true}
                showToggle={true}
                showPassword={showPassword}
                onTogglePress={() => setShowPassword(!showPassword)}
              />

              {!isLogin && (
                <InputField
                  icon={<Lock size={22} color="#6b7a77" />}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChangeText={(value) => handleInputChange('confirmPassword', value)}
                  secureTextEntry={true}
                  showToggle={true}
                  showPassword={showConfirmPassword}
                  onTogglePress={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}

              {isLogin && (
                <TouchableOpacity className="self-end mb-2" activeOpacity={0.7}>
                  <Text size={15} weight="600" className="text-[#7fb069] tracking-tight">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Enhanced Submit Button */}
            <TouchableOpacity
              className="bg-[#193532] rounded-3xl py-5 mb-8 flex-row items-center justify-center"
              activeOpacity={0.8}
              onPress={handleSubmit}
              disabled={isLoading}
              style={{
               
              }}
            >
              {isLoading ? (
                <Text size={18} weight="700" className="text-white tracking-tight">
                  {isLogin ? 'Signing In...' : 'Creating Account...'}
                </Text>
              ) : (
                <>
                  <Text size={18} weight="700" className="text-white mr-3 tracking-tight">
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </Text>
                  <ArrowRight size={22} color="white" />
                </>
              )}
            </TouchableOpacity>

            {/* Terms and Privacy - Enhanced */}
            {!isLogin && (
              <View className="items-center mb-8 px-6">
                <Text size={14} weight="500" className="text-[#8b9a96] text-center leading-6 tracking-tight">
                  By creating an account, you agree to our{' '}
                  <Text size={14} weight="700" className="text-[#7fb069]">
                    Terms of Service
                  </Text>
                  {' '}and{' '}
                  <Text size={14} weight="700" className="text-[#7fb069]">
                    Privacy Policy
                  </Text>
                </Text>
              </View>
            )}

            {/* Enhanced Footer */}
            <View className="items-center pb-8">
              <Text size={15} weight="500" className="text-[#8b9a96] tracking-tight">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <Text 
                  size={15} 
                  weight="700" 
                  className="text-[#7fb069]"
                  onPress={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})