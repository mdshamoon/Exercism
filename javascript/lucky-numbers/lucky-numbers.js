// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    const number1 = array1.reduce(
        (previous, current) => String(previous) + String(current),
        ""
    );
    const number2 = array2.reduce(
        (previous, current) => String(previous) + String(current),
        ""
    );

    return Number(number1) + Number(number2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    const stringNumber = String(value);

    for (let i = 0; i < stringNumber.length / 2; i++) {
        if (stringNumber[i] !== stringNumber[stringNumber.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    if (input) {
        if (Number.isNaN(Number(input)) || Number(input) === 0) {
            return "Must be a number besides 0";
        } else {
            return "";
        }
    } else {
        return "Required field";
    }
}
