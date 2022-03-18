/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View, ScrollView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Footer from "./assets/Includes/Footer";
import Navbar from "./assets/Includes/Navbar";
import Home from "./assets/Pages/Home";

const App = () => (
  <NativeRouter>
    <View style={{ flex: 1 }}>
      <Navbar />
      <ScrollView>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </ScrollView>
      <Footer />
    </View>
  </NativeRouter>
);

export default App;
