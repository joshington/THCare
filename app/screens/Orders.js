import React from "react";
import { View,Text,Image,
    TouchableHighlight,TouchableOpacity,StatusBar } from "react-native";
import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Container from "../components/Container/Container";
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather'




//Adding order card
const OrderCard = ({nurse}) => {
    return(
        <TouchableOpacity style={{height:hp('8%'),marginVertical:hp('3%')}}>
            <View style={{display:"flex",
                flexDirection:"row",justifyContent:"space-around"}}
            >
                {
                    nurse 
                        ? (<Image resizeMode="contain" 
                            style={{width:hp('10%'),height:hp('5%')}}
                            source={require("../../assets/n2.png")} 
                        />)
                        : (<Image resizeMode="contain" 
                            style={{width:hp('10%'),height:hp('5%')}}
                            source={require("../../assets/n1.png")} 
                        />)
                }
                
                <View>
                    
                        {
                            nurse ? (
                                <Text style={{
                                    fontSize:hp('3%'),
                                    fontWeight:"bold",color:"black"}}
                                >
                                    Nurse
                                </Text>
                            ) : (
                                <Text style={{fontSize:hp('3%'),color:"black",
                                    fontWeight:"bold"}}>
                                    Doctor
                                </Text>
                            )
                            
                        }
                    
                    <Text style={{fontFamily:'Lato-Black',fontSize:hp('1.8%')}}>
                        29/9/2023, 8:10PM</Text>
                    <Text style={{fontFamily:'Lato-Black',fontSize:hp('2%')}}>Wallet</Text>
                </View>
                <View style={{marginTop:hp('2%')}}>
                    <Text style={{fontWeight:"bold",fontSize:hp('1.8%'),fontFamily:'Lato-Black'}}>
                        50000
                    </Text>
                    <Text style={{fontWeight:"bold",fontSize:hp('1.8%'),fontFamily:'Lato-Black'}}>
                        UGX</Text>    
                </View>
                <SimpleLineIcons name="arrow-right" size={20} 
                    style={{marginTop:hp('2%'),fontWeight:"bold",color:"black"}} />
            </View>
           
        </TouchableOpacity>
    )
}

const Orders = ({navigation}) => {
    return(
        <Container>
            <View style={{padding:hp('3%')}}>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <View style={{display:"flex",flexDirection:"row"}}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Feather name="chevron-left" size={30} color="black" />
                        </TouchableOpacity>
                    <Text style={{fontSize:hp('3.5%'),fontWeight:"bold",
                        marginLeft:wp('4%'),color:"black"}}>
                        My Orders</Text>
                </View>
               
                <Text style={{marginTop:hp('2%'),color:"black",fontWeight:"bold",
                    fontSize:hp('2%')}}>
                    LAST ORDERS
                </Text>
                <OrderCard 
                    nurse={true}
                />
                <OrderCard />
                
            
            </View>
        </Container>
    )
}

export default Orders;

