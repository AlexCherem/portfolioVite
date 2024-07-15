import {theme} from "@/styles/Theme";

type FontPropsType={
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}
export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType)=>`
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 700};
    color: ${color || theme.colors.fontH1};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`


// font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);