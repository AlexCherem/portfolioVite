import React from 'react';
import {S} from "../Header_Styles";
import {Menu} from "src/components/menu/Menu";

type menuItemsProps = {
    menuItems: string[]
}
export const DesktopMenu: React.FC<menuItemsProps> = ({menuItems}: menuItemsProps) => {
    return (
            <S.DesktopMenu>
                <Menu menuItems={menuItems}/>
            </S.DesktopMenu>
    );
};

