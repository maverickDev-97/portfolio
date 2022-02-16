import Head from 'next/head';
import type { NextPage } from 'next';
import Paragraph from '../components/Paragraph/Paragraph';
import SubParagraph from '../components/SubParagraph/SubParagraph';

const DevPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dmytro Pryshliak - Frontend Developer @ Luxoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Paragraph
                text="I have been working in web development for the last 4 years." />
            <Paragraph
                text="Experienced in working with various stakeholders and remote worldwide teams."
            />
            <Paragraph
                text="Strongly oriented in tasks fulfilment and constantly growing myself as an engineer using last technologies related to my field."
            />
            <SubParagraph
                text="Technologies that i proficient in:"
            />
            <Paragraph
                text="Javascript (ES6+) | React.js"
            />
            <SubParagraph
                text="Good knowledge of:"
            />
            <Paragraph
                text="React Testing Library | GraphQL | Apollo Client | Redux"
            />
            <SubParagraph
                text="Work with:"
            />
            <Paragraph
                text="Git | Azure | Cypress | Jenkins"
            />
        </>
    )
}

export default DevPage;