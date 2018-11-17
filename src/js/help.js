/*
Contains strings used in help messages.
*/

export const tags = {
  html: {
    title: 'html',
    description: 'contains the whole website',
    extendedDescription: 'All other tags go into this tag.',
    codeSample: `<html>\n\t<body>\n\t\t<p>Hi!</p>\n\t</body>\n</html>`
  },
  body: {
    title: 'body',
    description: 'contains all website content',
    extendedDescription: 'Contains all website content -- paragraphs, headers, and so on.',
    usedWith: 'html'
  },
  h1: {
    title: 'header #1',
    description: '#1 largest header',
    extendedDescription: 'Creates a header that is the #1 largest.',
    codeSample: '<h1>My header</h1>',
  },
  h2: {
    title: 'header #2',
    description: '#2 largest header',
    extendedDescription: 'Creates a header that is the #2 largest.',
    codeSample: '<h2>My header</h2>',
  },
  h3: {
    title: 'header #3',
    description: '#3 largest header',
    extendedDescription: 'Creates a header that is the #3 largest.',
    codeSample: '<h3>My header</h3>',
  },
  p: {
    title: 'paragraph',
    description: 'a paragraph of text',
    extendedDescription: 'Creates a paragraph of text.',
    codeSample: '<p>This is my paragraph</p>'
  },
  a: {
    title: 'hyperlink',
    description: 'a hyperlink',
    extendedDescription: 'Creates a hyperlink. For the link to do anything, include the "href" attribute, which specifies what website the link goes to.',
    codeSample: '<a href="https://google.com">Link to Google</a>'
  },
  div: {
    title: 'div',
    description: 'a box that can contain other items',
    extendedDescription: 'A box that you can put other tags into. You can use CSS to add effects such as outlines and margins.',
    codeSample: '<div style="outline: 1px solid black">\n\t<p>Contents</p>\n</div>'
  },
  table: {
    title: 'table',
    description: 'a table',
    extendedDescription: 'A table. Row tags go into tables.',
    codeSample: `<table>\n<tr><td>A</td><td>A</td></tr>\n<tr><td>A</td><td>A</td></tr>\n</table>\n`
  },
  tr: {
    title: 'table row',
    description: 'a table row',
    extendedDescription: 'A table row.',
    usedWith: 'table'
  },
  td: {
    title: 'table cell',
    description: 'a single cell of a table',
    extendedDescription: 'A cell of a table.',
    usedWith: 'table'
  },
  b: {
    title: 'bold',
    description: 'makes its contents bold',
    extendedDescription: 'Makes its contents bold.',
    codeSample: `<b>Bold</b>`,
  },
  i: {
    title: 'italic',
    description: 'makes its contents italicized',
    extendedDescription: 'Makes its contents italicized.',
    codeSample: `<i>Italicized</i>`,
  },
  u: {
    title: 'underline',
    description: 'makes its contents underlined',
    extendedDescription: 'Makes its contents underlined.',
    codeSample: `<u>Underlined</u>`,
  },
  s: {
    title: 'cross out',
    description: 'adds a cross out effect to its contents',
    extendedDescription: 'Adds a cross out effect to its contents.',
    codeSample: `<s>Crossed out</s>`
  },
  mark: {
    title: 'highlighting',
    description: 'makes its contents highlighted',
    extendedDescription: 'Makes its contents highlighted.',
    codeSample: `<mark>Highlighted</mark>`
  },
  hr: {
    title: 'horizontal line',
    description: 'makes a horizontal line',
    extendedDescription: 'Makes a horizontal line.',
    codeSample: `<hr></hr>`
  },
  button: {
    title: 'button',
    description: 'creates a button',
    extendedDescription: 'Creates a button. Its text is whatever is inside the tag.',
    codeSample: `<button>My button</button>`,
    level: 1
  },
  ul: {
    title: 'bullet-point list',
    description: 'bullet point list',
    extendedDescription: 'Creates a bullet point list. This tag contains li tags, which represent list items.',
    codeSample: `<ul>\n\t<li>Milk</li>\n\t<li>Coffee</li>\n\t<li>Bread</li>\n</ul>`
  },
  ol: {
    title: 'numbered list',
    description: 'numbered list',
    extendedDescription: 'Creates a numbered list. This tag contains li tags, which represent list items.',
    codeSample: `<ol>\n\t<li>Milk</li>\n\t<li>Coffee</li>\n\t<li>Bread</li>\n</ol>`
  },
  li: {
    title: 'list item',
    description: 'list item',
    extendedDescription: 'Represents an item inside a list.',
    usedWith: 'ul'
  },
  input: {
    title: 'form element',
    description: 'form element',
    extendedDescription: 'A form element (text box, checkbox, etc).',
    codeSample: `<input type="checkbox"></input>`
  }
};

export const categorizedTags = [
  {
    name: 'Tags for text',
    description: `Headers, paragraphs, and anything to do with text.`,
    tags: ['p', 'h1', 'h2', 'h3', 'b', 'i', 'u'],
    examples: [
      {
        description: 'Two headings with a paragraph.',
        code: `<h1>Big heading</h1>\n<h2>Smaller heading</h2>\n<p>Paragraph,/p>`
      },
      {
        description: 'Bold, italic, and underline.',
        code: `<p>Text can be <b>Bold</b>, it can also be <i>Italic</i>, and finally, it can be <u>Underline</u>.</p>`
      }
    ]
  },
  {
    name: 'Tags for interactivity',
    description: `Things you can click: buttons, links, and so on.`,
    tags: ['a', 'button'],
    examples: [
      {
        description: 'A row of buttons.',
        code: `<button>1</button><button>2</button><button>3</button>`
      }
    ]
  },
  {
    name: 'Tags for lists',
    description: `Bulleted lists and numbered lists.`,
    tags: ['ul', 'ol', 'li']
  },
  {
    name: 'Tags for forms',
    description: `Forms.`,
    tags: ['input']
  },
  {
    name: 'Tags for structure and layout',
    description: `Tags that are used as boxes for other tags and don't have any special visual effects associated with them.`,
    tags: ['html', 'body', 'div']
  }
];

export function getInlineTagHelp(tagName) {
  if (tags[tagName] === undefined) {
    return 'tag unknown; no help available';
  } else {
    return tags[tagName].description;
  }
}

export function getInlineTextHelp() {
  return 'text';
}
