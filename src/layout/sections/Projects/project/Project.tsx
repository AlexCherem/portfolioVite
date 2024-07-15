import React from 'react';
import {Icon} from "src/components/icon/Icon";
import {S} from "../Styled_Project"

type ProjectPropsType = {
    title: string
    text: string
    span: string
    src: string
    img: string
    demo?: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.img} alt=""/>
            <S.Title>{props.title}</S.Title>
            <S.TextData>
                <S.Text>{props.text}</S.Text>
            </S.TextData>
            <S.StyledP>{props.span}</S.StyledP>
            <S.DivIcon>
                {props.demo &&
                    <S.IconsLink>
                        <Icon iconId={"linkChain"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                        <S.Link href={props.demo} target="_blank"> Demo </S.Link>
                    </S.IconsLink>}

                <S.IconsLink>
                    <Icon iconId={"github"} width={"20px"} height={"20px"} viewBox={"0 0 90 80"}/>
                    <S.Link href={props.src} target="_blank">View Code </S.Link>
                </S.IconsLink>
            </S.DivIcon>
        </S.Project>
    );
};

