import { useState } from 'react';
import {useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Navbar from '../../../LandingpageClient/src/components/Navbar';
import '../css/profile.css'
import img1 from '../../../../../public/img/wave.png'
import EditProfile from '../js/profile';
import { Reducer } from '../js/Reducer';
import { useEffect } from 'react';
import { setProfile } from '../../../../redux/slices/profileSlice';
import { setProfileError } from '../../../../redux/slices/profileSlice';
import { getProfileData } from '../js/getProfileData';

const Profile= ({footerRef}) => {
    const [Status,setStatus] = useState('Edit');
    const [state,dispatch] = Reducer()
    const User = useSelector((state) => state.auth)
	const dispatc = useDispatch()
    const navigate = useNavigate()
    useEffect(() =>{
        User.isProfileCreated ? getProfileData(dispatch,dispatc,User,setProfile,navigate,setProfileError):''
    },[])
    return (
        <>  
        <Navbar/>
        <div className='auth'>
		    <img className="auth-wave" src={img1}/>
        </div>
        <div className='profile'>
            <div id='h2div'>
                <h2>User Profile</h2>
                <button onClick={e =>{e.preventDefault();EditProfile(state,setStatus)}} disabled={Status === 'Edit' ? false : true}>{Status}</button>
            </div>
            <div id='profile-content'>
                <div id='profile-d'>
                    <p>You can change your profile here, click on Edit option to edit</p>
                </div>
                <div className='profile-content-div'>
                    <h3>Name</h3>
                    <p style={{wordBreak:'break-word'}}>Your name appears on your Profile page, as your byline, and in your responses. It is a required field. </p>
                    <textarea placeholder='Ex:- Aman' className='fname' id='profile-textarea' name='fullname' value={state.fullname} onChange={e => dispatch({type:'set fullname',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                </div>
                <div className='profile-content-div'>
                    <h3>Username</h3>
                    <p style={{wordBreak:'break-word'}}>Your username appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
                    <textarea placeholder='Ex:- striver' id='profile-textarea' className='uname' name='username' value={state.username} onChange={e =>dispatch({type:'set username',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                </div>
                <div className="profile-content-div">
                    <h3>Short Bio</h3>
                    <p style={{wordBreak:'break-word'}}>Your short bio appears on your Profile and next to your stories. Max 160 characters. </p>
                    <textarea placeholder='Enter bio details' id='profile-textarea-seo-desc' className='bio' name='bio' disabled={Status === 'Edit' ? false : true} value={state.bio} onChange={e => dispatch({type:'set bio',payload:e.target.value})}/>
                </div>
                <div className="profile-content-div">
                    <h3>D.O.B</h3>
                    <p style={{wordBreak:'break-word'}}>Date of Birth</p>
                    <p><input type='date' id='profile-input' className='dob' name='dob' value={state.dateofbirth} onChange={e => dispatch({type:'set dob',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/></p>
                </div>
                <div className="profile-content-div">
                    <h3>About you</h3>
                    <p style={{wordBreak:'break-word'}}>This page should tell your readers more about you and explain the benefits of reading your work.</p>
                    <textarea placeholder='Enter details here' id='profile-textarea' className='about' name='about' value={state.about} onChange={e => dispatch({type:'set about',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                </div>
                <div className="profile-content-div">
                    <h3>Tech Stack</h3>
                    <p style={{wordBreak:'break-word'}}>This will tell your readers about your area of expertise. Enter comma(,)seperated values</p>
                    <textarea placeholder='Enter tech stack, comma (,) seperated' id='profile-textarea' className='tech' name='tech' value={state.tech} onChange={e => dispatch({type:'set tech',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                </div>
                <div className="profile-content-div">
                    <h3>Social</h3>
                    <p style={{wordBreak:'break-word'}}>Twitter Profile</p>
                    <textarea placeholder='https://twitter.com/' id='profile-textarea' className='twitter' name='twitter' value={state.twitter} onChange={e => dispatch({type:'set s-twitter',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                    <p style={{wordBreak:'break-word'}}>LinkedIn Profile</p>
                    <textarea placeholder='https://linkedin.com/' id='profile-textarea' className='linkedin' name='linkedin' value={state.stack} onChange={e => dispatch({type:'set s-linkedin',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                    <p style={{wordBreak:'break-word'}}>Stackoverflow Profile</p>
                    <textarea placeholder='https://stackoverflow.com/' id='profile-textarea' className='stack' name='stack' value={state.stack} onChange={e => dispatch({type:'set s-stack',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                    <p style={{wordBreak:'break-word'}}>Github Profile</p>
                    <textarea placeholder='https://github.com/' id='profile-textarea' name='github' className='github' value={state.github} onChange={e => dispatch({type:'set s-github',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                    <p style={{wordBreak:'break-word'}}>Personal Website</p>
                    <textarea placeholder='https://xyz.com/' id='profile-textarea' name='personal' className='personal' value={state.personal} onChange={e => dispatch({type:'set s-personal',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                    <p style={{wordBreak:'break-word'}}>Youtube Channel</p>
                    <textarea placeholder='https://youtube.com/' id='profile-textarea' name='youtube' className='youtube' value={state.youtube} onChange={e => dispatch({type:'set s-youtube',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                </div>
                <div className="profile-content-div">
                    <h3>Email Address</h3>
                    <p style={{wordBreak:'break-word'}}>Be extra consious before changing email address</p>
                    <textarea placeholder='Email' id='profile-textarea' name='email' className='email' value={state.email} onChange={e => dispatch({type:'set email',payload:e.target.value})} disabled={Status === 'Edit' ? false : true}/>
                </div>
            </div>
        </div>
        </>
    )

}

export default Profile;
