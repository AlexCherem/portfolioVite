import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/Projects/Projects";
import {Footer} from "./layout/footer/Footer";
import {ThemeProvider} from "styled-components";
import {useState} from "react";
import {darkTheme, lightTheme} from "@/styles";
import {Title} from "@/layout/sections/contacts/Contacts";
import {Particle} from "@/components/particals/particals";


export function App() {
    const [theme, setTheme] = useState('dark')
    const isDarkTheme = theme === 'dark'

    const toggleTheme = () => {
        setTheme(isDarkTheme ? 'light' : 'dark')
    }

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Header toggleTheme={toggleTheme}/>
            <Particle/>
            <Main/>
            <Skills/>
            <Projects/>
            <Title/>
            <Footer/>
        </ThemeProvider>
    );
}



