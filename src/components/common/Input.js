import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label }) => {
    return (
        <View style={styles.containerStyle}>
            <Text>{label}</Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { Input };
