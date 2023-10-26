import React from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,TouchableOpacity,TouchableHighlight} from 'react-native';
import Container from "../components/Container/Container";
import Heading from "../components/Heading/Heading";
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';

import NewsCard from "../components/NewsCard/NewsCard";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Card from "../components/ListCard/Card";

const TeamHomeCare = ({route,navigation}) => {
    return(
        <Container>
            <View style={{marginHorizontal:wp('3%'),
                paddingVertical:hp('4%')}}>
                <Heading text="Good Morning, Julius!" />
                <Text style={{fontSize:hp('3%'), color:"black",
                    fontFamily:'Lato-Black',
                    marginTop:hp('1%'),marginLeft:wp('6%')}}>
                    My Wallet
                </Text>
                <View style={{alignSelf:"center",
                    height:hp('19%'),width:wp('82%'),borderRadius:5,
                    marginTop:hp('2%'),
                    backgroundColor:"#ffffff",
                    opacity:2,
                    shadowColor:"#000",
                    shadowOffset:{
                        width:0,height:2
                    },
                    shadowOpacity:0.1,
                    shadowRadius:3.84,elevation:9,
                }}>
                    <View style={{flexDirection:"row",justifyContent:"space-around",
                        backgroundColor:"#28a6e0",height:50,borderRadius:5,
                            borderColor:"#28a6e0",borderWidth:0,alignContent:"center",alignItems:"center"}}
                    >
                        <Text style={{fontSize:20,fontFamily:'Lato-Black'}}>
                            Wallet Balance:
                        </Text>
                        <Text style={{color:'white',
                            fontSize:20,fontFamily:'Lato-Black'}}>
                            UGX: 50000
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={{backgroundColor:"#28a6e0",
                        height:hp('6%'),marginHorizontal:wp('4%'),
                        borderRadius:7,marginVertical:hp('3%'),
                        alignContent:"center",alignItems:"center",justifyContent:"center"
                        
                    }}
                    onPress={() => navigation.navigate('Deposit')}
                    >
                        <View style={{
                            display:"flex",flexDirection:"row", 
                            alignContent:"center",alignItems:"center"
                        }}>
                            <AntDesign name="wallet" size={30} color="white" />
                            <Text style={{fontSize:hp('3%'),fontWeight:"bold",color:"white"}}>
                                DEPOSIT MONEY
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign:"left",
                    fontSize:hp('3%'), fontFamily:'Lato-Bold',color:'black',
                    marginTop:hp('2%'),
                    marginLeft:wp('6%')}}
                >
                    Our Services
                </Text>
                <View style={{display:"flex",
                    flexDirection:"row",alignSelf:"center"}}>
                    <Card 
                        text="Book Nurse"
                        customIcon={
                            <Image resizeMode="contain" 
                                style={{width:hp('10%'),height:hp('5%')}}
                                source={require("../../assets/n2.png")} 
                            />
                        }
                        onPress={() => navigation.navigate('Register')}
                    />
                    <Card 
                        text="Book Doctor"
                        customIcon={ 
                            <Image resizeMode="contain" 
                                style={{width:hp('10%'),height:hp('5%')}}
                                source={require("../../assets/n1.png")} 
                            />
                        }
                        onPress={() => navigation.navigate('Register')}
                    />
                </View>
                <TouchableOpacity 
                    style={{backgroundColor:"#28a6e0",
                    height:hp('6%'),marginHorizontal:wp('7%'),
                    borderRadius:7,marginVertical:hp('2%'),

                    width:wp('80%'),
                    alignContent:"center",
                    alignItems:"center",justifyContent:"center"
                }}
                onPress={() => navigation.navigate('NurseDoctor')}
                >
                    <View style={{display:"flex",flexDirection:"row", alignContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:hp('3%'),fontWeight:"bold",color:"white"}}>
                            Nurse/Doctor
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{backgroundColor:"white",
                    height:hp('6%'),marginHorizontal:wp('7%'),
                    borderRadius:7,

                    width:wp('80%'),
                    alignContent:"center",
                    alignItems:"center",justifyContent:"center"
                }}
                onPress={() => navigation.navigate('Book Specialists')}
                >
                    <View style={{display:"flex",flexDirection:"row", alignContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:hp('3%'),
                            fontWeight:"bold",color:"black"}}>
                            Hospitals
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:hp('4%')}}
                    onPress={() => navigation.navigate('Product Updates')}
                >
                    <Text style={{fontSize:hp('2.6%'),
                        fontFamily:'sans-serif',
                        color:"#28a6e0",
                        fontWeight:"bold",
                        textAlign:"center"
                        }}>
                        Team Home Care Updates
                    </Text>
                </TouchableOpacity>
                
                {/* <NewsCard 
                    customIcon={
                        <Image 
                            resizeMode="contain"
                            style={{width:wp('14%'),
                            height:hp('14%')}}
                            source={require("../../assets/elder2.png")}
                        />

                    }
                    title="Discover new discounts"
                    descr="Enjoy paliative care at a give away price, with the best care"
                /> */}
            </View>
        </Container>
    )
}


export default TeamHomeCare;