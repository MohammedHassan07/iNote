import React from 'react'
import { Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native'
import { getBodyColor } from '../utils/BgAndBorderColour'


const { width, height } = Dimensions.get('window')

const NoteCard = (data) => {

    const { Title, NoteContent, date, bgColour } = data.data

    const hanldeNoteClick = () => {
        console.log('note clicked')
    }

    return (
        <TouchableWithoutFeedback
            onPress={hanldeNoteClick}

        >
            <View
                className={`rounded-2xl p-3 `}
                style={{
                    width: width * 0.46,
                    minHeight: 100,
                    backgroundColor: getBodyColor(bgColour)
                }}
            >

                <Text className='text-3xl font-bold'>{Title}</Text>
                <Text className='text-xl text-left mb-6'>{NoteContent && NoteContent.length >= 50 ? NoteContent.slice(0, 50) + '...' : NoteContent}</Text>

                <Text
                    style={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                    }}
                    className='text-sm '>{date}</Text>
            </View>

        </TouchableWithoutFeedback >
    )
}

export default NoteCard