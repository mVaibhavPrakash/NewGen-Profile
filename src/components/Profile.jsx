import { useState } from 'react';
import Navbar from '../../../LandingpageClient/src/components/Navbar';
import '../css/profile.css'
import img1 from '../../../../../public/img/wave.png'
import EditProfile from '../js/profile';

const Profile= ({footerRef}) => {
    const [Status,setStatus] = useState('Edit');
    const [Name,setName] = useState('')
    const [UserName,setUserName] = useState('')
    const [DOB,setDOB] = useState('')
    const [Bio,setBio] = useState('')
    const [About,setAbout] = useState('')
    return (
        <>  
        <Navbar/>
        <div className='auth'>
		    <img className="auth-wave" src={img1}/>
        </div>
        <div className='profile'>
            <div id='h2div'>
                <h2>User Profile</h2>
                <button onClick={e =>{e.preventDefault();EditProfile({Name,UserName,DOB,Bio,About},setStatus)}} disabled={Status === 'Edit' ? false : true}>{Status}</button>
            </div>
            <div id='profile-content'>
                <div id='profile-d'>
                    <p>You can change your profile here, click on Edit option to edit</p>
                </div>
                <div className='profile-content-div'>
                    <h3>Name</h3>
                    <p style={{wordBreak:'break-word'}}>Your name appears on your Profile page, as your byline, and in your responses. It is a required field. </p>
                    <textarea placeholder='Ex:- Aman' id='profile-textarea' name='fullname' value={Name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className='profile-content-div'>
                    <h3>Username</h3>
                    <p style={{wordBreak:'break-word'}}>Your username appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
                    <textarea placeholder='Ex:- striver' id='profile-textarea' name='username' value={UserName} onChange={e =>setUserName(e.target.value)}/>
                </div>
                <div className="profile-content-div">
                    <h3>Short Bio</h3>
                    <p style={{wordBreak:'break-word'}}>Your short bio appears on your Profile and next to your stories. Max 160 characters. </p>
                    <textarea placeholder='Enter bio details' id='profile-textarea-seo-desc' name='bio' value={Bio} onChange={e => setBio(e.target.value)}/>
                </div>
                <div className="profile-content-div">
                    <h3>D.O.B</h3>
                    <p style={{wordBreak:'break-word'}}>Date of Birth</p>
                    <p><input type='date' id='profile-input' name='dob' value={DOB} onChange={e => setDOB(e.target.value)}/></p>
                </div>
                <div className="profile-content-div">
                    <h3>About you</h3>
                    <p style={{wordBreak:'break-word'}}>This page should tell your readers more about you and explain the benefits of reading your work.</p>
                    <textarea placeholder='Enter details here' id='profile-textarea' name='about' value={About} onChange={e => setAbout(e.target.value)}/>
                </div>
                <div className="profile-content-div">
                    <h3>Tech Stack</h3>
                    <p style={{wordBreak:'break-word'}}>This will tell your readers about your area of expertise. Enter comma(,)seperated values</p>
                    <textarea placeholder='Enter tech stack, comma (,) seperated' id='profile-textarea' name='about' value={About} onChange={e => setAbout(e.target.value)}/>
                </div>
                <div className="profile-content-div">
                    <h3>Social</h3>
                    <p style={{wordBreak:'break-word'}}>Twitter Profile</p>
                    <textarea placeholder='https://twitter.com/' id='profile-textarea' name='about' value={About} onChange={e => setAbout(e.target.value)}/>
                    <p style={{wordBreak:'break-word'}}>LinkedIn Profile</p>
                    <textarea placeholder='https://linkedin.com/' id='profile-textarea' name='about' value={About} onChange={e => setAbout(e.target.value)}/>
                    <p style={{wordBreak:'break-word'}}>Stackoverflow Profile</p>
                    <textarea placeholder='https://stackoverflow.com/' id='profile-textarea' name='about' value={About} onChange={e => setAbout(e.target.value)}/>
                    <p style={{wordBreak:'break-word'}}>Github Profile</p>
                    <textarea placeholder='https://github.com/' id='profile-textarea' name='about' value={About} onChange={e => setAbout(e.target.value)}/>
                    <p style={{wordBreak:'break-word'}}>Personal Website</p>
                    <textarea placeholder='https://xyz.com/' id='profile-textarea' name='about' value={About} onChange={e => setAbout(e.target.value)}/>
                    <p style={{wordBreak:'break-word'}}>Youtube Channel</p>
                    <textarea placeholder='https://youtube.com/' id='profile-textarea' name='about'  value={About} onChange={e => setAbout(e.target.value)}/>
                </div>
                <div className="profile-content-div">
                    <h3>Email Address(Not changeable)</h3>
                    <p>{}</p>
                </div>
            </div>
        </div>
        </>
    )

}

export default Profile;
