import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function Index() {
  return (

    <SafeAreaView className='flex-1 bg-yellow-100'>

      {/* logo */}
      <View className='flex-row items-center justify-between mx-4'>
        <Text className='text-3xl text-black'>
          <Text className='text-5xl font-semibold'>i</Text>Note
        </Text>
      </View>

      {/* category */}
      <View className='mx-4 border-2 rounded-full border-gray-500 bg-neutral-800 p-2'>

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
    </SafeAreaView>

  );
}
