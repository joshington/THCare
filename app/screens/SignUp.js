import React from 'react';
import {Text,View,StatusBar,
    TouchableOpacity,TouchableHighlight,Image,StyleSheet} from 'react-native';
import Container from "../components/Container/Container";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } 
    from "react-native-responsive-screen";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';



const SignUp = ({navigation}) => {
    return (
        <Container>
            <View style={{backgroundColor:"white",height:hp('100%'),paddingHorizontal:wp('6%')}}>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <View style={{flexDirection:'row',marginTop:hp('5%'),
                    marginHorizontal:wp('5%'),
                    display:"flex"}}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Feather name="chevron-left" size={30} color="black" />
                    </TouchableOpacity>    
                    <Text style={{
                        fontSize:hp('2.5%'),fontFamily:'Lato-Black',
                        color:"black",marginLeft:wp('9%')}}
                    >
                        SignUp
                    </Text>
                </View>
                <Text style={{marginLeft:wp('5%'),marginTop:hp('2%'),
                    fontWeight:"bold",fontSize:hp('2%'),color:"black",fontFamily:'Lato-Black'}}
                >
                    Get Verification Code to Sign up
                </Text>
                <Text style={{marginLeft:wp('5%'),marginTop:hp('2%'),
                    fontSize:hp('2%'),width:wp('70%'),fontFamily:'Lato-Black'}}
                >
                    How would you like to receive a verification code
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
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
                {/* <View style={{width:wp('80%'),backgroundColor:"gray",
                    height:hp('.1%'),
                    marginTop:hp('3%'),fontWeight:"bold",
                    marginBottom:hp('2%'),
                    marginHorizontal:wp('6%'),
                }} /> */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('EmailVerify')}
                >
                    <View style={{display:"flex",marginTop:hp('1%'),justifyContent:"space-between",
                        flexDirection:'row',marginHorizontal:wp('5%'),marginRight:wp('7%')}}
                    >
                        <View style={{display:"flex",flexDirection:"row"}}>
                            <Feather name='mail' size={30} color='black' 
                                style={{marginRight:wp('3%')}} />
                            <Text style={{fontSize:hp('2.5%'),
                                color:"black",fontFamily:'Lato-Black'}}>Email</Text>
                        </View>
                        <Feather name='chevron-right' size={20} color='black' />
                    </View>
                </TouchableOpacity>
                <Text style={{textAlign:"center",fontFamily:'Lato-Black',fontSize:hp('2%'),marginTop:hp('20%')}}>
                    By Opening  THCare account, you agree to our
                </Text>
                <TouchableOpacity style={{marginTop:hp('2%')}}>
                    <Text style={{fontSize:hp('2.2%'),fontWeight:"bold",color:"#28a6e0",textAlign:"center"}}>
                        Terms of Use
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default SignUp;