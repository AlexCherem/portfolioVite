import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";
import {theme} from "src/styles/Theme";


type menuItemsProps = {
    menuItems: string[]
    menuIsOpen?: boolean
}

export const Menu: React.FC<menuItemsProps> = ({menuItems, menuIsOpen}: menuItemsProps) => {
    const [isOpen, setIsOpen] = useState(menuIsOpen)
    const handleLinkClick = () => {
        setIsOpen(isOpen);
    };

    console.log(isOpen)
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, index) => {
                    console.log(item)
                    return <li>
                        <NavLink
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={item === "Contact" ? 30 : 20}
                            to={item}
                            onClick={handleLinkClick}
                        >
                            {item}
                        </NavLink>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

    li {
        list-style-type: none;
        float: left;
        margin: 0 10px;
        font-size: 20px;
    }
`


const NavLink = styled(Link)`
    color: ${props => props.theme.colors.textSecondary};;
    font-size: 20px;
    transition: .5s ease-in-out;

    &:hover, &.active {
    cursor: pointer;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(10deg, ${theme.colors.gradiets.color1},${theme.colors.gradiets.color2} );
    transition: .2s ease-in-out;
  }
`
