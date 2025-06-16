import React from 'react'
import { View } from 'react-native'

const colourPalette = ({colourCode}) => {
  return (
    <View className={`border-2 border-white ${colourCode} h-8 w-8 rounded-full`}>
    </View>

  )
}

export default colourPalette