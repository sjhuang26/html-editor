import lessonContent_tags1 from '../lesson-content/tags-1.md';
import lessonContent_siteStructure1 from '../lesson-content/site-structure-1.md';
import lessonContent_whatIsHTML from '../lesson-content/what-is-html.md';
import lessonContent_tagAttributes from '../lesson-content/tag-attributes.md';
import lessonContent_nestingTags from '../lesson-content/nesting-tags.md';

export const tutorial = {
    pages: [
        {
            title: 'What is HTML?',
            lessonMarkdownContent: lessonContent_whatIsHTML
        },
        {
            title: 'Tags',
            lessonMarkdownContent: lessonContent_tags1,
            examples: [
                {
                    description: `A paragraph that says "hi". A p tag is used.`,
                    code: `<p>hi</p>`
                },
                {
                    description: `Two tags placed one after another. Try changing their order.`,
                    code: `<p>hi</p>\n<p>hi again</p>`
                },
                {
                    description: `An h1 tag followed by two p tags. Try changing the words inside the tags.`,
                    code: `<h1>Hi</h1>\n<p>Hi!</p>\n<p>Hi again.</p>`
                }
            ]
        },
        {
            title: 'Nesting tags',
            lessonMarkdownContent: lessonContent_nestingTags,
            examples: [
                {
                    description: 'An "i" tag inside a "h1" tag.',
                    code: `<h1><i>Hi!</i></h1>`
                }
            ]
        },
        {
            title: 'Site structure',
            lessonMarkdownContent: lessonContent_siteStructure1,
            examples: [
                {
                    description: 'This is a template website without indents. Try adding indents to match the tutorial.',
                    code: `<html>\n<body>\n<p>Hi!</p>\n</body>\n</html>\n`
                },
                {
                    description: 'Notice how the headings and paragraphs go into the body tag.',
                    code: `<html>\n\t<body>\n\t\t<h1>My website</h1>\n\t\t<p>My paragraph</p>\n\t</body>\n</html>`
                },
                {
                    description: 'If there is nothing inside the body tag, the website will be empty.',
                    code: `<html>\n<body>\n</body>\n</html>`
                }
            ]
        },
        {
            title: 'Tag attributes',
            lessonMarkdownContent: lessonContent_tagAttributes,
            examples: [
                {
                    description: 'A button with height 200px.',
                    code: `<button height="200px">Hello</button>`
                },
                {
                    description: 'What about width 200px?',
                    code: `<button width="200px">Hello</button>`
                },
                {
                    description: 'What about both height and width 200px?',
                    code: `<button height="200px" width="200px">Hello</button>`
                }
            ]
        }
    ]
};
