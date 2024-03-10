import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AddBookHeader = () => {
    return (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 7, marginTop: 5 }}>
            <TouchableOpacity>
                <Image source={require("../../assets/back.png")} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <Text style={{ color: "white" }}>
                Book Details
            </Text>
            <TouchableOpacity>
                <Image source={require("../../assets/threedot.png")} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        </View>
    )
}

export default AddBookHeader