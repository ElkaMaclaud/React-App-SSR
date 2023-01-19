import React, { useState } from 'react';
import styles from './textcontent.css';
import Title from './Title/Title';


interface Props {
  title: string;
}
export function TextContent({ title }: Props) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img 
            className={styles.avatar} 
            src="https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=800x600&vertical=top"
            alt="avatar" 
          />
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
        4 часа назад</span>
      </div>

      <Title title={title} />
    </div>
  );  
}

// onClick={ () => {console.log('clicked!!!')} }