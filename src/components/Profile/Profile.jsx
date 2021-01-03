import { useEffect, useState } from 'react';
import './Profile.css';

function Profile({match}) {
  const api = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';

  const [profiles,setProfiles] = useState([]);
  const [profile, setProfile] = useState({})

  useEffect(()=>{
      let p = window.localStorage.getItem('profiles');
      if(!p)
        fetchStudents();
      setProfiles(JSON.parse(p));
  },[]);

  useEffect( ()=>{
    resetProfile();
  },[profiles])

  const resetProfile = ()=>{
    if(profiles && profiles.length)
    profiles.forEach((p)=>{
      if(p.id == match.params.id){
        setProfile(p);
      }
    })
  }

  const fetchStudents = async () => {
    const data = await fetch( api );
    const res = await data.json();
    if(typeof window){
        window.localStorage.setItem('profiles',JSON.stringify(res))
    }
    setProfiles(res);
    resetProfile();
}

  return (
    <div calssName='profile'>
      <div className="main grid">
        <img src={profile.Image} alt="photo" />
        <div className="details grid">
          <b>{profile.name}</b>
          <div className="light">{profile.id}</div>
        </div>
      </div>
      <div className="desc grid">
          <button className="btn">Shortlist</button>
          <button className="btn">Reject</button>
      </div>
    </div>
  );
}

export default Profile;
