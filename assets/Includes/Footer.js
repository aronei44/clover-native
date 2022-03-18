/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Link } from 'react-router-native';


const Footer = () => {
    return (
        <View style={styles.footer}>
            <Link to={'/'}>
                <Image source={require('../image/product.png')} style={styles.footerLogo} />
            </Link>
            <Link to={'/cart'}>
                <Image source={require('../image/cart.png')} style={styles.footerLogo} />
            </Link>
            <Link to={'/shipper'}>
                <Image source={require('../image/shipper.png')} style={styles.footerLogo} />
            </Link>
            <Link to={'/user'}>
                <Image source={require('../image/person.png')} style={styles.footerLogo} />
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    footerLogo: {
        width: 30,
        height: 30,
    },
});

export default Footer;
