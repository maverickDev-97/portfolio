import { FC } from "react";
import { StyledTitle } from "./Title.styles";

export interface TitleProps {
    text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
    return (
        <StyledTitle>
            {text}
        </StyledTitle>
    )
}

export default Title;
