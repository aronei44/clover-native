/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image
                    source={{
                        uri: 'https://drive.google.com/uc?id=1xjgbRKPYQrMM4ybE8_6hLQUuu8NQfsvT&export=media',
                    }}
                    style={styles.cardLogo}
                />
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.cardBodyTitle}>nama produk</Text>
                <Text>harga</Text>
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
    },
    cardFooter: {
        padding: 5,
    },
    cardFooterButton: {
        marginHorizontal: 5,
        borderRadius: 20,
    },
});

export default Card;
