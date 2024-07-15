import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from './Group_Styled'


type DescriptionStyledProps = {
    title?: string
    text?: string
    data?: string
    geo?: string
    singIn?: string
}


export const Group = (props: DescriptionStyledProps) => {
    return (
        <S.Description>
            <S.WrapperContainer>
                <S.Title>
                    <S.DescriptionBox><p>{props.title}</p></S.DescriptionBox>
                    <S.Button>{props.singIn}</S.Button>
                </S.Title>
                <S.Box>
                    <S.DivBox>
                        <div>
                            <Icon iconId="officeBuilding" width='16px' height="12px" viewBox="0 0 16 12"/>
                            <span>{props.text}</span>
                        </div>
                        <div>
                            <Icon iconId="location" width='16px' height="12px" viewBox="0 0 16 12"/>
                            <span>{props.geo}</span>
                        </div>
                    </S.DivBox>
                    <S.Span>
                        <Icon iconId="calendar" width='16px' height="12px" viewBox="0 0 16 12"/>
                        <span><data>{props.data}</data></span>
                    </S.Span>
                </S.Box>
            </S.WrapperContainer>
        </S.Description>
    );
}

