import React from 'react';
import {Text,View,StatusBar,
    TouchableOpacity,TouchableHighlight,Image,StyleSheet} from 'react-native';
import Container from "../components/Container/Container";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } 
    from "react-native-responsive-screen";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';




const LoginVerify = ({navigation}) => {
    return (
        <Container>
            <View style={{backgroundColor:"white",height:hp('100%'),paddingHorizontal:wp('6%')}}>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <View style={{flexDirection:'row',marginTop:hp('3%'),
                    marginHorizontal:wp('5%'),
                    display:"flex"}}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Feather name="chevron-left" size={30} color="black" />
                    </TouchableOpacity>    
                    <Text style={{
                        fontSize:hp('2.5%'),fontFamily:'Lato-Bold',
                        color:"black",marginLeft:wp('9%')}}
                    >
                        Login
                    </Text>
                </View>
                <Text style={{marginLeft:wp('5%'),marginTop:hp('2%'),
                    fontWeight:"bold",fontSize:hp('2%'),color:"black"}}
                >
                    Get Verification Code to Login
                </Text>
                <Text style={{marginLeft:wp('5%'),marginTop:hp('2%'),
                    fontSize:hp('2%'),width:wp('70%'),fontFamily:'Lato-Black'}}
                >
                    How would you like to receive a verification code
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{marginTop:hp('5%')}}
                >
                    <View style={{display:"flex",marginTop:hp('3%'),justifyContent:"space-between",
                        flexDirection:'row',marginHorizontal:wp('5%'),marginRight:wp('7%')}}
                    >
                        <View style={{display:"flex",flexDirection:"row"}}>
                            <Feather name='phone' size={30} color='black' 
                                style={{marginRight:wp('3%')}} />
                            <Text style={{fontSize:hp('2.5%'),color:"black",fontFamily:'Lato-Black'}}>
                                Phone number
                            </Text>
                        </View>
                        <Feather name='chevron-right' size={20} color='black' />
                    </View>
                </TouchableOpacity>
                <View style={{width:wp('80%'),backgroundColor:"gray",
                    height:hp('.1%'),
                    marginTop:hp('5%'),fontWeight:"bold",
                    marginBottom:hp('3%'),
                    marginHorizontal:wp('6%'),
                }} />
                <TouchableOpacity onPress={() => navigation.navigate('EmailVerify')}>
                    <View style={{display:"flex",marginTop:hp('2.5%'),justifyContent:"space-between",
                        flexDirection:'row',marginHorizontal:wp('5%'),marginRight:wp('7%')}}
                    >
                        <View style={{display:"flex",flexDirection:"row"}}>
                            <Feather name='mail' size={30} color='black' 
                                style={{marginRight:wp('3%')}} />
                            <Text style={{fontSize:hp('2.5%'),color:"black",fontFamily:'Lato-Black'}}>
                                Email</Text>
                        </View>
                        <Feather name='chevron-right' size={20} color='black' />
                    </View>
                </TouchableOpacity>
            </View>
        </Container>
    )
}



export default LoginVerify;