import React from 'react';
import spinner from '../../assets/spinner.gif';
import { Image } from 'react-native';

const Spinner = () => {
    return (
        <Image 
            source={spinner}
            style={{margin:'auto',resizeMode:'contain'}}
            alt='Loading'
        />
    )
}

export default Spinner;