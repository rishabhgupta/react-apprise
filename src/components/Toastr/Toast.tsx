import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

type SProps = {
    color: string;
    modifiers: any;
}

const TOASTR_MODIFIERS = {
    topRight: () => `
        top: 12px;
        right: 12px;
        transition: transform .6s ease-in-out;
        animation: toast-in-right .7s;
    `,
    topLeft: () => `
        top: 12px;
        left: 12px;
        transition: transform .6s ease-in;
        animation: toast-in-left .7s;
    `,
    bottomRight: () => `
        bottom: 12px;
        right: 12px;
        transition: transform .6s ease-in-out;
        animation: toast-in-right .7s;
    `,
    bottomLeft: () => `
        bottom: 12px;
        left: 12px;
        transition: transform .6s ease-in;
        animation: toast-in-left .7s;
    `
}


const SNotification = styled.div<SProps>`
    background: ${props => props.color ? props.color : '#fff'};
	transition: .3s ease;
	position: relative;
	pointer-events: auto;
	overflow: hidden;
	margin: 0 0 6px;
	padding: 18px 20px;
	margin-bottom: 15px;
	width: 300px;
	height: 40px;
	max-height: 100px;
	border-radius: 10px 10px 10px 10px;
	box-shadow: 0 0 10px #999;
	color: #000;
	opacity: .9;
	background-position: 15px;
    background-repeat: no-repeat;
    color: #fff;
    &:hover {
        box-shadow: 0 0 12px #fff;
        opacity: 1;
        cursor: pointer
    }

    button {
        position: relative;
        right: -.3em;
        top: -.3em;
        float: right;
        font-weight: 700;
        color: #fff;
        outline: none;
        border: none;
        text-shadow: 0 1px 0 #fff;
        opacity: .8;
        line-height: 1;
        font-size: 16px;
        padding: 0;
        cursor: pointer;
        background: 0 0;
        border: 0
    }

    .notification-image {
        float: left;
        margin-right: 15px;
    }

    .notification-image img {
        width: 30px;
        height: 30px;
    }

    .notification-title {
        font-weight: 700;
        font-size: 16px;
        text-align: left;
        margin-top: 0;
        margin-bottom: 6px;
        width: 300px;
        height: 18px;
    }

    .notification-message {
        margin: 0;
        text-align: left;
        height: 18px;
        margin-left: -1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @keyframes toast-in-right {
        from {
        transform: translateX(100%);
        
        }
        to {
        transform: translateX(0);
        }
    }

    @keyframes toast-in-left {
        from {
            transform: translateX(-100%);
            
        }
        to {
            transform: translateX(0);
        }
    }
    ${applyStyleModifiers(TOASTR_MODIFIERS)}
`;

type IProps = {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
    icon: string;
    onDelete: Function;
}

const Toast = ({ id, title, description, backgroundColor, icon, onDelete }: IProps) => {
    return (
        <SNotification color={backgroundColor} modifiers={['topRight']}>
            <button onClick={() => onDelete(id)}>X</button>
            <div className="notification-image">
                <img src={icon} alt="" />
            </div>
            <div>
                <p className="notification-title">{title}</p>
                <p className="notification-message">
                    {description}
                </p>
            </div>
        </SNotification>
    )
}

export default Toast;