
import React from 'react'

import { View, Text, TouchableHighlight } from 'react-native'
import Communications from 'react-native-communications'

import Icon from 'react-native-vector-icons/FontAwesome'

import { header } from './styles'

const Header = ({ nombre, telefono, email, goBack }) => (
    <View style={header.container}>
        <View style={header.containerTabs}>
            <Icon
                name="arrow-left"
                color="#fff"
                size={20}
                onPress={goBack}
            />
        { /*<Text style={header.containerText} >{ nombre }</Text> */}

        </View>
        <View style={header.containerTabs}>
            <Icon
                style={header.iconPhone}
                name="phone"
                color="#fff"
                size={20}
                onPress={() => {
                    Communications.phonecall(telefono, true)
                }}
            />
            
            <Icon
                name="envelope"
                color="#fff"
                size={20}
                onPress={()=>{
                    Communications.email([email], null, null, 'Cotización de compu soft', `Hola ${nombre}`)
                }}
            />
        </View>
    </View>
)

export default Header
