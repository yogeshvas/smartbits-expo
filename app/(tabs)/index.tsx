import { Image, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '@/components/custom/Text'
import BigText from '@/components/custom/BigText'
import { Plus, Search } from 'lucide-react-native'
import { StatusBar } from 'expo-status-bar'

// Dummy data for books
const booksData = [
  {
    id: 1,
    title: "The Testaments",
    author: "Margaret Atwood",
    category: "FICTION",
    description: "Author and activist Margaret Atwood wins this year's Best Fiction award for her long-anticipated sequel to the dystopian classic.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    progress: 0.7
  },
  {
    id: 2,
    title: "Recursion",
    author: "Blake Crouch",
    category: "SCI-FI",
    description: "The book's decidedly weird science is actually grounded in recent laboratory research, which lends an eerie temporal echo to the proceedings.",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    progress: 0.3
  },
  {
    id: 3,
    title: "Ninth House",
    author: "Leigh Bardugo",
    category: "FANTASY",
    description: "Ivy League freshman Galaxy \"Alex\" Stern has been tasked with investigating Yale University's infamous secret societies. What will she find?",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    progress: 0.9
  }
]

const index = () => {
  const [activeTab, setActiveTab] = useState('Book')
  const [activeFilter, setActiveFilter] = useState('Saved')

  const getCategoryColor = (category) => {
    switch(category) {
      case 'FICTION': return '#7fb069'
      case 'SCI-FI': return '#193532'
      case 'FANTASY': return '#e9a446'
      default: return '#5a5a5a'
    }
  }

  const BookCard = ({ book }:any) => (
    <TouchableOpacity 
      className="bg-white/90 rounded-2xl p-5 mb-4 mx-4"
      activeOpacity={0.8}
      
    >
      <View className="flex-row">
        <Image 
          source={{ uri: book.cover }}
          style={{ width: 80, height: 120, borderRadius: 12 }}
          resizeMode="cover"
        />
        <View className="flex-1 ml-4">
          <View className="flex-row justify-between items-start mb-2">
            <BigText 
              weight="600" 
              size={18} 
              className="text-[#193532] flex-1 tracking-tight" 
              numberOfLines={2}
            >
              {book.title}
            </BigText>
            <View 
              className="px-3 py-1.5 rounded-full ml-2"
              style={{ backgroundColor: `${getCategoryColor(book.category)}20` }}
            >
              <Text 
                size={11} 
                weight="600" 
                className="tracking-tight"
                style={{ color: getCategoryColor(book.category) }}
              >
                {book.category}
              </Text>
            </View>
          </View>
          
          <Text size={14} weight="500" className="text-[#7fb069] mb-3 tracking-tight">
            {book.author}
          </Text>
          
          <Text 
            size={14} 
            weight="400" 
            className="text-[#5a5a5a]/90 leading-5 mb-4 tracking-tight" 
            numberOfLines={3}
          >
            {book.description}
          </Text>
          
          {/* Progress bar */}
          <View className="bg-[#e9e4cd] h-1.5 rounded-full">
            <View 
              className="h-1.5 rounded-full bg-[#193532]"
              style={{ width: `${book.progress * 100}%` }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView className="flex-1 bg-[#e9e4cd]">
      {/* Header */}
      <StatusBar backgroundColor="#e9e4cd" barStyle="dark-content" />
      <View className="flex-row items-center justify-between px-5 py-4">
        <View className="flex-row items-center">
          <Image 
            source={{ uri: "https://avatars.githubusercontent.com/u/130190342?v=4" }}
            style={{ width: 44, height: 44, borderRadius: 22 }}
            resizeMode="cover"
          />
          <BigText weight="600" size={24} className="text-[#193532] ml-4 tracking-tight">
            Your library
          </BigText>
        </View>
        <TouchableOpacity 
          className="p-2.5 bg-white/60 rounded-xl"
          activeOpacity={0.7}
        >
          <Plus size={24} color="#193532" />
        </TouchableOpacity>
      </View>

      {/* Main Tabs */}
      <View className="flex-row px-5 mb-6">
        <TouchableOpacity 
          onPress={() => setActiveTab('Book')}
          className="mr-8"
          activeOpacity={0.7}
        >
          <BigText 
            weight="700" 
            size={32} 
            className={`tracking-tight ${activeTab === 'Book' ? 'text-[#193532]' : 'text-[#5a5a5a]/50'}`}
          >
            Book
          </BigText>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setActiveTab('Audiobook')}
          activeOpacity={0.7}
        >
          <BigText 
            weight="700" 
            size={32} 
            className={`tracking-tight ${activeTab === 'Audiobook' ? 'text-[#193532]' : 'text-[#5a5a5a]/50'}`}
          >
            Audiobook
          </BigText>
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <View className="flex-row px-5 mb-5">
        {['Saved', 'Authors', 'Categories'].map((filter) => (
          <TouchableOpacity 
            key={filter}
            onPress={() => setActiveFilter(filter)}
            className="mr-8"
            activeOpacity={0.7}
          >
            <Text 
              size={16} 
              weight="600"
              className={`tracking-tight ${activeFilter === filter ? 'text-[#193532]' : 'text-[#5a5a5a]/70'}`}
            >
              {filter}
            </Text>
            {activeFilter === filter && (
              <View className="h-1 bg-[#7fb069] mt-1.5 rounded-full" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Search Bar */}
      <View className="mx-5 mb-6">
        <View 
          className="bg-white/80 rounded-2xl px-5  flex-row items-center"
          style={{
           
          }}
        >
          <Search size={20} color="#5a5a5a" />
          <TextInput 
            placeholder="Search"
            className="flex-1 ml-3"
            placeholderTextColor="#5a5a5a/60"
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily:"Urbanist-Medium",
              color: '#193532',
             
                padding: 10,
            
            }}

          />
        </View>
      </View>

      {/* Books List */}
      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})