import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from './commentForm.css';

type Props = {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (event: FormEvent) => void;
    touched: boolean;
    valueError: string;
}

export function CommentForm({ value, onChange, onSubmit, touched, valueError }: Props) {
    
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <textarea 
            className={styles.input} 
            value={value} 
            onChange={onChange} 
            aria-invalid={valueError ? 'true' : undefined} />
            {touched && valueError && (<div>{valueError}</div>)}

            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    )
} 