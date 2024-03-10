import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Books from '../components/book/Books'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootScreenRoutesT } from '../types/RootScreenRoutes'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = () => {

  const style = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#242423',
    },
    bar: {
      display: 'flex',
      flexDirection: 'row',
      position: "relative",
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '90%',
      margin: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderWidth: 0.2,
      borderColor: 'gray',
      shadowColor: 'black',
      borderBlockColor: 'black',
      borderRadius: 10,
      backgroundColor: '#333533',
    }
  })

  const navigation = useNavigation<NavigationProp<RootScreenRoutesT>>();
  return (
    <>
      <View style={style.container}>
        <View style={style.bar}>
          <Image
            source={require('../assets/logo.png')}
            style={{ position: 'absolute', start: 0, width: 100, height: 10, objectFit: 'cover' }}
          />

            <Image
              source={require('../assets/add.png')}
              style={{ width: 30, height: 30 ,backgroundColor: '#E8EDDF', borderRadius: 100}}
            />

        </View>
      </View>
      <Books />
    </>
  )
}

export default Home

