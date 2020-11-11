import React from 'react';
// import LottieView from 'lottie-react-native';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import Animation from '../assets/38290-loading-51-monoplane.json';

// ----------------------------------------------------------------

const LoadingTest = ({ navigation }) => {
  const LoadingText = styled.Text`
    font-size: 32px;
    text-align: center;
  `;

  return (
    <LoadingText>Loading...</LoadingText>
    // <LottieView source={Animation} autoPlay loop />
  );
};

export default LoadingTest;
