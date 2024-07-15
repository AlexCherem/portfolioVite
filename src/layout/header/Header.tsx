import React from 'react';
import {Container} from "@/components/Container";
import {FlexContainer} from "@/components/FlexContainer";
import {MobileMenuHeader} from "./menuMobileHeader/MenuMobileHeader";
import {S} from './Header_Styles'
import {DesktopMenu,} from "./dekstopMenu/DesktopMenu";
import {ToggleThemeBtn} from "@/components/toggle-theme-btn";

// const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
type Props = {
    toggleTheme: ()=> void
}
const items = ['Home', "Tech Stack", "Projects",  "Contact",]
export const Header = ({toggleTheme}: Props) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;


    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexContainer justify={"space-between"} along={"center"} >
                    <ToggleThemeBtn toggleTheme={toggleTheme} />
                    {width < breakpoint ? <MobileMenuHeader menuItems={items}/>
                                        : <DesktopMenu menuItems={items}/>}
                </FlexContainer>
            </Container>
        </S.Header>
    );
};




