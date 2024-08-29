import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {formatResult} from "../service/calcService"

interface ResultProps {
    value: number
    label: string
}

export const Result: React.FC<ResultProps> = ({value, label}) => {

    if (value) {
        const result = formatResult(value)
        return <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.price}>
                <Text style={styles.value}>{result.value}</Text>
                <Text style={styles.unit}>{result.unit}</Text>
            </View>
        </View>
    }

    return <View></View>
}

const styles = StyleSheet.create({
    label: {
        fontWeight: '700',
        textAlign: 'right'
    },
    price: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'baseline',
        justifyContent: 'flex-end'
    },
    value: {
        fontWeight: "700",
        fontSize: 25,
        color: '#f44336'
    },
    unit: {
        color: '#888',
        fontSize: 14
    }
});