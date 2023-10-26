import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/'



const Header = ({lengthItems,onPress}) => (
    <>
        <View style={{height:60,backgroundColor:'#20B2AA',paddingTop:5}}>
          
            <Text>THCare</Text>
        </View>
    </>
)
Header.propTypes = {
    lengthItems:PropTypes.any,
    onPress:PropTypes.func,
}
export default Header;