import React from 'react';
import {SectionTitle} from "@/components/SectionTitle";
import {FlexContainer} from "@/components/FlexContainer";
import {Project} from "./project/Project";
import projImg2 from "@/assets/images/todoList (1).png"
import Learning from "@/assets/images/Learning (1).png"
import {Container} from "@/components/Container"
import styled from "styled-components";


const projectData = [
    {
        img: Learning,
        title: "Learning platform",
        text: "An application that allows you to create and study question and answer cards. It also allows you to share your sets of cards with other users.",
        span: "Tech stack: TypeScript, React, Radix, RTK Query, Storybook, React Hook Form",
        src: 'https://github.com/AlexCherem/educational-ards/tree/main',
        demo: 'https://educational-cards.vercel.app/'
    },
    {
        img: projImg2,
        title: "Task tracker",
        text: "An application for task management. Allows you to add, edit, mark tasks, as well as sort and prioritize them.",
        span: "Tech stack : TypeScript, REACT, RTK, Formik",
        src: 'https://github.com/AlexCherem/todoList/tree/main',
    },
]

export const Projects: React.FC = () => {
    return (
        <StyledProjects id={"Projects"}>
            <Container>
                <SectionTitle fontSize={"48px"} marginBot={"50px"} textAling={"center"} color={'#A7A7A7'}>Projects</SectionTitle>
                <FlexContainer justify={"space-around"} wrap={"wrap"}>
                    {projectData.map((p, index) => {
                        return <Project key={index}
                                        src={p.src}
                                        title={p.title}
                                        text={p.text}
                                        span={p.span}
                                        img={p.img}
                                        demo={p.demo}
                        />
                    })}
                </FlexContainer>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    position: relative;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.bGround};
`
