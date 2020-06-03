import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import Toast from './Toast';

const TOASTR_MODIFIERS = {
    topRight: () => `
        top: 12px;
        right: 12px;

    `,
    topLeft: () => `
        top: 12px;
        left: 12px;
    `,
    bottomRight: () => `
        bottom: 12px;
        right: 12px;
    `,
    bottomLeft: () => `
        bottom: 12px;
        left: 12px;
    `
}


type toast = {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
    icon: string;
};

interface IProps {
    modifiers: any;
}

const SToastrContainer = styled.div<IProps>`
    font-size: 14px;
	box-sizing: border-box;
	position: fixed;
    z-index: 999999;
    ${applyStyleModifiers(TOASTR_MODIFIERS)}
`

type IToastrProps = {
    /** represents an array that will contain objects */
    toastList: toast[];
}

const Toastr = (props: IToastrProps): ReactElement => {
    const { toastList } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);

    const onDelete = (id: number): void => {
        const index = list.findIndex((e) => e.id === id);
        list.splice(index, 1);
        setList([...list]);
    };

    return (
        <SToastrContainer modifiers={['topRight']}>
            {list.map((toastr: toast, index: number) => (
                <Toast key={index} {...toastr} onDelete={onDelete}></Toast>
            ))}
        </SToastrContainer>
    )
}

Toastr.defaultProps = {
    toastList: [],
}

export default Toastr