import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './search.css'

function SearchProfile() {
    const [profiles,setProfiles] = useState([]);
    const [results,setResults] = useState([]);
    const [searchString, setSearchString] = useState('');
    useEffect(()=>{
        let p = JSON.parse(window.localStorage.getItem('profiles'));
        setProfiles(p);
    },[]);

    const clearResults = ()=>{
        setResults([]);
    }


    useEffect(()=>{
        let string = searchString.toLocaleLowerCase();
        let newResults = profiles.filter( profile => {
            return (profile.name.toLocaleLowerCase().includes(string))
        })
        setResults(newResults);
        console.log(results);
    },[searchString]);

    const updateResults = (e) => {
        
    }
    
  return (
    <section className="search">
      <input placeholder="Search By Name" className="input" type="search" onChange={(e) => setSearchString(e.target.value)}/>
         {
             searchString && results.length > 0 && <ul className='results'>
             {
                results.map( result => <li key={result.id}>
                         <Link to={`/profile/${result.id}`} target="_blank">{ result.name }</Link>
                    </li>
                    )
             } 
          </ul>
         } 
    </section>
  );
}

export default SearchProfile;
