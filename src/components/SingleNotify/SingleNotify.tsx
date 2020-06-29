import React from 'react';
import styled from 'styled-components';
import {
    applyStyleModifiers,
} from 'styled-components-modifiers';

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
    max-height: 48px;
    padding: 12px 12px;
    box-shadow:0px 0px 5px #999999ad;
    border-radius: 3px;
    .wrapper {
        display: flex;
        align-items: center;
        /* border: 1px solid; */
        p {
            flex: 6;
            /* background-color: green; */
             margin: 0px;
        }
        .close {
            flex: 0 0 24px;
            /* background-color: red; */
            text-align: center;
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

const SingleNotify = (props: ISingleNotify) => {
    return (
        <SNotify modifiers={getModifiersFromProps(props)}>
            <div className="wrapper">
                <p>Single Line Here Single </p>
                <div className="close">
                    X
                </div>
            </div>
        </SNotify>
    )
}

export default SingleNotify;