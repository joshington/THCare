import React from "react";
import {View,Text,TouchableHighlight,TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";



const MyButton = ({command,onPress,color,top}) => {
    return(
        <TouchableOpacity
            style={{height:hp('8%'),width:wp('80%'),marginTop:top,
            backgroundColor:color,
            borderRadius:hp('1.5%'),
            justifyContent:"center"}}
            onPress={onPress}
        >
            <Text style={{textAlign:"center",fontSize:hp('2.5%'),
                color:"white",fontWeight:"bold"}}
            >
                {command}
            </Text>
        </TouchableOpacity>
    )
}


export default MyButton;