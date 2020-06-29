import React from 'react';
import styled from 'styled-components';
import {
    applyStyleModifiers,
} from 'styled-components-modifiers';
import warningIcon from "../../assets/warning.svg";

const COLOR_MODIFIERS = {
    danger: () => `
        border-left: 3px solid red;
    `,
    success: () => `
        border-left: 3px solid green;
    `,
}

interface ISNotify {
    modifiers: any;
}
const SNotify = styled.div<ISNotify>`
    max-width: 360px;
    box-shadow:0px 0px 5px #999999ad;
    border-radius: 3px;
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        .icon {
            flex: 0 0 36px;
            background-color: red;
            height: 100%; 
            img {
                max-width: 16px;
                padding: 8px 10px;
            }
        }
        /* border: 1px solid; */
        p {
            flex: 6;
            /* background-color: green; */
            margin: 0px;
            padding: 8px 12px;
        }
        .close {
            flex: 0 0 24px;
            height: 24px;
            /* background-color: red; */
            text-align: center;
             padding: 6px 6px;
        }
    }
    ${applyStyleModifiers(COLOR_MODIFIERS)}
`;
interface ISingleNotify {
    danger?: boolean;
    success?: boolean;
}

const getModifiersFromProps = (props: ISingleNotify): string[] => {
    const modifiers = [];
    if (props.danger) modifiers.push('danger');
    if (props.success) modifiers.push('success');
    return modifiers;
}

const IconNotify = (props: ISingleNotify) => {
    return (
        <SNotify modifiers={getModifiersFromProps(props)}>
            <div className="wrapper">
                <div className="icon">
                    <img src={warningIcon} alt="" />
                </div>
                <p>Single Line Here Single Single Line Here Single Single Line Here Single</p>
                <div className="close">
                    X
                </div>
            </div>
        </SNotify>
    )
}

export default IconNotify;