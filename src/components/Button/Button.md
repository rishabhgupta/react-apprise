### Button Types
```jsx
import { Button }from './Button';
import { ThemeProvider } from 'styled-components';
import {defaultTheme, darkTheme} from '../../utils/themes';
class ButtonWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            useDarkTheme: false,
        }
        this.setDarkTheme = this.setDarkTheme.bind(this);
    }

    setDarkTheme() {
        const { useDarkTheme}  = this.state;
        this.setState({
            'useDarkTheme': !useDarkTheme,
        })
    }

    render() {
        return (
            <ThemeProvider theme={this.state.useDarkTheme ? darkTheme : defaultTheme}>
                <button style={{margin: "24px 0", padding: "8px", background: 'none'}} onClick={this.setDarkTheme}>Toggle Dark Theme</button>
                <br/>
                <Button primary>Primary</Button>
                <span> </span>
                <Button secondary>Secondary</Button>
            </ThemeProvider>
        )
    }
}
<ButtonWrapper/>
```

### Disabled State
```jsx
import { Button } from './Button';
import { ThemeProvider } from 'styled-components';
import {defaultTheme} from '../../utils/themes';
class ButtonWrapper extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
             <ThemeProvider theme={defaultTheme}>
                <Button primary disabled>Primary</Button>
                <span> </span>
                <Button secondary disabled>Secondary</Button>
            </ThemeProvider>
        )
    }
}
<ButtonWrapper/>
```
---

## Modifiers

### Size Modifiers
```jsx
import { Button } from './Button';
import { ThemeProvider } from 'styled-components';
import {defaultTheme} from '../../utils/themes';
class ButtonWrapper extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <Button modifiers="small" >Primary</Button>
                <span> </span>
                <Button>Primary</Button>
                 <span> </span>
                <Button  modifiers="large">Primary</Button>
            </ThemeProvider>
        )
    }
}
<ButtonWrapper/>
```


### Status Modifiers
```jsx
import { Button } from './Button';
import { ThemeProvider } from 'styled-components';
import {defaultTheme} from '../../utils/themes';
class ButtonWrapper extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <Button>Primary</Button>
                <span> </span>
                <Button modifiers={["warning"]}>Warning</Button>
                <span> </span>
                <Button modifiers={["danger"]}>Danger</Button>

            </ThemeProvider>
        )
    }
}
<ButtonWrapper/>
```