import React from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,TouchableOpacity,TouchableHighlight} from 'react-native';
import Container from "../components/Container/Container";
import Heading from "../components/Heading/Heading";

import NewsCard from "../components/NewsCard/NewsCard";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Card from "../components/ListCard/Card";
const Home = () => {
    return(
        <Container>
            <Heading text="Good Morning, Julius!" />
            
            <Text style={{fontSize:hp('3%'), marginLeft:wp('4%'),fontWeight:"bold"}}>
                My Wallet
            </Text>
            <View style={{alignSelf:"center",height:140,width:360,borderRadius:5,borderWidth:0.5,
                marginTop:5
            }}>
                <View style={{flexDirection:"row",justifyContent:"space-around",
                    backgroundColor:"#caf0f8",height:50,borderRadius:5,
                        borderColor:"#caf0f8",borderWidth:0,alignContent:"center",alignItems:"center"}}
                >
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Wallet Balance:</Text>
                    <Text style={{color:"red",fontSize:20}}>
                        UGX:  
                    </Text>
                </View>
                
               
                
            </View>
                
            
            <Text style={{textAlign:"left",fontSize:hp('3%'), fontWeight:"bold",marginLeft:wp('4%')}}>
                Our Services
            </Text>
            <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignSelf:"center"}}>
                <Card 
                    text="Book Nurse"
                    customIcon={
                        <Icon name="nurse" size={30} color="black" />
                    }
                />
                <Card 
                    text="Book Doctor"
                    customIcon={
                        <Icon name="nurse" size={40} color="black" />
                    }
                />
            </View>
            <TouchableOpacity 
                style={{backgroundColor:"#0077b6",
                height:hp('8%'),marginHorizontal:wp('4%'),borderRadius:7,marginVertical:hp('3%'),
                alignContent:"center",alignItems:"center"
            }}
            >
                <View style={{display:"flex",flexDirection:"row", alignContent:"center",alignItems:"center"}}>
                    <Icon name="book" size={40} color="white" />
                    <Text style={{fontSize:hp('3%'),fontWeight:"bold",color:"white"}}>
                        Apply As Nurse/Doctor
                    </Text>
                </View>
            </TouchableOpacity>
            <Text style={{fontSize:hp('2.3%'), fontWeight:"bold",marginLeft:wp('4%')}}>
                Discover Team Home Care
            </Text>
            <NewsCard 
                customIcon={
                    <Image 
                        resizeMode="contain"
                        style={{width:100,height:100}}
                        source={require("../../assets/elder2.png")}
                    />

                }
                title="Discover new discounts"
                descr="Enjoy paliative care at a give away price, with the best care"
            />
            

        </Container>
    )
}

export default Home; 