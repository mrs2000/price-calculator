import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

interface InputProps {
    value: string,
    onChangeText: (text: string) => void
    label: string
}

export const Input: React.FC<InputProps> = ({value, label, onChangeText}) => {
    return <View style={styles.block}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            inputMode="numeric"
            keyboardType="number-pad"
            value={value}
            style={styles.input}
            onChangeText={onChangeText}
        />
    </View>
}

const styles = StyleSheet.create({
    block: {
        width: '100%'
    },
    input: {
        padding: 5,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        textAlign: 'center',
        borderRadius: 2
    },
    label: {
        color: '#888',
        width: '100%',
        marginBottom: 2
    }
});