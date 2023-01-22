import React from 'react';
import { Break } from '../../../Break';
import { IconAnon } from '../../../Icons';
import { EColors, Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
  loading?: boolean;
}

const IS_DEV = process.env.NODE_ENV !== 'production';
const REDIRECT_URI = IS_DEV ? 'http://localhost:3000/' : 'https://react-app-ssr-production.up.railway.app/';


export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  console.log(process.env.NODE_ENV, process.env.CLIENT_ID)
  return (
   <a 
    href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${REDIRECT_URI}profile&duration=permanent&scope=identity read submit`}
    className={styles.userBox}
    >
    <div className={styles.avatarBox}>
      {avatarSrc
      ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
      : <IconAnon />
    }
    </div>

    <div className={styles.username}>
      <Break size={12} />
      {loading ? (
        <Text size={20} color={EColors.gray99}>Загрузка...</Text>
      ) : (
        <Text size={20} color={username ? EColors.black : EColors.gray99}>{username || 'Аноним'}</Text>
      )}
    </div>
   </a>
  );
}
