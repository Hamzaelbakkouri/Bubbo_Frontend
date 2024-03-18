import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const AddBookHeader = () => {
    const navigate = useNavigation();


    return (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 7, marginTop: 5 }}>
            <TouchableOpacity onPress={() => { navigate.goBack() }}>
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