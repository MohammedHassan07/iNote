import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Dimensions, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NoteCard from '../components/card';
import { getAllNotes } from '../lib/dataBase';
import "./global.css";

export default function Index() {

  const iOS = Platform.OS === 'ios'
  const { width, height } = Dimensions.get('window')

  const [notes, setNotes] = useState([{}])
  // const [notes, setNotes] = useState(
  //   [
  //     {
  //       Title: 'Title',
  //       NoteContent: `The floating button is implemented using the TouchableOpacity component, which is styled to float above other content. Key style properties include:`,
  //       date: '02/03/2025 - 3:12 pm',
  //       bgColour: 'blue'
  //     }, {
  //       Title: 'Title',
  //       NoteContent: `The floating button is implemented using the TouchableOpacity component, which is styled to float above other content. Key style properties include:`,
  //       date: '02/03/2025 - 3:12 pm',
  //       bgColour: 'green'
  //     }, {
  //       Title: 'Title',
  //       NoteContent: `The floating button is implemented using the TouchableOpacity component, which is styled to float above other content. Key style properties include:`,
  //       date: '02/03/2025 - 3:12 pm',
  //       bgColour: 'neutral'
  //     }, {
  //       Title: 'Title',
  //       NoteContent: `The floating button is implemented using the TouchableOpacity component, which is styled to float above other content. Key style properties include:`,
  //       date: '02/03/2025 - 3:12 pm',
  //       bgColour: 'purple'
  //     },
  //     {
  //       Title: 'Title',
  //       NoteContent: `The floating button is implemented using the TouchableOpacity component, which is styled to float above other content. Key style properties include:`,
  //       date: '02/03/2025 - 3:12 pm',
  //       bgColour: 'red'
  //     }
  //     , {
  //       Title: 'Title',
  //       NoteContent: `The floating button is implemented using the TouchableOpacity component, which is styled to float above other content. Key style properties include:`,
  //       date: '02/03/2025 - 3:12 pm',
  //       bgColour: 'amber'
  //     },
  //     {
  //       Title: 'Title',
  //       NoteContent: `The floating button is implemented using the TouchableOpacity component, which is styled to float above other content. Key style properties include:`,
  //       date: '02/03/2025 - 3:12 pm',
  //       bgColour: 'green'
  //     },
  //     {
  //       Title: 'Title',
  //       NoteContent: `The floating button is implemented using the TouchableOpacity component, which is styled to float above other content. Key style properties include:`,
  //       date: '02/03/2025 - 3:12 pm',
  //       bgColour: 'blue'
  //     }
  //   ])

  const handleNewNotePress = () => {
    console.log('pressed new Note')
  }

  useFocusEffect(useCallback(() => {

    const fetchNotes = async () => {

      const data = await getAllNotes()

      if (!data) return 

      setNotes(data)
      // createTable()
    }

    fetchNotes()
  }, []))

  return (

    <SafeAreaView className='flex-1 bg-blue-300'>

      {/* logo */}
      <View className={`flex-row items-center justify-between mx-3 ${iOS ? '-mb-2' : 'mb-3'}`}>
        <Text className='text-3xl text-black'>
          <Text className='text-5xl font-semibold'>i</Text>Note
        </Text>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>

      {/* category */}
      <View className='mx-3 border-2 rounded-full border-gray-500 bg-neutral-800 p-2 mt-2'>

        <ScrollView
          contentContainerStyle={{ paddingLeft: 3, paddingRight: 3, gap: 8 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Important</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>College</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Gym</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Javascript</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Web Series</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Resources</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

      {/* cards view group */}
      <View className='mt-2 mx-3'>

        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ rowGap: 8, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 120 }}>

          {/* card */}
          {
            notes.map((notes, index) => <NoteCard key={index} data={notes} />
            )
          }

        </ScrollView>
      </View>

      {/* Floating Action button */}
      <Link
        href={'/Note'}
        className='absolute bottom-8 right-8 rounded-full border-2 border-purple-200 purple p-4 bg-purple-200'
        onPress={handleNewNotePress}>

        <AntDesign name="plus" size={24} color="black" />
      </Link>

    </SafeAreaView >

  );
}
