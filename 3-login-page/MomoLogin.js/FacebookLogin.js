import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Dimensions, 
    SafeAreaView, 
    View, 
    StyleSheet, 
    Image,
    Text,
    TextInput, 
    TouchableOpacity} from 'react-native'

import FacebookBannerImage from "../assets/login-page-images/facebook-banner.jpg";

const screenWidth = Dimensions.get("window").width;
const bannerHeight = (screenWidth / 75) * 46;// Image ratio is 75X46

export default function FacebookLogin() {
    return (
     <>
      <StatusBar style='light' />
      
      <Image source={FacebookBannerImage}  style={styles.banner}    />

        <SafeAreaView style={styles.container}>
    <View style={styles.content}>
    <TextInput 
            style={[styles.input, styles.inputUsername]}
            placeholder="Telefon numarası veya e-posta"
            placeholderTextColor="#cdcdcf"
        />