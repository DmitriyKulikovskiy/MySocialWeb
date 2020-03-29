import React from 'react';
import s from './Profile.module.css';
import MainLoader from '../../Commons/MainLoader/MainLoader';

function Profile(props) {
  
  if (!props.profile) {
    return <MainLoader />
  }

  return (
    <div className={s.container}>
      <img src={props.profile.photos.large} />
      <div>{props.profile.fullName}</div>

      <div>{props.profile.aboutMe}</div>

      <div className={s.contactsBox} > 
        <div className={s.item}>Social Networks:</div>
        <div className={s.network}> <span className={s.nameNetwork}>Facebook: </span>{props.profile.contacts.facebook}</div>
        <div className={s.network}> <span className={s.nameNetwork}>Website: </span>{props.profile.contacts.website}</div>
        <div className={s.network}> <span className={s.nameNetwork}>VKontakte: </span>{props.profile.contacts.vk}</div>
        <div className={s.network}> <span className={s.nameNetwork}>Twitter: </span>{props.profile.contacts.twitter}</div>
        <div className={s.network}> <span className={s.nameNetwork}>Instagram: </span>{props.profile.contacts.instagram}</div>
        <div className={s.network}> <span className={s.nameNetwork}>YouTube: </span>{props.profile.contacts.youtube}</div>
        <div className={s.network}> <span className={s.nameNetwork}>GitHub: </span>{props.profile.contacts.github}</div>
        <div className={s.network}> <span className={s.nameNetwork}>MainLink: </span>{props.profile.contacts.mainlink}</div>
      </div>

      <div>{props.profile.lookingForAJob}</div>

      <div>{props.profile.lookingForAJobDescription}</div>
      
    </div>
  );
}

export default Profile;



