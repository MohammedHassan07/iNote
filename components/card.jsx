import React from 'react'
import { Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native'


const { width, height } = Dimensions.get('window')

const NoteCard = (data) => {

    const {title, noteContent, date, bgColor} = data.data

    // console.log(data)
    
    const hanldeNoteClick = () => {
        console.log('note clicked')
    }

    return (
        <TouchableWithoutFeedback onPress={hanldeNoteClick}>
            <View
                className={`rounded-2xl p-3 ${bgColor}`}
                style={{
                     width: width * 0.46
                }}
            >

                <Text className='text-3xl font-bold'>{title}</Text>
                <Text className='text-xl text-left'>{noteContent}</Text>
                <Text className='text-sm text-right mt-2 -mb-2'>{date}</Text>
            </View>

        </TouchableWithoutFeedback>
    )
}

export default NoteCard