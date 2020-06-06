### Disabled State
```jsx
import { Button } from '../Button/Button';
import { ThemeProvider } from 'styled-components';
import {defaultTheme} from '../../utils/themes';
import Modal from "./Modal";

class ButtonWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        }
        this.setShowModal = this.setShowModal.bind(this);
    }

    setShowModal() {
        const {showModal} = this.state;
        this.setState({
            showModal: !showModal,
        })
    }

    render() {
        const {showModal} = this.state;
        return (
             <ThemeProvider theme={defaultTheme}>
                <Modal showModal={showModal} setShowModal={this.setShowModal}/>
                <Button onClick={() => this.setShowModal()}>Show Modal</Button>
            </ThemeProvider>
        )
    }
}
<ButtonWrapper/>
```
---