import React from 'react';
import PropTypes from 'prop-types'
import { View,Text} from 'react-native';
import styles from './styles';
import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';


const Heading = ({text}) => (
    <Text style={{fontSize:hp('2.5%'),color:"#000000",
        fontWeight:'bold',marginTop:hp('1.5%'),fontFamily:'Lato-Light',
        textAlign:"center"
    }}>{text}</Text>
)

Heading.propTypes={
    text:PropTypes.string,
}

export default Heading;