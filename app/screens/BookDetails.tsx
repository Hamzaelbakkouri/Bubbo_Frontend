import { View, Text, ImageBackground, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootScreenRoutesT } from '../types/RootScreenRoutes';
import AddBookHeader from '../components/Header/AddBookHeader';
import { ScrollView } from 'react-native-gesture-handler';

type BookDetailsScreenRouteProp = RouteProp<RootScreenRoutesT, 'BookDetails'>;

type Props = {
  route: BookDetailsScreenRouteProp;
};
const BookDetails: React.FC<Props> = ({ route }) => {
  const { book } = route.params;
  return (
    <View style={{ backgroundColor: "#242423", height: "100%" }}>
      <ImageBackground src={book.image} resizeMode="cover" style={{ height: '65%', width: '100%' }}>
        <View style={{ width: '100%', height: '65%', backgroundColor: "#333533", opacity: 0.82 }}>
          <AddBookHeader />
          <View style={{ width: '100%', height: "120%", display: "flex", justifyContent: 'center', alignItems: "center" }}>
            <Image source={{ uri: book.image }} style={{
              width: 190,
              height: 280,
              objectFit: 'cover',
              borderRadius: 3,
            }} />
          </View>
          <View style={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>{book.title}</Text>
            <Text style={{ color: "gray", fontSize: 15 }}>{book.author}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{ gap: 7 }}>
        <View style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 4, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", gap: 3 }}>
          <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
            <Text style={{ color: "white", fontSize: 10 }}>{book.price}</Text>
            <Image source={require("../assets/price.png")} style={{ width: 11, height: 11 }} />
          </View>

          <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
            <Text style={{ color: "white", fontSize: 10 }}>{book.rating}</Text>
            <Image source={require("../assets/star.png")} style={{ width: 11, height: 11 }} />
          </View>

          <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
            <Text style={{ color: "white", fontSize: 10 }}>{book.creationDate}</Text>
            <Image source={require("../assets/price.png")} style={{ width: 11, height: 11 }} />
          </View>
        </View>
        <View style={{ width: "100%", paddingHorizontal: 10, gap: 5 }}>
          <Text style={{ color: "white", fontSize: 15 }}>Description</Text>
          <Text style={{ color: "gray", fontSize: 10 }}>{book.description}</Text>
        </View>

        <View style={{ width: "100%", paddingHorizontal: 10, gap: 5, display: "flex", flexDirection: "column" }}>
          <Text style={{ color: "white", fontSize: 15 }}>Language</Text>
          <Text style={{ color: "gray", fontSize: 10 }}>{book.language}</Text>
        </View>

        <View style={{ width: "100%", paddingHorizontal: 10, gap: 11, display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity style={{ backgroundColor: "#333533", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 4 }}>
            <Text style={{ color: "white", fontSize: 10 }}>READ BOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "#2a2d73", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 4 }}>
            <Text style={{ color: "#5258f7", fontSize: 10 }}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "#52323D", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 4 }}>
            <Text style={{ color: "#E55F6D", fontSize: 10 }}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default BookDetails