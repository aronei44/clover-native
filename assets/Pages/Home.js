/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../Includes/Card';
import axios from 'axios';


const Home = () => {
    const [data, setData] = React.useState([]);
    axios.get('https://dev-api-clover.herokuapp.com/api/products')
        .then(res => {
            setData(res.data.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    return (
        <View style={styles.container}>
            {data.map(item => (
                <Card
                    key={item.id}
                    id={item.id}
                    name={item.product_name}
                    price={item.product_price}
                    image={item.photos[0].product_image_path}
                />
            ))}
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
