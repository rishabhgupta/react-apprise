import React, { ReactElement, useState, useEffect } from "react";
import "./Toast.css";

type toast = {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
    icon: string;
};
interface IProps {
    /** represents an array that will contain objects */
    toastList: toast[];
    /** placement of the notification container on the page. */
    position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
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
                {list.map((toast, i: number) => (
                    <div
                        key={i}
                        className={`notification toast ${position}`}
                        style={{ backgroundColor: toast.backgroundColor }}
                    >
                        <button>X</button>
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
                ))}
            </div>
        </>
    );
};

Toast.defaultProps = {
    position: "bottom-right"
};

export default Toast;
