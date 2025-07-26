import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '@/components/custom/Text'
import BigText from '@/components/custom/BigText'
import { Search, X, Clock, TrendingUp, Filter } from 'lucide-react-native'

// Dummy data for search suggestions and results
const recentSearches = [
  "Margaret Atwood",
  "Science Fiction",
  "Psychology books",
  "Self improvement"
]

const trendingSearches = [
  "Atomic Habits",
  "Dune series",
  "Productivity",
  "Mindfulness",
  "Leadership",
  "Biography"
]

const searchResults = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "SELF-HELP",
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    rating: 4.8,
    duration: "5h 30m"
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "FINANCE",
    description: "Timeless lessons on wealth, greed, and happiness",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    rating: 4.7,
    duration: "6h 15m"
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "HISTORY",
    description: "A Brief History of Humankind",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    rating: 4.9,
    duration: "15h 17m"
  }
]

const categories = [
  { name: "Fiction", icon: "📚", count: 1247 },
  { name: "Self-Help", icon: "💪", count: 892 },
  { name: "Business", icon: "💼", count: 654 },
  { name: "Science", icon: "🔬", count: 543 },
  { name: "History", icon: "🏛️", count: 432 },
  { name: "Biography", icon: "👤", count: 387 }
]

const search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const getCategoryColor = (category) => {
    switch(category) {
      case 'SELF-HELP': return '#7fb069'
      case 'FINANCE': return '#193532'
      case 'HISTORY': return '#e9a446'
      default: return '#5a5a5a'
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setIsSearching(true)
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(query.length > 0)
    }, 800)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setShowResults(false)
    setIsSearching(false)
  }

  const SearchResultCard = ({ item }) => (
    <TouchableOpacity 
      className="bg-white/90 rounded-2xl p-5 mb-4 mx-5"
      activeOpacity={0.8}
     
    >
      <View className="flex-row">
        <Image 
          source={{ uri: item.cover }}
          style={{ width: 70, height: 105, borderRadius: 12 }}
          resizeMode="cover"
        />
        <View className="flex-1 ml-4">
          <View className="flex-row justify-between items-start mb-2">
            <BigText 
              weight="600" 
              size={16} 
              className="text-[#193532] flex-1 tracking-tight" 
              numberOfLines={2}
            >
              {item.title}
            </BigText>
            <View 
              className="px-2.5 py-1 rounded-full ml-2"
              style={{ backgroundColor: `${getCategoryColor(item.category)}20` }}
            >
              <Text 
                size={10} 
                weight="600" 
                className="tracking-tight"
                style={{ color: getCategoryColor(item.category) }}
              >
                {item.category}
              </Text>
            </View>
          </View>
          
          <Text size={13} weight="500" className="text-[#7fb069] mb-2 tracking-tight">
            {item.author}
          </Text>
          
          <Text 
            size={13} 
            weight="400" 
            className="text-[#5a5a5a]/90 leading-5 mb-3 tracking-tight" 
            numberOfLines={2}
          >
            {item.description}
          </Text>

          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Text size={12} weight="600" className="text-[#7fb069] mr-1">★</Text>
              <Text size={12} weight="500" className="text-[#5a5a5a] tracking-tight">
                {item.rating}
              </Text>
            </View>
            <Text size={12} weight="500" className="text-[#5a5a5a]/70 tracking-tight">
              {item.duration}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  const CategoryCard = ({ item }) => (
    <TouchableOpacity 
      className="bg-white/80 rounded-2xl p-4 mr-3 min-w-[120px]"
      activeOpacity={0.8}
     
    >
      <Text size={24} className="mb-2">{item.icon}</Text>
      <Text size={14} weight="600" className="text-[#193532] mb-1 tracking-tight">
        {item.name}
      </Text>
      <Text size={12} weight="500" className="text-[#5a5a5a]/70 tracking-tight">
        {item.count} books
      </Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView className="flex-1 bg-[#e9e4cd]">
      {/* Header */}
      <View className="px-5 py-4">
        <View className="flex-row items-center justify-between mb-4">
          <BigText weight="700" size={28} className="text-[#193532] tracking-tight">
            Discover
          </BigText>
          <TouchableOpacity 
            className="p-2.5 bg-white/60 rounded-xl"
            activeOpacity={0.7}
          >
            <Filter size={20} color="#193532" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View 
          className="bg-white/80 rounded-2xl px-5  flex-row items-center"
         
        >
          <Search size={20} color="#5a5a5a" />
          <TextInput 
            placeholder="Search books, authors, topics..."
            className="flex-1 ml-3"
            placeholderTextColor="#5a5a5a/60"
            value={searchQuery}
            onChangeText={handleSearch}
            style={{
              fontSize: 16,
              fontFamily:"Urbanist-Regular",
              color: '#193532',
                padding: 10,
            }}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch} activeOpacity={0.7}>
              <X size={18} color="#5a5a5a" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {!showResults && !isSearching && (
          <>
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <View className="mb-6">
                <View className="flex-row items-center px-5 mb-3">
                  <Clock size={16} color="#5a5a5a" />
                  <Text size={16} weight="600" className="text-[#5a5a5a] ml-2 tracking-tight">
                    Recent Searches
                  </Text>
                </View>
                <View className="px-5">
                  {recentSearches.map((search, index) => (
                    <TouchableOpacity 
                      key={index}
                      className="py-3 border-b border-[#5a5a5a]/10"
                      activeOpacity={0.7}
                      onPress={() => handleSearch(search)}
                    >
                      <Text size={15} weight="500" className="text-[#193532] tracking-tight">
                        {search}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Trending */}
            <View className="mb-6">
              <View className="flex-row items-center px-5 mb-3">
                <TrendingUp size={16} color="#7fb069" />
                <Text size={16} weight="600" className="text-[#7fb069] ml-2 tracking-tight">
                  Trending Now
                </Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-5">
                <View className="flex-row">
                  {trendingSearches.map((trend, index) => (
                    <TouchableOpacity 
                      key={index}
                      className="bg-[#7fb069]/20 px-4 py-2 rounded-full mr-3"
                      activeOpacity={0.7}
                      onPress={() => handleSearch(trend)}
                    >
                      <Text size={14} weight="500" className="text-[#193532] tracking-tight">
                        {trend}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            {/* Categories */}
            <View className="mb-6">
              <Text size={18} weight="600" className="text-[#193532] px-5 mb-4 tracking-tight">
                Browse Categories
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-5">
                <View className="flex-row">
                  {categories.map((category, index) => (
                    <CategoryCard key={index} item={category} />
                  ))}
                </View>
              </ScrollView>
            </View>
          </>
        )}

        {/* Loading State */}
        {isSearching && (
          <View className="flex-1 justify-center items-center py-20">
            <View className="bg-[#7fb069]/20 rounded-full w-16 h-16 justify-center items-center mb-4">
              <Search size={24} color="#7fb069" />
            </View>
            <Text size={16} weight="500" className="text-[#5a5a5a] tracking-tight">
              Searching...
            </Text>
          </View>
        )}

        {/* Search Results */}
        {showResults && !isSearching && (
          <View className="flex-1">
            <View className="px-5 mb-4">
              <Text size={16} weight="600" className="text-[#5a5a5a] tracking-tight">
                Found {searchResults.length} results for "{searchQuery}"
              </Text>
            </View>
            {searchResults.map((result) => (
              <SearchResultCard key={result.id} item={result} />
            ))}
          </View>
        )}

        {/* No Results */}
        {showResults && !isSearching && searchResults.length === 0 && (
          <View className="flex-1 justify-center items-center py-20">
            <View className="bg-[#5a5a5a]/10 rounded-full w-16 h-16 justify-center items-center mb-4">
              <Search size={24} color="#5a5a5a" />
            </View>
            <BigText weight="600" size={18} className="text-[#193532] mb-2 tracking-tight">
              No results found
            </BigText>
            <Text size={14} weight="500" className="text-[#5a5a5a]/70 text-center tracking-tight">
              Try searching with different keywords
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default search

const styles = StyleSheet.create({})