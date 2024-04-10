import { FC } from 'react';
import './MyInput.css';
export interface MyInputProps {
    color: string;
    big?: boolean;
    placeholder?: string;
    label: string;
}
declare const MyInput: FC<MyInputProps>;
export default MyInput;
