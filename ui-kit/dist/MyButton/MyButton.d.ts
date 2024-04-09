import { FC, PropsWithChildren } from 'react';
import './MyButton.css';
export interface MyButtonProps {
    color: string;
    big?: boolean;
}
declare const MyButton: FC<PropsWithChildren<MyButtonProps>>;
export default MyButton;
