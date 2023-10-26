import React from "react";
import {View,Text,TouchableOpacity,TouchableHighlight,Image} from 'react-native';
import Container from '../components/Container/Container';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";


const NurseDoctor = ({navigation}) => {
    return (
        <Container>
            <View style={{marginTop:hp('10%'),paddingHorizontal:wp('5%')}}>
                <Image 
                        resizeMode="contain"
                        style={{width:wp('70%'),height:hp('25%'),alignSelf:"center"}}
                        source={require("../../assets/thc.png")}
                    />
                <TouchableOpacity 
                        style={{backgroundColor:"#28a6e0",
                            height:hp('8%'),marginHorizontal:wp('4%'),
                            borderRadius:7,marginVertical:hp('4%'),
                            alignContent:"center",alignItems:"center",justifyContent:"center"
                        }}
                    onPress={() => navigation.navigate('DoctorRegister')}
                >
                    <View style={{
                        display:"flex",flexDirection:"row", 
                        alignContent:"center",alignItems:"center"
                    }}>
                        <Fontisto name="doctor" size={30} 
                            color="white"
                            style={{marginRight:wp('5%')}}
                        />
                        <Text style={{fontSize:hp('3%'),
                            fontFamily:'Lato-Black'
                        }}>
                            DOCTOR
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{backgroundColor:"#28a6e0",
                        height:hp('8%'),marginHorizontal:wp('4%'),borderRadius:7,marginVertical:hp('3%'),
                        alignContent:"center",alignItems:"center",justifyContent:"center"
                    }}
                    onPress={() => navigation.navigate('Nurse Register')}
                >
                    <View style={{
                        display:"flex",flexDirection:"row", 
                        alignContent:"center",alignItems:"center"
                    }}>
                        <FontAwesome5 name="user-nurse" size={30} 
                            color="white"
                            style={{marginRight:wp('5%')}}
                       />
                        <Text style={{fontSize:hp('3%'),
                            fontFamily:'Lato-Black'
                            }}>
                            NURSE
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
          
        </Container>
    )
}

export default NurseDoctor;
