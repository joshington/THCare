import React from "react";
import {View,Text,TouchableOpacity,StatusBar} from 'react-native';

import Container from "../components/Container/Container";
import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";



const ProductUpdates = ({navigation}) => {
    return(
        <Container>
            <View>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <Text style={{textAlign:"center",
                    marginTop:hp('3%'),
                    fontSize:hp('2.5%'),color:"black",fontWeight:"bold"}}>
                    Team Home Care Updates
                </Text>
            </View>
            {/* <Text style={{textAlign:"center",
                marginTop:hp('9%'),fontFamily:'Lato-Bold',
                fontSize:hp('4%')}}
            >
                Coming Soon
            </Text> */}
        </Container>
    )
}


export default ProductUpdates;