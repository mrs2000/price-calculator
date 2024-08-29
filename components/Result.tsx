import React, { useState } from "react";
import {StyleSheet, View, TextInput, Text } from "react-native";
import {formatResult} from "../service/calcService"

interface ResultProps  {
    value: number
    label: string
}

export const Result: React.FC<ResultProps> = ({value, label}) => {

    if (value) {
        const result = formatResult(value)
        return <View>               
            <Text style={{fontWeight: '700', textAlign: 'right'}}>{label}</Text>
            <View style={{flexDirection: 'row', gap: 8, alignItems: 'baseline', justifyContent: 'flex-end'}}>
                <Text style={styles.value}>{result.value}</Text>
                <Text style={styles.unit}>{result.unit}</Text>
            </View>
        </View>
    }

    return <View></View>
}

const styles = StyleSheet.create({
    value: {
        fontWeight: "700",
        fontSize: 25,
        color: '#f44336'
    },
    unit: {
        //fontWeight: "700",
        color: '#888',
        fontSize: 14
    }
});