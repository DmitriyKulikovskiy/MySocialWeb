import React from 'react'

export const required = value => {
    if(value) return undefined  // If the function has not error -> return this value 'undefined'
    return 'This area is not field' //If the function has an error ->return this value 'string'
}


export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols.`;
    return undefined;
}