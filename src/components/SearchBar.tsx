import React from 'react'
import { IoSearch } from 'react-icons/io5'
import {cn} from '@/libs/utils';

type SearchBarProps = {
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string | number | readonly string[] | undefined;
};

export default function SearchBar({
    className,
    value,
    onChange
}: SearchBarProps){
    return (
        <div className={cn('w-full relative flex items-center', className)}>
            <IoSearch className='absolute left-5 text-gray-500' />
            <input 
            value={value}
            placeholder='Pesquisar por Imagem...'
            onChange={onChange}
            className='w-full h-12 translate-all rounded-full pl-12 outline-blue-300 border bg-gray-300 dark:bg-gray-800'
            type="text" />
        </div>
    );
}