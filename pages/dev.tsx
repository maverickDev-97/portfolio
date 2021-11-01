import type { NextPage } from 'next'
import Paragraph from '../components/Paragraph/Paragraph';

const DevPage: NextPage = () => {
    return (
        <>
            <Paragraph
                text="I'm an Ukrainian developer living in Kyiv."
            />
            <Paragraph
                text="Currently, I'm building new platfrom for one of the largest in UK groceries."
            />
            <Paragraph
                text="In my spare time, I enjoy exploring and learning new technologies by doing"
            />
            <Paragraph
                text="Technologies that i proficient in:"
            />
            <Paragraph
                text="React/Redux, Mobx, Styled-Components"
            />
        </>
    )
}

export default DevPage;