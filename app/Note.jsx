import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';
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
      <TextInput className='border-2 border-blue-100 mx-4 rounded-full px-3 text-xl text-black' placeholder='Title' />

      {/* Note content */}

      <ScrollView
        horizontal={false}
        className='border-t-2 border-t-blue-100 mx-4 mt-2 '>

        <KeyboardAvoidingView>

          <TextInput
            multiline={true}
            placeholder='Note here ...'
            className='text-lg'
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <View className='flex-row justify-center items-center gap-4'>

      <colourPalette colourCode={'bg-red-200'}/>

      </View>

    </SafeAreaView>
  )
}

export default Note