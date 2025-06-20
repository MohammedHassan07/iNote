import React from 'react'
import { TouchableOpacity } from 'react-native'
import { getBodyColor } from '../utils/BgAndBorderColour'


const ColourPalette = ({ code, handleBgChange }) => {

  return (
    <TouchableOpacity

      style={{ backgroundColor: getBodyColor(code) }}
      className={`border-2 border-white h-8 w-8 rounded-full`}
      onPress={() => handleBgChange(code)}>

    </TouchableOpacity>
  )
}

export default ColourPalette