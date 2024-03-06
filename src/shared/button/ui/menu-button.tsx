import { Icon } from '@/shared/icon'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const MenuButton: React.FC<Props> = ({ className, ...props }) => {
    return (
        <button {...props} className={className}><Icon type={'menu'} /></button>
    )
}
