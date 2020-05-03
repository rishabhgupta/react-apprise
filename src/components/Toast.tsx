import React, { ReactElement, useState, useEffect } from "react";
import './Toast.css';

interface IProps {
    toastList: any;
    position: any;
}

const Toast = (props: IProps): ReactElement => {
    const { toastList, position } = props;

    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);

    return (
        <>
            <div className={`notification-container ${position}`}>
                {
                    list.map((toast: any, i: number) =>     
                        <div 
                            key={i}
                            className={`notification toast ${position}`}
                        >
                            <button>
                                X
                            </button>
                            <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Toast;