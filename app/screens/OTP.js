import React,{useState,useEffect} from "react";
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity,TextInput,
    TouchableHighlight,Image,StyleSheet} from 'react-native';
import Container from "../components/Container/Container";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
import LabelInput from "../components/LabelInput/LabelInput";

import Toast from 'react-native-simple-toast';
import { Picker } from "@react-native-picker/picker";
import RadioButton from "../components/RadioButton/RadioButton";
import ButtonWithText from "../components/ButtonWithText/ButtonWithText";
import GenderInputSelct from "../components/GenderInputSelect/GenderInputSelect";



const MyLabel = ({label,placeText,
    keyboard,secure,onChangeText,value
}) => {
    return (
        <View style={{marginTop:hp('3%')}}>
            <Text style={{fontSize:hp('2.4%'),color:"black",fontFamily:'Lato-Black'}}>
                {label}
            </Text>
            <TextInput
                placeholder={placeText}
                style={{display:"flex",
                    paddingHorizontal:wp('3%'),
                    height:hp('6%'),width:wp('78%'),
                    borderRadius:wp('2%'),borderWidth:wp('0.3%'),
                    fontSize:hp('1.8%')
                }}
                keyboardType={keyboard}
                secureTextEntry={secure ? true : false}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}






const OTP = ({navigation}) => {
    return (
        <Container>
            <View style={{marginTop:hp('7%'),
                alignItems:"center",alignContent:"center",justifyContent:"center"}}>
                <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Bold',
                    textAlign:"center",color:"black"}}>
                    Add OTP received
                </Text>
                <View style={{marginBottom:hp('3%')}}>
                    <MyLabel 
                        label="OTP" 
                        placeText="e.g 12345" 
                        keyboard="numeric"
                    />
                </View>
                <ButtonWithText 
                    command="Continue"
                    isCo={true}
                    color="#28a6e0"
                    onPress={() => navigation.navigate('Patient Details')}
                    textColor="white"
                />
            </View>
        </Container>
    )
}

export default OTP;