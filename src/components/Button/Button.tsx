import styled, { StyledFunction } from "styled-components";
import { defaultTheme, typeScale } from "../../utils";
import { applyStyleModifiers } from 'styled-components-modifiers';
import { ReactNode, ButtonHTMLAttributes, FunctionComponent } from "react";
import { thisExpression } from "@babel/types";

const HEADING_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    warning: () => `
        background-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.textColorInverted};
        &:hover, &:focus {
            background-color: ${defaultTheme.status.warningColorHover};
            outline: none;
        }
        &:active {
            background-color: ${defaultTheme.status.warningColorActive};
        }
    `,
    danger: () => `
        background-color: ${defaultTheme.status.errorColor};
        color: ${defaultTheme.textColorInverted};
        &:hover, &:focus {
            background-color: ${defaultTheme.status.errorColorHover};
            outline: none;
        }
        &:active {
            background-color: ${defaultTheme.status.errorColorActive};
        }
    `,
}


const getBackgroundColor = (props: any, type: "normal" | "hover" = "normal"): string => {
    if (props.secondary) {
        return type === "hover" ? props.theme.primaryColor : "white";
    }
    return props.theme.primaryColor;
}

const getBorderStyles = (props: any): string => {
    if (props.secondary) {
        return `2px solid ${props.theme.primaryColor}`;
    }
    return 'none';
}

const getColor = (props: any, type: "hover" | "normal" = "normal") => {
    if (props.secondary) {
        return type === "hover" ? "white" : props.theme.primaryColor;
    }
    return props.theme.textColorOnPrimary;
}
interface IButton {
    primary?: boolean;
    secondary?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
}

export const Button = styled.button<IButton>`
    padding: ${props => props.secondary ? "10px 24px" : "12px 24px"};
    font-size: ${typeScale.paragraph};
    border-radius: 5px;
    min-width: 100px;
    cursor: pointer;
    box-sizing: border-box;
    border: ${props => getBorderStyles(props)};
    color: ${props => getColor(props)};
    background-color: ${props => getBackgroundColor(props)};
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => getColor(props, "hover")};
    }

    &:focus {
       outline: 0px;
    }

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.testOnDisabled};
        cursor: not-allowed;
        border: ${props => props.secondary ? `2px solid ${defaultTheme.testOnDisabled}` : 'none'};
    }

    ${applyStyleModifiers(HEADING_MODIFIERS)}
`;


interface CProps {
    primary?: boolean;
    secondary?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
}
export const CButton = styled.button<CProps>`
    color: ${props => props.primary ? "whilte" : "blue"};
    ${applyStyleModifiers(HEADING_MODIFIERS)}
`;
