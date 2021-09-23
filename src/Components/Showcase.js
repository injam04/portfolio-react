import { ImFacebook2 } from 'react-icons/im';
import { ImLinkedin } from 'react-icons/im';
import { GoMarkGithub } from 'react-icons/go';
import { GrInstagram } from 'react-icons/gr';
import Avatar from '../assets/img/avatar.jpeg';
import LightIcon from '../assets/img/light.png';
import DarkIcon from '../assets/img/dark.png';
import { useTheme } from '../context/ThemeContext';

const Showcase = () => {
  const { IsLight, setIsLight } = useTheme();

  return (
    <section className='showcase'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 text-center'>
            <div className='image'>
              <img src={Avatar} alt='' />
            </div>
            <h1 className='name'>
              <span>INJAMAMUL HAQUE</span>
            </h1>
            <p className='description'>
              <span>Web Designer & Developer</span>
            </p>
            <ul className='icons'>
              <li>
                <a
                  href='https://www.facebook.com/meinjam/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <ImFacebook2 />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/meinjam/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <ImLinkedin />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/meinjam'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <GoMarkGithub />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/meinjam/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <GrInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src={IsLight ? DarkIcon : LightIcon}
        alt=''
        className='theme-mode'
        onClick={() => setIsLight(!IsLight)}
      />
    </section>
  );
};

export default Showcase;
