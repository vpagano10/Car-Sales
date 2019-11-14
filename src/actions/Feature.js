// variables created to help with debugging. This prevents the app from breaking without giving any direction as to why because of a possible spelling error of the strings.
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const TOTAL = 'TOTAL';

// each action below takes the type to determine what the action is doing and a payload telling it what is to be changed, in each case here the item/feature being added.
export function addFeature(item) {
    return {
        type: ADD_FEATURE,
        payload: item
    };
};

export function removeFeature(item) {
    return {
        type: REMOVE_FEATURE,
        payload: item
    };
};

export function total(item) {
    return {
        type: TOTAL,
        payload: item
    };
};