
import styled from 'styled-components';
import { typeScale } from '../../utils';
import React, { ReactElement, useState, useEffect } from "react";
import { Button } from '../Button/Button';
import { useSpring, animated } from 'react-spring';
const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    position: relative;
    border-radius: 2px;
`;

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-allign: center;
`;

interface IProps {
    showModal: boolean;
    setShowModal: Function;
}

const Modal = ({ showModal, setShowModal }: IProps): ReactElement => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    })

    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <SignUpHeader>
                    Sign Up
            </SignUpHeader>
                <SignUpText>
                    Sign Up to get access!
            </SignUpText>
                <Button>nello</Button>
            </ModalWrapper>
        </animated.div>
    )
}

export default Modal;

