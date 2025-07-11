import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Platform, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ColourPalette from '../components/ColourPalette'
import { createTable, saveNote } from '../lib/dataBase'
import { colourCode, getBodyColor, getBorderColor } from '../utils/BgAndBorderColour'

const Note = () => {

  const [noteContent, setNoteContent] = useState('')
  const [noteTitle, setNoteTitle] = useState('')
  const iOS = Platform.OS == 'ios'
  const [bgColour, setBgcolour] = useState('blue')
  const navigation = useNavigation()

  // useEffect is used becuase it avoids memory leaks due to the event listener we added to the on going back
  useEffect(() => {

    // Create Table if not exists
    createTable()

    const unsubscribe =
      navigation.addListener('beforeRemove', async () => {

        await saveNoteData(noteTitle, noteContent)
      })
    return unsubscribe
  }, [navigation, noteTitle, noteContent])

  const handleBgChange = (code) => {

    setBgcolour(code)
    console.log('pressed bgChange', code)
  }

  // on tick pressed
  const handleNoteData = async () => {

    await saveNoteData(noteTitle, noteContent)
  }

  const getDate = () => {

    const now = new Date()

    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0') 
    const year = now.getFullYear()

    let hours = now.getHours()
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12 || 12 


    return `${day}/${month}/${year} - ${hours}:${minutes} ${ampm}`
  }

  // Call when backPressed or tick mark pressed
  const saveNoteData = async (noteTitle, noteContent) => {
    try {

      const date = getDate()
      console.log(date)
      console.log('clicked tick', noteTitle, noteContent)
      await saveNote(noteTitle, noteContent, bgColour, date)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView
      style={{ backgroundColor: getBodyColor(bgColour) }}
      className={'flex-1'}>


      {/* header for Note screen tick mark to save the note,  */}
      {/* logo */}
      <View className={`flex-row items-center justify-between mx-3 ${iOS ? '-mb-2' : 'mb-3'}`}>
        <Text className='text-3xl text-black'>
          <Text className='text-5xl font-semibold'>i</Text>Note
        </Text>
        <MaterialCommunityIcons onPress={handleNoteData} name="check" size={30} color="black" />
      </View>

      {/* Colour Paletter */}
      <View className='flex-row justify-between items-center gap-4 mx-4 mb-2'>

        {colourCode.map((code, index) => <ColourPalette
          key={index}
          code={code}
          handleBgChange={() => handleBgChange(code)} />)
        }

      </View>

      {/* Title input */}
      <TextInput
        className={`border-2 mx-4 rounded-full px-3 text-xl text-black`}
        placeholder='Title'
        style={{ borderColor: getBorderColor(bgColour) }}
        onChangeText={(text) => { setNoteTitle(text) }}
      />

      {/* Note content */}
      <ScrollView

        className={'border-t-2 mx-4 mt-2 pr-7'}
        style={{ borderTopColor: getBorderColor(bgColour) }}
        horizontal={false}
      >

        <TextInput
          multiline={true}
          placeholder='Note here ...'
          className='text-lg text-black h-screen'
          style={{ textAlignVertical: 'top' }}
          onChangeText={(text) => { setNoteContent(text) }}
        />
      </ScrollView>


    </SafeAreaView>
  )
}

export default Note