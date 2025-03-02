import { FC } from 'react'

import styled from 'styled-components'
import {ThemeIcon} from "@/assets/theme-icon";

type ToggleThemeBtnProps = {
    toggleTheme: () => void
}
export const ToggleThemeBtn: FC<ToggleThemeBtnProps> = ({ toggleTheme }) => {
    return (
        <ToggleBtn onClick={toggleTheme}>
            <StyledThemeIcon />
        </ToggleBtn>
    )
}
const ToggleBtn = styled.button`
  cursor: pointer;

  width: 40px;
  height: 40px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.colors.hover.navigation};
  }
`
const StyledThemeIcon = styled(ThemeIcon)`
  width: 27px;
  height: 27px;
  path {
    fill: ${props => props.theme.colors.textSecondary};
  } 
`