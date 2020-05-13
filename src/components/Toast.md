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

 <Toast toastList={testList} position="top-right" />
```