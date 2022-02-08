/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

const HolaMundoScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
            }}>
            <Text
                style={{
                    fontSize: 45,
                    textAlign: 'center',
                }}>
                Hellow world!
            </Text>
        </View>
    );
};

export default HolaMundoScreen;
