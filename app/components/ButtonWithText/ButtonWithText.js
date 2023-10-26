import React from "react";
import {View,Text,TouchableHighlight,TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";



const ButtonWithText = ({command,onPress,isCo,color,textColor}) => {
    return(
        <TouchableOpacity
            underlayColor='none'
            style={{height:hp('8%'),width:wp('86%'),marginTop:hp('2%'),
            backgroundColor: isCo ? color : "blue",
            borderRadius:hp('1.5%'),
            marginHorizontal:wp('12%'),justifyContent:"center"}}
            onPress={onPress}
        >
            <Text style={{textAlign:"center",fontSize:hp('2.8%'),
                color:textColor,fontWeight:"bold"}}
            >
                {command}
            </Text>
        </TouchableOpacity>
    )
}


export default ButtonWithText;