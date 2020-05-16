import styled from "styled-components";
import { defaultTheme, typeScale } from "../../utils";

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 5px;
    min-width: 100px;
    cursor: pointer;
`;

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;
`;
const InfoButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;
`;

const WarningButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;
`;

const DangerButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;
`;

export default PrimaryButton;
export { InfoButton, WarningButton, DangerButton };
