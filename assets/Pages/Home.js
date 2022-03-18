/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../Includes/Card';


const Home = () => {
    return (
        <View style={styles.container}>
            <Card />
            <Card />
            <Card />
            <Card />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 100,
    },
});

export default Home;
