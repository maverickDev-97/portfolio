import { FC } from "react";
import { StyledParagraph } from "./Paragraph.styles";

export interface ParagraphProps {
    text: string;
}

const Paragraph: FC<ParagraphProps> = ({ text }) => {
    return (
        <StyledParagraph>
            {text}
        </StyledParagraph>
    )
}

export default Paragraph;