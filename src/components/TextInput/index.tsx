import { FC, HTMLProps } from 'react';
import styles from '@/styles/components/input.module.scss';

const { labelInput, textInput } = styles;

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
}

export const TextInput: FC<TextInputProps> = ({ ...props }) => (
  <div className={labelInput}>
    <label htmlFor={props.id}>{props.label}</label>
    <input className={textInput} {...props} />
  </div>
);
