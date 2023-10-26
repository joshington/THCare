import React from "react";
import PropTypes from "prop-types";
import {View, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import styles from './styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";



const Card = ({onPress, customIcon=null, text}) => {
    return (
        <TouchableOpacity onPress={onPress} 
            style={{...styles.touchable,backgroundColor:"#ffffff",
            width:wp('38%'),height:hp('14%'),borderRadius:10,margin:10}}
        >
            <View style={{alignItems:'center',marginTop:hp('3%')}}>
                {customIcon}
                <Text style={{
                    fontSize:hp('2.5%'),
                    marginLeft:wp('3%'),
                    marginBottom:hp('5%'),
                    alignItems:"center",
                    fontFamily:'Lato-Black'
                }}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
Card.propTypes = {
    text:PropTypes.string,
    customIcon:PropTypes.element
}

export default Card;