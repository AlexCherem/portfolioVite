import { ComponentPropsWithoutRef, FC } from 'react'

import styled from 'styled-components'
import {Icon} from "src/components/icon/Icon";

type ButtonWithIconProps = {
    children: string
} & ComponentPropsWithoutRef<'button'>
export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ children }) => {
    return (
        <Button>
            <Icon iconId={'email'} height={"28"} width={"28"} viewBox={'0 0 32 32'}/>
            {children}
        </Button>
    )
}

const Button = styled.button`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  font-size: 19px;
  color: ${props => props.theme.colors.button.color};
  background-color: ${props => props.theme.colors.button.background};
  height: 45px;
  width: 200px;
  border-radius: 3px;
  cursor: pointer;

  path {
    fill: ${props => props.theme.colors.button.color};
  }

  &:hover {
    background-color: ${props => props.theme.colors.button.hover};
  }
`