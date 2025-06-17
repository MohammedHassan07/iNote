import React from 'react'
import { TouchableOpacity } from 'react-native'

const ColourPalette = ({ code, handleBgChange }) => {

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
  return (
    <TouchableOpacity

      style={{ backgroundColor: getBodyColor(code) }}
      className={`border-2 border-white h-8 w-8 rounded-full`}
      onPress={() => handleBgChange(code)}>

    </TouchableOpacity>
  )
}

export default ColourPalette