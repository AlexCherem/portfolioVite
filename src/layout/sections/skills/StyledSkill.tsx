import React from 'react';
import {Icon} from "src/components/icon/Icon";
import styled from "styled-components";

type StyledSkillProps = {
    iconId?: string
    width?: string
    height?: string
    viewBox?: string
    title?: string
}
export const StyledSkill = (props: StyledSkillProps) => {
    return (
        <StyledIcon>
                <Icon iconId={props.iconId}
                      width={props.width}
                      height={props.height}
                      viewBox={props.viewBox}
                />
            <SkillTitle>{props.title}</SkillTitle>
        </StyledIcon>
    );
};

const SkillTitle = styled.h3`
    font-size: 15px;
    color: ${props => props.theme.colors.textSecondary};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
`;

const StyledIcon=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:hover ${SkillTitle} {
        opacity: 1;
    }
`
