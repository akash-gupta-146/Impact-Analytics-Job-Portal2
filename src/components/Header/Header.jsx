import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
      <>
        <div class="top grid">
                <span className='contact'>
                    <b>Contact:</b> <span>+91 9283 999 999</span>
                </span>
                {/* // eslint-disable-next-line */}
                <a href="#">
                    Login / Register
                </a>
        </div>
        <header className="grid header space-between">
            <img width="60px" src="https://media-fastly.hackerearth.com/media/companies/00d65d3-IA_Logo.jpeg" alt="logo"/>
            <div class="links grid">
                <Link to='/'>Home</Link>
            </div>
            <button class="btn">
                Post a Job
            </button>
        </header>
      </>

  );
}

export default Header;
