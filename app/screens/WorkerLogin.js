import React from 'react';
import { Text,TextInput,View,TouchableHighlight,TouchableOpacity,Image } from 'react-native';
import Container from '../components/Container/Container';
import { 
    heightPercentageToDP as hp,
    widthPercentageToDP as wp } from "react-native-responsive-screen";

import LabelInput from '../components/LabelInput/LabelInput';
import ButtonWithText from '../components/ButtonWithText/ButtonWithText';




const MyLabel = ({label,placeText,
    keyboard,secure,onChangeText,value
}) => {
    return (
        <View style={{marginTop:hp('2%')}}>
            <Text style={{fontSize:hp('2.12%'),fontFamily:'Lato-Black'}}>
                {label}
            </Text>
            <TextInput
                placeholder={placeText}
                style={{display:"flex",
                    paddingHorizontal:wp('3%'),
                    height:hp('4.5%'),width:wp('86%'),
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


const ButonWithText = ({command,onPress,isCo,color,textColor}) => {
    return(
        <TouchableHighlight
            style={{height:hp('6%'),width:wp('86%'),marginTop:hp('2%'),
            backgroundColor: isCo ? color : "blue",
            borderRadius:hp('1.5%'),
            marginHorizontal:wp('12%'),justifyContent:"center"}}
            onPress={onPress}
        >
            <Text style={{textAlign:"center",
                fontSize:hp('2.8%'),
                color:textColor,fontWeight:"bold"}}
            >
                {command}
            </Text>
        </TouchableHighlight>
    )
}







const WorkerLogin = ({navigation}) => {
    return (
        <Container>
            <View style={{marginTop:hp('6%'),
                alignItems:"center",alignContent:"center",justifyContent:"center"}}>
                
                <Text style={{fontSize:hp('4%'),
                    textAlign:"center",fontFamily:'Lato-Bold',color:'black'}}>
                    Login to continue
                </Text>
                <View style={{textAlign:"center",alignContent:"center",alignSelf:"center",
                    alignItems:"center",justifyContent:"center",width:wp('60%'),
                    marginTop:hp('2%')
                }}
                >
                    <Text style={{fontSize:hp('2.2%'),textAlign:"center",fontFamily:'Lato-Black'}}>
                        Enter your phone number and password to login
                    </Text>
                </View>
                <View style={{marginTop:hp('5%')}}>
                    <MyLabel 
                        label="Email" 
                        placeText="e.g thc@gmail.com" 
                    />
                    <MyLabel
                        label="Password"
                        secure={true}
                    />
                </View>
                
                <ButonWithText 
                    isCo={true}
                    color="#28a6e0"
                    textColor="white"
                    command="Login"
                    onPress={() => navigation.navigate('Dashboard')}
                    
                />
                <TouchableOpacity
                    style={{marginTop:hp('3%')}}
                    onPress={() => navigation.navigate('Nurse Register')}
                >
                    <Text style={{fontSize:hp('2.2%'),fontFamily:'Lato-Black'}}>
                        Don't have an account? 
                        <Text style={{color:"#28a6e0",fontFamily:'Lato-Bold'}}>Register Now</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{marginTop:hp('3%')}}
                   onPress={() => navigation.navigate('Reset')}
                >
                    <Text style={{fontSize:hp('2.2%'),
                        color:"#28a6e0",
                        textAlign:"center",
                        fontFamily:'Lato-Bold'}}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
                
            </View>
        </Container>
    )
}



export default WorkerLogin;