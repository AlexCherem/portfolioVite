import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type iconIdProps = {
    iconId?: string,
    width?: string,
    height?: string
    viewBox?: string
    fill?: string
    xmlns?: string

}

export const Icon = (props: iconIdProps) => {
    return (
        <svg width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"}
             fill={props.fill || "none"} xmlns={props.xmlns || "http://www.w3.org/2000/svg"}>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

