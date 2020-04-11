import React from 'react'
import s from './Profile.module.css'
import Contact from './profile'
import { createField, Input, Textarea } from '../../Commons/MainLoader/FormsControl/forms-control'
import { reduxForm } from 'redux-form'

const ProfileInfoEdit = ({handleSubmit, profile,error}) => {
    return (
        <form onSubmit={handleSubmit}>
             { error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div className={s.contactsBox}>
                <div>
                    <button>Save</button>
                </div>
                <div>
                    <span>
                        UserID: {createField('', 'userId', [], Input)}
                    </span>
                </div>

                
                <div>
                    <span>
                        Name: {createField('Enter your name', 'fullName', [], Input)}
                    </span>
                </div>
                <div>
                    <span>
                        Job Status: {createField('','lookingForAJob', [], Input, {type: 'checkbox'})}
                    </span>
                    <span>
                        My Skills: {createField('Enter your skills', 'lookingForAJobDescription', [], Textarea)}
                    </span>
                </div>
                <div>
                    <span>
                        About Me: {createField('Enter about yourself','aboutMe', [], Textarea)}
                    </span>
                </div>

                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                         return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                                </div>
                            })}
                </div>
            </div>
      </form>
    )   
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'} )(ProfileInfoEdit)

export default ProfileDataFormReduxForm;
