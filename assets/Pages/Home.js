/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import React from "react";
import { StyleSheet, Text, View } from 'react-native';
const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },

});

export default Home;