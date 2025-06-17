import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ColourPalette from '../components/ColourPalette';

const Note = () => {

  const [noteContent, setNoteContent] = useState('')
  const [noteTitle, setNoteTitle] = useState('')
  const iOS = Platform.OS == 'ios'
  const [bgColour, setBgcolour] = useState('blue')
  const navigation = useNavigation()

  const colourCode = ['red', 'blue', 'yellow', 'green', 'neutral', 'purple', 'lime', 'amber'];

  // useEffect is used becuase it avoids memory leaks due to the event listener we added to the on going back
  useEffect(() => {

    const unsubscribe =
      navigation.addListener('beforeRemove', async () => {

        await saveNoteData(noteTitle, noteContent)
      })
    return unsubscribe
  }, [navigation, noteTitle, noteContent])


  const getBorderColor = (color) => {
    // console.log(color)
    const map = {
      red: '#ffe2e2', // 100
      blue: '#dbeafe',
      yellow: '#fef9c2',
      green: '#dcfce7',
      neutral: '#f5f5f5',
      purple: '#f3e8ff',
      amber: '#fef3c6',
      lime: '#ecfcca',
    }
    return map[color]
  }

  const getBodyColor = (color) => {
    const map = {
      red: '#ffc9c9',  // 200   
      blue: '#bedbff',
      yellow: '#fff085',
      green: '#b9f8cf',
      neutral: '#e5e5e5',
      purple: '#e9d4ff',
      amber: '#fee685',
      lime: '#d8f999',
    }
    return map[color]
  }

  const handleBgChange = (code) => {

    setBgcolour(code)
    console.log('pressed bgChange', code)
  }

  const handleNoteData = async () => {

    await saveNoteData(noteTitle, noteContent)
  }

  const saveNoteData = async (noteTitle, noteContent) => {
    try {

      console.log('clicked tick', noteTitle, noteContent)

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

        className={'border-t-2 mx-4 mt-2 '}
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