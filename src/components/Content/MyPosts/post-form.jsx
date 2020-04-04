import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../Validation/validation';
import { Textarea } from '../../Commons/MainLoader/FormsControl/forms-control';


const MaxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> 
            <Field component={Textarea} name='NewPostText' validate={[required, MaxLength10]} />
            <button>Send</button>
        </form>
        

    )
}

export const PostFormReduxForm = reduxForm( {form: 'addPostForm'} )(PostForm)