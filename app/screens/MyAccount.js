import React from 'react';
import {View,Text,StatusBar,
    TouchableHighlight,TouchableOpacity} from 'react-native';

import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Container from '../components/Container/Container';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';



//====a
const NowCard = ({customIcon,text}) => {
    <TouchableOpacity>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            {customIcon}
            <Text style={{fontSize:hp('3%'),fontWeight:"bold"}}>{text}</Text>
            <AntDesign name="right" size={30} color="#28a6e0" />
        </View>
    </TouchableOpacity>
}





const MyCard = ({isText,customText,customIco}) => {
    return(
        <TouchableOpacity 
            style={{backgroundColor:"#ffffff",
            marginHorizontal:wp('4%'),
            opacity:2,
            shadowColor:"#000",
            marginTop:hp('2%'),
            shadowOffset:{
                width:0,height:2
            },
            shadowOpacity:0.1,
            shadowRadius:3.84,elevation:9,
            width:wp('84%'),height:hp('14%'),borderRadius:10,padding:hp('3%')}}
        >
            <View style={{display:"flex",
                flexDirection:"row",justifyContent:"space-between"}}
            >
                {customIco}
                
                <View>
                    {
                        isText ? (
                            <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Black'}}>
                                {customText}</Text>
                        )
                        : <View>
                            <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Bold'}}>Aggrey</Text>
                            <Text style={{fontFamily:'Lato-Black'}}>0706626855</Text>
                        </View>
                    }  
                </View>
                <AntDesign name="right" size={30} color="#28a6e0" />
            </View>
        </TouchableOpacity>
    )
}


const MyAccount = ({navigation}) => {
    return (
        <Container>
            <View style={{padding:wp('4%'),marginTop:hp('3%')}}>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <View style={{display:"flex",flexDirection:"row"}}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Feather name="chevron-left" size={30} color="black" />
                        </TouchableOpacity>
                    <Text style={{fontSize:hp('3%'),fontWeight:"bold",marginLeft:wp('4%')}}>
                        My account
                    </Text>
                </View>
                <MyCard 
                    customIco={
                        <FontAwesome name="user-circle-o" size={50} color="#28a6e0" />
                    }
                />
                <MyCard
                    customIco={
                        <MaterialIcons name="email" size={50} color="#28a6e0" />
                    }
                    isText={true}
                    customText="Communications"
                />
                <MyCard
                    customIco={
                        <Entypo name="help-with-circle" size={50} color="#28a6e0" />
                    }
                    isText={true}
                    customText="Help"
                />
                <TouchableOpacity>
                    <Text style={{textAlign:"center",fontWeight:"bold",
                        marginTop:hp('3%'),color:"#28a6e0",
                        fontSize:hp('3.2%')}}>
                        LogOut
                    </Text>
                </TouchableOpacity>
                
            </View>
        </Container>
    )
}

export default MyAccount;