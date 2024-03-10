import { Text, View, TouchableOpacity, Image } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { book } from '../../types/api.Book'
import { RootScreenRoutesT } from '../../types/RootScreenRoutes'

const BookCard: React.FC<{ book: book }> = ({ book }) => {
    const navigation = useNavigation<NavigationProp<RootScreenRoutesT>>();

    return (
        <>
            <TouchableOpacity activeOpacity={0.7}
                onPress={() => navigation.navigate('BookDetails', { book })}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    borderRadius: 5,
                    borderColor: 'white',
                    backgroundColor: '#333533'
                }}
            >
                <Image source={{ uri: book.image }} style={{ width: 70, height: 110, objectFit: 'cover', borderRadius: 5 }} />
                <View style={{ display: 'flex', flexDirection: 'column' }}>

                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 7 }}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: "white", fontSize: 15, width: 230 }}>{book.title}</Text>
                        <Text style={{ color: "gray", fontSize: 10 }}>{book.author}</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 20, paddingTop: 7, gap: 5 }}>
                        <Text style={{ color: "gray", fontSize: 10 }}>{book.rating}</Text>
                        <Image source={require("../../assets/star.png")} style={{ width: 11, height: 11 }} />
                        <Text style={{ color: "gray", fontSize: 10 }}>{book.price}</Text>
                        <Image source={require("../../assets/price.png")} style={{ width: 11, height: 11 }} />
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 20, paddingTop: 7, gap: 5 }}>
                        <View>
                            <Text style={{ color: "#E55F6D", backgroundColor: "#52323D", paddingHorizontal: 10, paddingVertical: 5, fontSize: 10, borderRadius: 5 }}>Horror</Text>
                        </View>
                        <View>
                            <Text style={{ color: "#5258f7", backgroundColor: "#2a2d73", paddingHorizontal: 10, paddingVertical: 5, fontSize: 10, borderRadius: 5 }}>Romantic</Text>
                        </View>
                        <View>
                            <Text style={{ color: "#42B35E", backgroundColor: "#2D6142", paddingHorizontal: 10, paddingVertical: 5, fontSize: 10, borderRadius: 5 }}>Adventure</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default BookCard