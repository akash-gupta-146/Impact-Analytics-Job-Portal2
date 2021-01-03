// import { Link } from 'react-router-dom';
import ProfileList from '../../components/Profile-list/Profile-list';
import SearchProfile from '../../components/SearchProfile/SearchProfile';
import './home.css';
import Main from './Main';

function Home() {
  return (
    <>
      <Main />
      {/* <Link to="/profile">Profile</Link> */}
      <SearchProfile />
      <ProfileList />
    </>
  );
}

export default Home;
