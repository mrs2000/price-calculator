export interface CalculationResult {
    perUnitPrice: number
    finalDiscount: number
}

const getFloat = (value: string) => parseFloat(value.replace(',', '.'))

export const calculation = (price: string, discount: string, amount: string): CalculationResult => {

    const result: CalculationResult = {
        finalDiscount: 0,
        perUnitPrice: 0
    }

    const discountF = getFloat(discount)
    const amountF = getFloat(amount)
    let priceF = getFloat(price)

    if (priceF) {
        if (discountF) {
            priceF = priceF - (priceF * discountF / 100);
            result.finalDiscount = priceF
        }
        if (amountF) {
            result.perUnitPrice = priceF / amountF;
        }
    }

    return result
}

export interface FormattedResult {
    value: string
    unit: string
}

export const formatResult = (value: number): FormattedResult => {
    let unit: string

    if (value < 1) {
        value *= 100
        unit = plural(value, 'копейка', 'копейки', 'копеек')
    } else {
        unit = plural(value, 'рубль', 'рубля', 'рублей')
    }

    const digits = value % 1 == 0 ? 0 : 2

    return {
        value: value.toFixed(digits).toString().replace('.', ','),
        unit
    }
}

const plural = (value: number, form1: string, form2: string, form5: string): string => {
    value = Math.abs(value) % 100;
    const n1 = value % 10;
    if (value > 10 && value < 20) {
        return form5;
    }
    if (n1 > 1 && n1 < 5) {
        return form2;
    }
    if (n1 == 1) {
        return form1;
    }
    return form5;
}