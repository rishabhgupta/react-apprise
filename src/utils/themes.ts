import { blue, green, neutral, red, yellow } from "./colors";
import { PRIMARY_FONT } from "./typography";

export const defaultTheme = {
    primaryColor: green[100],
    primaryHoverColor: green[200],
    primaryActiveColor: green[100],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    primaryFont: PRIMARY_FONT,
    success: green[100],
    danger: red[100],
    warn: yellow[100],
    info: blue[100],
    dangerHover: red[200],
    warnHover: yellow[200],
    infoHover: blue[200],
    disabled: neutral[200],
    testOnDisabled: neutral[400],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
};

export const darkTheme = {
    primaryColor: neutral[100],
    primaryHoverColor: neutral[200],
    primaryActiveColor: neutral[100],
    textColorOnPrimary: green[300],
    textColor: green[300],
    textColorInverted: neutral[100],
    primaryFont: PRIMARY_FONT,
    success: green[100],
    danger: red[100],
    warn: yellow[100],
    info: blue[100],
    dangerHover: red[200],
    warnHover: yellow[200],
    infoHover: blue[200],
    disabled: neutral[400],
    testOnDisabled: neutral[400],
    formElementBackground: green[100],
    testOnFormElementBackground: green[600],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
};
