import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ColourPalette from '../components/ColourPalette';

const Note = () => {


  const colourCode = ['red', 'blue', 'yellow', 'green', 'neutral', 'purple', 'lime', 'amber'];

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

  const iOS = Platform.OS == 'ios'

  const [bgColour, setBgcolour] = useState('blue')

  const handleBgChange = (code) => {

    setBgcolour(code)
    console.log('pressed bgChange', code)
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
        <MaterialCommunityIcons name="check" size={30} color="black" />
      </View>

      {/* Title input */}
      <TextInput
        className={`border-2 mx-4 rounded-full px-3 text-xl text-black`}
        placeholder='Title'
        style={{borderColor: 'black'}}
        // style={{ borderColor: getBorderColor(bgColour) }}
      />

      {/* Note content */}
      <ScrollView

        className={'border-t-2 mx-4 mt-2 '}
        style={{borderColor: 'black'}}
        // style={{ borderTopColor: getBorderColor(bgColour) }}
        horizontal={false}
      >

        <TextInput
          multiline={true}
          placeholder='Note here ...'
          className='text-lg text-black'
        />
      </ScrollView>

      {/* Colour Paletter */}
      <View className='flex-row justify-start items-center gap-4 mx-4'>

        {colourCode.map((code, index) => <ColourPalette
          key={index}
          code={code}
          handleBgChange={() => handleBgChange(code)} />)
        }

      </View>

    </SafeAreaView>
  )
}

export default Note