import { FC } from "react";
import { StyledSubParagraph } from "./SubParagraph.styles";

export interface SubParagraphProps {
    text: string;
}

const Paragraph: FC<SubParagraphProps> = ({ text }) => {
    return (
        <StyledSubParagraph>
            {text}
        </StyledSubParagraph>
    )
}

export default Paragraph;