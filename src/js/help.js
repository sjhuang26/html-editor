/*
Contains strings used in help messages.
*/

export const tags = {
  html: {
    title: 'html',
    description: 'contains the whole website',
    extendedDescription: 'Not required, but if you decide to add it, it should be the tag that contain all other tags.',
    codeSample: '<html>[YOUR ENTIRE WEBSITE]</html>',
    level: 2
  },
  body: {
    title: 'body',
    description: 'contains all website content',
    extendedDescription: 'Contains all website content -- paragraphs, headers, and so on.',
    codeSample: '<body>[WEBSITE CONTENT]</body>',
    level: 2
  },
  h1: {
    title: 'header #1',
    description: '#1 largest header',
    extendedDescription: 'Creates a header that is the #1 largest.',
    codeSample: '<h1>My header</h1>',
    level: 1
  },
  p: {
    title: 'paragraph',
    description: 'a paragraph of text',
    extendedDescription: 'Creates a paragraph of text.',
    codeSample: '<p>This is my paragraph</p>',
    level: 1
  },
  a: {
    title: 'link',
    description: 'a hyperlink',
    extendedDescription: 'Creates a hyperlink. For the link to do anything, include the "href" attribute, which specifies what website the link goes to.',
    codeSample: '<a href="https://google.com">Link to Google</a>',
    level: 3
  },
  div: {
    title: 'div',
    description: 'a box that can contain other items',
    extendedDescription: 'A box that you can put other tags into. You can use CSS to add effects such as outlines and margins.',
    codeSample: '<div style="outline: 1px solid black">[CONTENTS]</div>',
    level: 3
  },
  table: {
    title: 'table',
    description: 'a table',
    extendedDescription: 'A table. Row tags go into tables.',
    codeSample: `<table>\n<tr><td>A</td><td>A</td></tr>\n<tr><td>A</td><td>A</td></tr>\n</table>\n`,
    level: 2
  },
  tr: {
    title: 'table row',
    description: 'a table row',
    extendedDescription: 'A table row. Goes into a table tag. Table data tags go into table rows.',
    codeSample: `<tr><td>A</td><td>A</td></tr>`,
    level: 2
  },
  td: {
    title: 'table data',
    description: 'a single cell or "table data" of a table',
    extendedDescription: 'A table cell or "table data". Goes into a table row tag.',
    codeSample: `<td>Cell</td>`,
    level: 2
  },
  b: {
    title: 'bold',
    description: 'makes its contents bold',
    extendedDescription: 'Makes its contents bold.',
    codeSample: `<b>Bold</b>`,
    level: 1
  },
  i: {
    title: 'italic',
    description: 'makes its contents italicized',
    extendedDescription: 'Makes its contents italicized.',
    codeSample: `<i>Italicized</i>`,
    level: 1
  },
  u: {
    title: 'underline',
    description: 'makes its contents underlined',
    extendedDescription: 'Makes its contents underlined.',
    codeSample: `<u>Underlined</u>`,
    level: 1
  },
  button: {
    title: 'button',
    description: 'creates a button',
    extendedDescription: 'Creates a button. Its text is whatever is inside the tag.',
    codeSample: `<button>My button</button>`,
    level: 1
  }
};

export const categorizedTags = [
  {
    name: 'Structural',
    description: `Tags that are used as boxes for other tags and don't have any special visual effects associated with them.`,
    tags: ['html', 'body', 'div']
  },
  {
    name: 'Text',
    description: `Headers, paragraphs, and anything to do with text.`,
    tags: ['p', 'h1']
  },
  {
    name: 'Interactive',
    description: `Things you can click: buttons, links, and so on.`,
    tags: ['a', 'button']
  }
];

export function getInlineTagHelp(tagName) {
  if (tags[tagName] === undefined) {
    return 'tag unknown; no help available';
  } else {
    return tagName + ': ' + tags[tagName].description;
  }
}

export function getInlineTextHelp() {
  return 'text';
}
