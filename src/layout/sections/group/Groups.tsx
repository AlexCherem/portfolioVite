import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionParagraph} from "../../../components/SectionParagraph";
import {Group} from "./Group";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {S} from "./Group_Styled"

const groupData = [
    {
        title:'Junior Web Developer',
        text : 'Dr. Rajkumar’s Learning App',
        geo:"Bengaluru",
        data:"Sep 2021 - Dec 2021",
        singIn:"Full Time"
    },
    {
        title:'Web Development Intern',
        text : 'IonPixelz Web Solutions',
        geo:"Bengaluru",
        data:"Sep 2021 - Dec 2021",
        singIn:"Internship"
    },
    {
        title:'SEO / SEM Specialist',
        text : 'HAAPS',
        geo:"Bengaluru",
        data:"Sep 2021 - Dec 2021",
        singIn:"Internship"
    },



]

export const Groups: React.FC = () => {
    return (
        <S.Groups id={"about"}>
            <Container>
                    <FlexContainer justify={"flex-start"} direction={"column"}>
                        <S.TitleGroup>
                            <SectionTitle fontSize={"42px"} textAling={'justify'}>About Me</SectionTitle>
                        </S.TitleGroup>
                        <S.SectionParagraph>
                            <SectionParagraph textAling={"left"} fontSize={"18px"}>The Generator App is an online tool that helps you to export ready-made templates ready to
                                work as your future website. It helps you to combine slides, panels and other components and export it
                                as a set of static files: HTML/CSS/JS.</SectionParagraph>
                        </S.SectionParagraph>
                        <S.Title1Group>
                            <SectionTitle fontSize={"48px"} textAling={'justify'}>Work Experience</SectionTitle>
                        </S.Title1Group>
                        {groupData.map((g, index)=>{
                            return <Group title={g.title} key={index}
                                          text={g.text}
                                          geo={g.geo}
                                          data={g.data}
                                          singIn={g.singIn}
                            />
                        })}
                        <S.Title1Group>
                            <SectionTitle fontSize={"48px"} textAling={'justify'}>Education</SectionTitle>
                        </S.Title1Group>
                        <Group title={'Bachelor in Electronics & Communication'}
                               text={'Bangalore Instutute of Technology'}
                               data={"Aug 2015 - Dec 2020"}
                               singIn={"Full Time"}
                               geo={"Bengaluru"}
                        />
                    </FlexContainer>
            </Container>
        </S.Groups>

    );
};



