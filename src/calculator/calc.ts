export const divide = (dividend: number, divisor: number) => {
    if(divisor === 0) {
        throw new Error("Cannot divide by zero");
    }
    return dividend / divisor;
}