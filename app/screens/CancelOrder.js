import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Container from "../components/Container/Container";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ButtonWithText from "../components/ButtonWithText/ButtonWithText";




const ButonWithText = ({command,onPress,isCo,color,textColor}) => {
    return(
        <TouchableOpacity
            style={{height:hp('8%'),width:wp('86%'),marginTop:hp('2%'),
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
        </TouchableOpacity>
    )
}




const CancelCard = ({customText}) => {
    return(
        <TouchableOpacity 
            style={{backgroundColor:"#ffffff",
            opacity:2,
            shadowColor:"#000",
            shadowOffset:{
                width:0,height:2
            },
            shadowOpacity:0.1,
            shadowRadius:3.84,elevation:9,
            width:wp('84%'),height:hp('9%'),borderRadius:10,margin:10,
            padding:hp('1%')
        
        }}
        >
            <View style={{display:"flex",flexDirection:'row',alignItems:"center",justifyContent:"space-around"}}>
                <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Black'}}>
                    {customText}</Text>
                <SimpleLineIcons name="arrow-right" size={20} 
                    style={{marginTop:hp('2%'),fontWeight:"bold",color:"black"}} />
            </View>
        </TouchableOpacity>
    )
}

const CancelOrder = ({navigation}) => {
    return (
        <Container>
            <View style={{marginTop:hp('4%'),alignItems:"center"}}>
                <View style={{alignItems:"center"}}>
                    <FontAwesome5  name="hand-paper" size={60} color="#28a6e0" />
                    <Text style={{fontSize:hp('3%'),marginTop:hp('3%'),
                        fontFamily:'Lato-Black'
                    ,textAlign:"center"}}>
                        ARE YOU SURE YOU WANT TO CANCEL YOUR ORDER</Text>
                </View>
                <View style={{marginTop:hp('4%')}}>
                    <CancelCard 
                        customText="Search Taking Long"
                    />
                    <CancelCard 
                        customText="Nurse Taking Long"
                    />
                    <CancelCard 
                        customText="I changed My Mind"
                    />
                </View>
                <ButonWithText 
                    isCo={true}
                    color="#28a6e0"
                    textColor="white"
                    onPress={() => navigation.navigate('Pricing')}
                    command="CONTINUE WITH ORDER"
                />

            </View>
        </Container>
    )
}

export default CancelOrder;