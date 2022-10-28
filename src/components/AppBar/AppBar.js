import { useContext } from 'react';
import UserMenu from '../UserMenu/UserMenu';
import authContext from '../../contexts/auth/context.js';
import styles from './Appbar.module.css';

export default function AppBar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);

  return (
    <header className={styles.header}>
      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Войти
        </button>
      )}
    </header>
  );
}
