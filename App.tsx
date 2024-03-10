
import React from 'react';
import "react-native-gesture-handler";
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from 'react-native';
import tailwind from 'twrnc';
import Books from './app/components/book/Books';
import Home from './app/screens/Home';
import { StackNavigator } from './app/routes/StackNavigator';



function App(): React.JSX.Element {

  const logAllo = () => {
    console.log('allo');
  }

  return (
    <>
      {/* <View style={tailwind`w-full flex flex-row justify-between bg-[#0DAEB8] p-3`}>
        <Text style={tailwind`text-[#0DAEB8] bg-white px-7 py-1 flex items-center justify-center font-bold text-2xl uppercase rounded-md`}>E-Library</Text>
        <Pressable style={tailwind``} onPress={() => console.log("allooo")}>
          <Image style={tailwind`w-10 h-10`} source={require('./app/assets/menu.png')} />
        </Pressable>
      </View> */}
      <StackNavigator/>
      {/* <Text>allo</Text> */}
      {/* <Books/> */}
    </>
  );
}


export default App;
