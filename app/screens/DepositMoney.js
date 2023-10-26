import React from "react";
import {Text,View,TouchableHighlight,TouchableOpacity,StatusBar} from 'react-native';

import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";


import Container from "../components/Container/Container";
import LongCard from "../components/LongCard/LongCard";

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const DepositMoney = ({navigation}) => {
    return(
        <Container>
            <View style={{padding:wp('4%'),marginTop:hp('4%')}}>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <Text style={{fontFamily:'Lato-Black',
                    fontSize:hp('3%'),marginLeft:wp('5%'),
                    marginTop:hp('2%')
                }}
                >
                    Select method to add money
                </Text>
                <LongCard 
                    customIcon={
                        <Entypo name="mobile" size={40} color="#00b4d8" />

                    }
                    text="Mobile Money"
                />
                <LongCard 
                    customIcon={
                        <AntDesign name="creditcard" size={40} 
                            color="#00b4d8" 
                            style={{marginRight:wp('6%')}}
                        />

                    }
                    text="Credit Card"
                />
                <LongCard 
                    customIcon={
                        <SimpleLineIcons 
                            name='credit-card'
                            size={50}
                            color="#28a6e0"
                            style={{marginRight:wp('6%')}}
                        />
                    }
                    text="Insurance"
                />
            </View>
           
        </Container>
    )
}




export default DepositMoney;