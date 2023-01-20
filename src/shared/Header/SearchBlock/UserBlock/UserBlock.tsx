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


export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  console.log(process.env.CLIENT_ID)
  return (
   <a 
    href={`https://www.reddit.com/api/v1/authorize?client_id=HTWtjH1kBxmOarlapoMQow&response_type=code&state=random_string&redirect_uri=https://react-app-ssr-production.up.railway.app/profile&duration=permanent&scope=identity read submit`}
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
