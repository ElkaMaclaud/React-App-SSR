import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { RootState, updateComment } from "../../store/reducer";
import { CommentForm } from "../CommentForm";

export function CommentFormContainer() {
    // const store = useStore<RootState>();
    // const value = store.getState().commentText
    const [touched, setTouched] = useState(false);
    const [valueError, setValueError] = useState('');

    const value = useSelector<RootState, string>(state => state.commentText);
    const dispatch = useDispatch();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setTouched(true);
        setValueError(validateValue());
        
        const isFormValid = !validateValue();
        if (!isFormValid) return;
        
        console.log(value);
        alert('Форма отправлена!');
    }

    function validateValue() {
        if (value.length <= 3) return 'ВВедите больше 3-х символов';
        return '';
    }
     
    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value));
    }

    return (
        <CommentForm 
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            touched={touched}
            valueError={valueError}
        />
    )
} 
