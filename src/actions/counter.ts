const increment = () => {
    return {
        type: calculatorActionNames.INCREMENT
    }
}

const decrement = () => {
    return {
        type: calculatorActionNames.DECREMENT
    }
}

const reset = () => {
    return {
        type: calculatorActionNames.RESET
    }
}

const calculatorActionNames = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
}

export const counter = {
    increment,
    decrement,
    reset
}