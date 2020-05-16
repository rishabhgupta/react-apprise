
```jsx
import PrimaryButton, {InfoButton, WarningButton, DangerButton} from './Button';
class ButtonWrapper extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <PrimaryButton>Primary</PrimaryButton>
                <span> </span>
                <InfoButton>Info</InfoButton>
                <span> </span>
                <WarningButton>Warn</WarningButton>
                <span> </span>
                <DangerButton>Danger</DangerButton>
            </div>
        )
    }
}
<ButtonWrapper/>


```