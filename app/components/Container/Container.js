import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';



const Container = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

Container.propTypes = {
    children: PropTypes.any,
};


//0200245245


export default Container;