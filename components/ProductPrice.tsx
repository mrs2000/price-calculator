import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Input} from "./Input";
import {calculation} from "../service/calcService"
import {Result} from "./Result";
import Ionicons from '@expo/vector-icons/Ionicons';

export const ProductPrice: React.FC = () => {

    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [amonut, setAmount] = useState('')

    const [finalDiacount, setFinalDiscount] = useState(0)
    const [pricePerUnit, setPricePerUnit] = useState(0)

    useEffect(() => {
        calculate()
    }, [price, discount, amonut])

    const calculate = () => {
        const result = calculation(price, discount, amonut)
        setFinalDiscount(result.finalDiscount)
        setPricePerUnit(result.perUnitPrice)
    }

    const clear = () => {
        setPrice('')
        setAmount('')
        setDiscount('')
    }
    
    return (
        <View style={styles.product}>
            <View style={styles.block}>
                <Input label="Цена, руб." value={price} onChangeText={(value) => setPrice(value)}/>
                <Input label="Вес или объём" value={amonut} onChangeText={(value) => setAmount(value)}/>
                <Input label="Скидка, %" value={discount} onChangeText={(value) => setDiscount(value)}/>
            </View>
            <View style={styles.block}>
                <Result label="Цена со скидкой" value={finalDiacount}/>
                <Result label="Цена за единицу" value={pricePerUnit}/>
                {(price || discount || amonut) && <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                    <TouchableOpacity onPress={clear}>
                        <View style={{flexDirection: "row", alignItems: 'center'}}>
                            <Ionicons name="close" size={24} color="gray"/>
                            <Text style={{color: '#888'}}>Очистить</Text>
                        </View>
                    </TouchableOpacity>
                </View>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        gap: 10,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBlockColor: '#f44336'
    },
    block: {
        width: '48%',
        gap: 5,
        justifyContent: 'space-between',
    },
});
  