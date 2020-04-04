import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Validation/validation';
import { Textarea } from '../../Commons/MainLoader/FormsControl/forms-control';

const MaxLength10 = maxLengthCreator(10);

const FormMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'NewMessage'} validate={[required, MaxLength10]}/>
            <button>Send</button>
        </form>
    )
} 

export const AddMessageReduxForm = reduxForm( {form: 'formMessage'} )(FormMessage)
