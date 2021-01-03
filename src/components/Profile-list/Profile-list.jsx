import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './profile-list.css';

function ProfileList() {
    const api = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetchStudents();
    },[]);

    const fetchStudents = async () => {
        const data = await fetch( api );
        const res = await data.json();
        if(typeof window){
            window.localStorage.setItem('profiles',JSON.stringify(res))
        }
        setStudents(res)
    }

  return (
    <section className="grid">
       <div className="grid profile-list">
           {
               students.map( profile => <Card profile = {profile} key={profile.id} /> )
            }
       </div>
    </section>
  );
}

export default ProfileList;
