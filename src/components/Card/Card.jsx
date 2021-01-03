import { Link } from 'react-router-dom';
import './card.css';

function Card({profile}) {
  return (
    <article className="card">
        <div className="profile-inner grid">
            <img src={profile.Image} alt={profile.name} />
            <b>{profile.name}</b>
        </div>
        <div className="profile-overview">
            <div className=""></div>
            <Link to={`/profile/${profile.id}`}><button>View Profile</button></Link>
        </div>
                   {/* <Link to={`/profile/${student.id}`}>{student.name}</Link>  */}
    </article>
  );
}

export default Card;
