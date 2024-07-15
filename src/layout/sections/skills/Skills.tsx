import React from 'react';
import styled from "styled-components";

import {SectionTitle} from "src/components/SectionTitle";
import {SectionParagraph} from "src/components/SectionParagraph";
import {StyledSkill} from "./StyledSkill";
import {Container} from "src/components/Container";


const skillData = [
    {
        iconId:"html" ,
        title: "html"
    },
    {
        iconId:"css" ,
        title: "css"
    },
    {
        iconId:"javaScript" ,
        title: "javaScript"
    },
    {
        iconId:"react" ,
        title: "react"
    },

    {
        iconId:"sass" ,
        title: "sass"
    },
    {
        iconId:"git" ,
        title: "git"
    },
    {
        iconId:"github" ,
        title: "github"
    },
    {
        iconId:"redux" ,
        title: "redux"
    },
    {
        iconId:"styled" ,
        title: "styled"
    },
    {
        iconId:"typeScript" ,
        title: "typeScript"
    },
]

export const Skills: React.FC = () => {
    return (
        <Skill id={"Tech Stack"}>
            <Container>
                <SectionTitle fontSize={"48px"} marginBot={"50px"} textAling={"center"}>My Tech Stack</SectionTitle>
                <SectionParagraph marginBottom={"124px"} textAling={"center"} fontSize={"32px"}>
                </SectionParagraph>
                <StyledGrid>
                    {skillData.map((s, index)=>{
                       return <StyledSkill iconId={s.iconId} title={s.title}
                        key={index}
                        />
                    })}
                </StyledGrid>

            </Container>
        </Skill>
    );
};

const Skill = styled.section`
    margin: 0 auto;
    position: relative;
    background-color: ${props => props.theme.colors.bGround}
`


const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 100px;
    margin: 0 auto;
    max-width: 1230px;
    width: 100%;    
`


