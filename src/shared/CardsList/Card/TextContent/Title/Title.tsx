import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';

interface Props {
    title: string;
  }

const Title = ({ title }: Props) => {
    return (
    <div>
      <h2 className={styles.title}>
      <Link to="/posts/1" className={styles.postLink}>
        Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель организационной деятельности
      </Link>   
    </h2>
    </div>
  )
}

export default Title
