import React from 'react';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import styles from './card.css';
import { Controls } from './Controls';

interface Props {
  title: string;
}
export function Card({ title }: Props) {
  return (
    <li className={styles.card}>
      <TextContent title={title}/>
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}
