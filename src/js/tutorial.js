import lessonContent_tags1 from '../lesson-content/tags-1.md';
import lessonContent_siteStructure1 from '../lesson-content/site-structure-1.md';

export const tutorial = {
    pages: [
        {
            title: 'Tags',
            lessonMarkdownContent: lessonContent_tags1,
            examples: [
                {
                    description: `A basic tag.`,
                    code: `<p>hi</p>`
                },
                {
                    description: `Two tags placed one after another.`,
                    code: `<p>hi</p>\n<p>hi again</p>`
                },
                {
                    description: `A small website. Try changing the words.`,
                    code: `<h1>Hi</h1><p>Hi!</p><p>Hi again.</p>`
                }
            ]
        },
        {
            title: 'Site structure',
            lessonMarkdownContent: lessonContent_siteStructure1,
            examples: [
                {
                    description: 'This is an empty site.',
                    code: `<html>\n<body></body>\n</html>\n`
                },
                {
                    description: 'When you add paragraphs and most other content, they go into the BODY tag.',
                    code: `<html>\n<body>\n<p>My paragraph</p>\n</body>\n</html>`
                },
                {
                    description: 'You can add as many paragraphs as you want.',
                    code: `<html>\n<body>\n<p>My paragraph</p>\n<p>My paragraph</p>\n<p>My paragraph</p>\n</body>\n</html>`
                }
            ]
        }
    ]
};
