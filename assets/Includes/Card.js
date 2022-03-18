/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Card = ({ id, name, price, image }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image
                    source={{
                        uri: image,
                    }}
                    style={styles.cardLogo}
                />
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.cardBodyTitle}>{name}</Text>
                <Text style={styles.cardBodyPrice}>Rp {price}</Text>
            </View>
            <View style={styles.cardFooter}>
                <Button color="#2f5000" title="Buy Now" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '44%',
    },
    cardHeader: {
        width: '100%',
        height: 200,
        padding: 5,
    },
    cardLogo: {
        width: '100%',
        height: '100%',
    },
    cardBody: {
        padding: 5,
    },
    cardBodyTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    cardBodyPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2f5000',
        marginVertical: 5,
        marginBottom: 30,
    },
    cardFooter: {
        padding: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    cardFooterButton: {
        marginHorizontal: 5,
        borderRadius: 20,
    },
});

export default Card;
