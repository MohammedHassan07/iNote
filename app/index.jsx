import Entypo from '@expo/vector-icons/Entypo';
import { Dimensions, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function Index() {

  const iOS = Platform.OS === 'ios'
  const { width, height } = Dimensions.get('window')
  return (

    <SafeAreaView className='flex-1 bg-yellow-100'>

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
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Important</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Important</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Important</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Important</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className='text-white rounded-full bg-neutral-700 text-lg py-1 px-2'>Important</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

      {/* cards view group */}
      <View className='mt-2 mx-3'>

        <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}>
          {/* card */}
          <View className='rounded-2xl bg-red-200 p-2' style={{ height: height * 0.2 }}>
            <Text className='text-3xl font-bold'>Title</Text>
            <Text className='text-xl'>content</Text>
            <Text className='text-sm'>Date</Text>
          </View>
    

        </ScrollView>
      </View>

    </SafeAreaView >

  );
}
