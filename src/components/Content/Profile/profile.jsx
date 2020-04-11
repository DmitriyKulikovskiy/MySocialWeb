import React from 'react';
import s from './Profile.module.css';
import MainLoader from '../../Commons/MainLoader/MainLoader';
import ProfileStatusHook from './profile-status/porfile-status-with-hooks';
import photoAbsence from './../../../images/user.png'
import { useState } from 'react';
import ProfileInfoEdit from './profileDataForm';




function Profile({ profile, savePhoto, isOwner, status, updateStatus, saveProfile}) {

  //hook edit mode
  const [editMode,setEditMode ] = useState(false);
  
  if (!profile) {
    return <MainLoader />
  }

  const SelectMainPhoto = (e) => {
    if(e.target.files.length) {
        savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (dataForm) => {
    saveProfile(dataForm).then(
      () => {
        setEditMode(false);
      }
    )
    
   
  }

  return (
    <div className={s.container}>
      <img src={profile.photos.large || photoAbsence} />
      {isOwner && <input type={'file'} onChange={SelectMainPhoto}/>}

      <ProfileStatusHook status={status} updateStatus={updateStatus}/>

      {editMode ? <ProfileInfoEdit initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileInfo  useEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
    </div>
  );
}


const ProfileInfo = ({profile, isOwner,useEditMode}) => {
  return <div className={s.contactsBox}>
    {isOwner && <div><button onClick={useEditMode}>Edit</button></div>}
      <div>ID: 
        <span>{profile.userId}</span>
      </div>

      <div>Name: 
        <span>{profile.fullName}</span>
      </div>
  
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>

      {profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>}

      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
        
      <div>
        <div className={s.contacts}>
          Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />})}
        </div>
      </div>

    </div>
}


export const Contact = ({contactTitle, contactValue}) => {
  return  <div> 
            <span >
              {contactTitle}
            </span>
            :{contactValue}
          </div>
}

export default Profile;




