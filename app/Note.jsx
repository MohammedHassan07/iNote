import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Note = () => {

  const iOS = Platform.OS == 'ios'
  return (
    <SafeAreaView className='flex-1 bg-blue-200'>

      {/* header for Note screen tick mark to save the note,  */}

      {/* logo */}
      <View className={`flex-row items-center justify-between mx-3 ${iOS ? '-mb-2' : 'mb-3'}`}>
        <Text className='text-3xl text-black'>
          <Text className='text-5xl font-semibold'>i</Text>Note
        </Text>
        <MaterialCommunityIcons name="check" size={30} color="black" />
      </View>

      {/* Title input */}
      <TextInput className='border-2 border-red-300 mx-4 rounded-full px-3' placeholder='Title' />

      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}>

        <TextInput placeholder='' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Note