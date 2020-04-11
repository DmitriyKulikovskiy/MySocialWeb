import React from 'react'
import s from './forms-control.module.css'
import { Field } from 'redux-form';

export const Textarea = ({input, meta, ...props}) => {

    const ValidError = meta.touched  && meta.error;
    return (
        <div className={ (ValidError ? s.formControl : " ")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {ValidError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}


export const Input = ({input, meta, ...props}) => {
    const ValidError = meta.touched  && meta.error;

    return (
        <div className={ (ValidError ? s.formControl : " ")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {ValidError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)
