Toast example:

```js
import checkIcon from "../assets/check.svg";
import errorIcon from "../assets/error.svg";
import infoIcon from "../assets/info.svg";
import warningIcon from "../assets/warning.svg";

const testList = [
    {
        id: 1,
        title: "Success",
        description: "This is a success toast component",
        backgroundColor: "#5cb85c",
        icon: checkIcon
    },
    {
        id: 2,
        title: "Danger",
        description: "This is an error toast component",
        backgroundColor: "#d9534f",
        icon: errorIcon
    },
    {
        id: 3,
        title: "Info",
        description: "This is an info toast component",
        backgroundColor: "#5bc0de",
        icon: infoIcon
    },
    {
        id: 4,
        title: "Warning",
        description: "This is a warning toast component",
        backgroundColor: "#f0ad4e",
        icon: warningIcon
    }
];

const indexMap  = {
    success: 0,
    danger: 1,
    info: 2,
    warning: 3
}

class ToastWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toastList: [],
        }
        this.hanldeOnClick = this.hanldeOnClick.bind(this);
    }

    hanldeOnClick(e) {
        this.setState({
            toastList: [...this.state.toastList,  testList[indexMap[e.target.name]]]
        });
    }
    render() {
        return (
            <div>
                <button name="success" onClick={this.hanldeOnClick}>Success</button>
                <button name="danger" onClick={this.hanldeOnClick}>Danger</button>
                <button name="info" onClick={this.hanldeOnClick}>Info</button>
                <button name="warning" onClick={this.hanldeOnClick}>Warning</button>
                <Toast toastList={this.state.toastList} position="top-right" />
            </div>
        )
    }
}
<ToastWrapper/>
//  <Toast toastList={testList} position="top-right" />
```