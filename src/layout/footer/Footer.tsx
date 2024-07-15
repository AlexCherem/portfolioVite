import React from 'react';
import {Menu} from "@/components/menu/Menu";
import {Container} from "@/components/Container";
import {S} from './Styled_Footer'


const itemsFooter = ['Home']

export const Footer: React.FC = () => {
    return (
        <S.Footer id={"contact"}>
            <Container>
                    <S.WrapperFooter1>
                        <S.FooterSpan>Designed and built
                            by <span>Alex Cherem</span> with <span>Love</span> & <span>Coffee</span>
                        </S.FooterSpan>
                        <S.MenuItems>
                            <Menu menuItems={itemsFooter}/>
                        </S.MenuItems>
                    </S.WrapperFooter1>

            </Container>
        </S.Footer>
    );
};



