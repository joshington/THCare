import React from 'react';
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity,TextInput,StatusBar,
    TouchableHighlight,Image,StyleSheet} from 'react-native';

import Container from '../components/Container/Container';
import Feather from 'react-native-vector-icons/Feather';
import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';


const ButonWithText = ({command,onPress,isCo,color,textColor}) => {
    return(
        <TouchableOpacity
            style={{height:hp('6%'),width:wp('86%'),marginTop:hp('2%'),
            backgroundColor: isCo ? color : "blue",
            borderRadius:hp('1.5%'),
            justifyContent:"center"}}
            onPress={onPress}
        >
            <Text style={{textAlign:"center",
                fontSize:hp('2.8%'),
                color:textColor,fontWeight:"bold"}}
            >
                {command}
            </Text>
        </TouchableOpacity>
    )
}




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
                    height:hp('6%'),width:wp('86%'),
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







const CheckEmail = ({navigation}) => {
    return (
        <Container>
            <View style={{backgroundColor:"white",height:hp('100%'),paddingHorizontal:wp('7%')}}>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <View style={{flexDirection:'row',marginTop:hp('3%'),
                    
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
                        Check Email
                    </Text>
                </View>
                <View style={{height:hp('20%'),width:wp('40%'),marginTop:hp('4%'),
                alignSelf:'center',
                    borderRadius:100,
                    backgroundColor:"#ffffff",
                    opacity:2,
                    shadowColor:"#000",
                    shadowOffset:{
                        width:0,height:2
                    },
                    shadowOpacity:0.1,
                    shadowRadius:3.84,elevation:9,
                    alignItems:'center',alignContent:'center',justifyContent:'center'
                }}>
                    <Feather name='mail' size={60} color='#28a6e0' 
                        style={{fontWeight:'bold'}} 
                    />
                </View>
                <Text style={{marginTop:hp('4%'),textAlign:'center',
                    fontSize:hp('3%'),fontFamily:'Lato-Bold',color:'black'}}
                >
                    Check your Email
                </Text>
                <Text style={{textAlign:'center',
                    fontSize:hp('2.3%'),fontFamily:'Lato-Black',marginTop:hp('3%')}}>
                    We have sent a Password Recovery mail to your email Address
                </Text>
                <ButonWithText 
                    command="CONTINUE"
                    isCo={true}
                    color="#28a6e0"
                    textColor="white"
                />
  
            </View>
        </Container>
    )
}

export default CheckEmail;