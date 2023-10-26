import React from "react";
import {View,Text, TextInput} from 'react-native';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";



const LabelInput = ({label,placeText,keyboard,secure,onChangeText,value}) => {
    return (
        <View style={{marginTop:hp('2%')}}>
            <Text style={{fontSize:hp('3%')}}>{label}</Text>
            <TextInput
                placeholder={placeText}
                style={{display:"flex",
                    paddingHorizontal:wp('3%'),
                    height:hp('8%'),width:wp('86%'),
                    borderRadius:wp('4%'),borderWidth:wp('0.3%'),
                    fontSize:hp('3%')
                }}
                keyboardType={keyboard}
                secureTextEntry={secure ? true : false}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}


export default LabelInput;