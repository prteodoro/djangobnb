'use client'

import { on } from "events";

interface MenuLinkProps {
    label: string;
    onClick: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({
    label,
    onClick
}) => {    
    return(
        <div 
            onClick={onClick}
            className="px-5 py-4 cursor-pointer hover:bg-gray-200 transition rounded-xl"
        >
            {label}
        </div>
    )
}

export default MenuLink;