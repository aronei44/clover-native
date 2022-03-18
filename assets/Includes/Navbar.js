/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Link } from 'react-router-native';


const Navbar = () => {
    return (
        <View style={styles.nav}>
            <Link to="/" style={styles.navBrand}>
                <Image source={require('../image/logo.png')} style={styles.navLogo} />
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    navBrand: {
        marginHorizontal: 20,
        flex: 3,
    },
    navLogo: {
        width: 80,
        height: 20,
    },
});

export default Navbar;
