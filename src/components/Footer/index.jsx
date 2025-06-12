import { Link, useLocation, useNavigate } from 'react-router';

import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './Footer.module.css';

const Footer = ({ link }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === '/main';

  return (
    <>
      <div className={styles.footer}>
        <Link to={isMainPage ? '/' : '/main'} className={`${styles.button_footer} ${isMainPage ? styles.button_footer_main : ''}`}>
          <HomeIcon style={{ width: '50px', height: '50px' }} />
        </Link>
        {!isMainPage && (
          <Link onClick={() => navigate(-1)} className={`${styles.button_footer} ${isMainPage ? styles.button_footer_main : ''}`}>
            <ArrowBackIcon style={{ width: '50px', height: '50px' }} />
          </Link>
        )}
      </div>
    </>
  );
};

export default Footer;
