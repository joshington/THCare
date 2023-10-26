import React,{useState,useEffect} from "react";
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity,TouchableHighlight,Image,StyleSheet} from 'react-native';
import Container from "../components/Container/Container";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
import LabelInput from "../components/LabelInput/LabelInput";
import Toast from 'react-native-simple-toast';
import { Picker } from "@react-native-picker/picker";
import RadioButton from "../components/RadioButton/RadioButton";
import ButtonWithText from "../components/ButtonWithText/ButtonWithText";
import GenderInputSelct from "../components/GenderInputSelect/GenderInputSelect";


const UserRegister = ({navigation}) => {
    return (
        <Container>
            <View style={{marginTop:hp('1%'),marginHorizontal:wp('8%'),
                alignContent:"center",justifyContent:"center"}}>
                <View>
                    <Image 
                        resizeMode="contain"
                        style={{width:wp('70%'),height:hp('25%'),alignSelf:"center"}}
                        source={require("../../assets/thc.png")}
                    />
                </View>
             
                <Text style={{fontWeight:"bold",
                    fontSize:hp('5.2%'),color:"black",width:wp('53%')}}>
                    Welcome
                </Text>
                <Text style={{fontSize:hp('2.3%'),
                    marginHorizontal:wp('1.5%'),color:"black",
                    width:wp('64%'),textAlign:"justify",lineHeight:30}}>
                       {'\n'}
                    Get professional homecare in the comfort of your 
                    home
                </Text>
                <View style={{marginTop:hp('5%'),
                    alignItems:"center"}}>
                    <ButtonWithText 
                        command="Open free account"
                        isCo={true}
                        color="#28a6e0"
                        textColor="white"
                        onPress={() => navigation.navigate('SignUp')}
                    />
                    <ButtonWithText 
                        command="I have an account"
                        isCo={true}
                        color="#fff"
                        textColor="#000"
                        onPress={() => navigation.navigate('LoginVerify')}
                    />
               </View>
            </View>
        </Container>
    )
}

export default UserRegister;