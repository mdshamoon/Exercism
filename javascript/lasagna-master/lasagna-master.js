/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determines the cooking status that should be shown to the user
 * for the given input value.
 *
 * @param {number|undefined} timer
 * @returns {string} cooking status
 */

export function cookingStatus(timer) {
    if (timer) {
        return "Not done, please wait.";
    } else if (timer === 0) {
        return "Lasagna is done.";
    }
    return "You forgot to set the timer.";
}

export function preparationTime(layers, avgPrepTime = 2) {
    return layers.length * avgPrepTime;
}

export function quantities(layers) {
    const sauceAndNoodles = {
        noodles: 0,
        sauce: 0,
    };
    layers.forEach((layer) => {
        if (layer === "noodles") {
            sauceAndNoodles.noodles += 50;
        } else if (layer === "sauce") {
            sauceAndNoodles.sauce += 0.2;
        }
    });

    return sauceAndNoodles;
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, scaleFactor) {
    const scaleForOnePortion = scaleFactor / 2;
    const recipeCopy = { ...recipe };
    for (const layer in recipeCopy) {
        recipeCopy[layer] = recipeCopy[layer] * scaleForOnePortion;
    }
    return recipeCopy;
}
