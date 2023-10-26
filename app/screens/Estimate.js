import React,{useEffect,useState} from "react";
import {Text, View,TouchableHighlight,TouchableOpacity,StyleSheet,
    Image,StatusBar,Modal,Pressable,ActivityIndicator} from 'react-native';

import Container from "../components/Container/Container";
import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP as hp,

    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


const MyButton = ({command,onPress,color,top}) => {
    return(
        <TouchableOpacity
            style={{height:hp('8%'),width:wp('86%'),marginTop:top,
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

const Estimate = ({navigation}) => {
    return (
        <Container>
            <View style={{padding:wp('4%'),marginTop:hp('2%'),marginHorizontal:wp('2%')}}>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <Text style={{textAlign:"center",fontSize:hp('3%'),
                    fontFamily:'Lato-Bold',color:'black'}}>
                    ESTIMATED COST
                </Text>
                <TouchableOpacity 
                    style={{backgroundColor:"#28a6e0",
                    marginTop:hp('4%'),
                    opacity:2,
                    shadowColor:"#000",
                    shadowOffset:{
                        width:0,height:2
                    },
                    shadowOpacity:0.1,
                    shadowRadius:3.84,elevation:9,
                    alignItems:"center",
                    padding:hp('2%'),
                    width:wp('86%'),
                    height:hp('15%'),borderRadius:10,margin:10}}
                >
                    <View>
                        <View style={{display:"flex",flexDirection:"row"}}>
                            <FontAwesome6 name="money-check" size={30} color="white" />
                            <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Bold',color:'white',
                                marginLeft:wp('1.3%')}}>
                                Total Charge
                            </Text>
                        </View>
                        
                        <Text style={{fontSize:hp('2.7%'),color:"white",fontFamily:'Lato-Black'}}>
                            UGX. 200000
                        </Text>
                        <Text style={{fontSize:hp('1.8%'),
                            fontFamily:'Lato-Black'}}>
                            what your charged for whole package</Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                    backgroundColor:"#e5e5e5",
                    opacity:2,
                    shadowColor:"#000",
                    shadowOffset:{
                        width:0,height:2
                    },
                    shadowOpacity:0.1,
                    shadowRadius:3.84,elevation:9,
                    alignItems:"center",
                    padding:hp('2%'),
                    width:wp('86%'),
                    height:hp('15%'),borderRadius:10,margin:10}}
                >
                    <View>
                        <View style={{display:"flex",flexDirection:"row"}}>
                            <Feather name="book" size={40} color="#28a6e0" />
                            <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Bold',color:"black"}}>
                                Booking</Text>
                            
                        </View>
                        
                        <Text style={{fontSize:hp('3%'),fontWeight:"bold"}}>UGX. 50000</Text>
                        <Text style={{fontSize:hp('2%'),fontFamily:'Lato-Black'}}>
                            Initial amount to book nurse
                        </Text>
                    </View>
                    
                </TouchableOpacity>
                <View style={{alignItems:"center"}}>
                    <MyButton 
                        top={hp('2%')}
                        command="ORDER"
                        color="#28a6e0"
                        onPress={() => navigation.navigate('Deposit')}   
                    />
                </View>
            </View>
        </Container>
    )
}

export default Estimate;