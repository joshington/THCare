import React from "react";
import PropTypes from "prop-types";
import {View, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import styles from './styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Entypo from 'react-native-vector-icons/Entypo';



const LongCard = ({onPress, customIcon=null, text}) => {
    return (
        <TouchableOpacity onPress={onPress} 
            style={{backgroundColor:"#ffffff",
            opacity:2,
            shadowColor:"#000",
            shadowOffset:{
                width:0,height:2
            },
            shadowOpacity:0.1,
            shadowRadius:3.84,elevation:9,
            width:wp('84%'),height:hp('12%'),borderRadius:10,margin:10}}
        >
            <View style={{marginTop:hp('3%'),display:"flex",justifyContent:"space-around",
                flexDirection:"row"}}>
                <View style={{display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between"
                }}
                >
                    {customIcon}
                    <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Black'}}>
                        {text}</Text>
                </View>
                <Entypo 
                    name="chevron-small-right"
                    size={30}
                    color="black"
                /> 
            </View>
        </TouchableOpacity>
    )
}


LongCard.propTypes = {
    text:PropTypes.string,
    customIcon:PropTypes.element
}

export default   LongCard;