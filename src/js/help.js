/*
Contains strings used in help messages.
*/

/*
If a tag has usedWith parameter set to X, then that tag should not be used without the presence of tag X around it. Thus, that tag will not have any code examples of its own; its code examples will be copied from tag X.
*/
export const tags = {
  html: {
    title: 'html',
    description: 'a tag that goes around the whole website',
    extendedDescription: 'All other tags go into this tag.',
    codeSample: `<html>\n\t<body>\n\t\t<p>Hi!</p>\n\t</body>\n</html>`
  },
  body: {
    title: 'body',
    description: 'a tag that goes around all website content',
    extendedDescription: 'Contains all website content: paragraphs, headers, and so on.',
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
  h4: {
    title: 'header #4',
    description: '#4 largest header',
    extendedDescription: 'Creates a header that is the #4 largest.',
    codeSample: '<h4>My header</h4>',
  },
  h5: {
    title: 'header #5',
    description: '#5 largest header',
    extendedDescription: 'Creates a header that is the #5 largest.',
    codeSample: '<h5>My header</h5>',
  },
  h6: {
    title: 'header #6',
    description: '#6 largest header',
    extendedDescription: 'Creates a header that is the #6 largest.',
    codeSample: '<h6>My header</h6>',
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
    extendedDescription: 'A box that you can put other tags into and add effects to such as borders.',
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
    extendedDescription: `A tag that can morph into most kinds of form elements (text box, checkbox, etc) based on its 'type' attribute.`,
    codeSample: `<input type="checkbox"></input>`
  }
};

export const categorizedTags = [
  {
    name: 'Text',
    description: `Headers, paragraphs, and anything to do with text.`,
    tags: ['p', 'h1', 'h2', 'h3', 'b', 'i', 'u'],
    examples: [
      {
        description: 'Two headings with a paragraph. Try adding another heading.',
        code: `<h1>Big heading</h1>\n<h2>Smaller heading</h2>\n<p>Paragraph</p>`
      },
      {
        description: 'Bold, italic, and underline. Try changing the P tag into an H1 tag.',
        code: `<p>Text can be <b>Bold</b>, it can also be <i>Italic</i>, and finally, it can be <u>Underline</u>.</p>`
      }
    ]
  },
  {
    name: 'Interactivity',
    description: `Things you can click: buttons, links, and so on.`,
    tags: ['a', 'button'],
    examples: [
      {
        description: 'A row of buttons. Try adding another button to the row.',
        code: `<button>1</button><button>2</button><button>3</button>`
      },
      {
        description: 'A link. Note how the href attribute is set to https://google.com. Try changing the text inside the link.',
        code: `<a href="https://google.com">Go to Google</a>`
      },
      {
        description: 'A link inside a paragraph.',
        code: `<p>This link will go to Google! <a href="https://google.com">Click here.</a>`
      }
    ]
  },
  {
    name: 'Lists',
    description: `Bulleted lists and numbered lists.`,
    tags: ['ul', 'ol', 'li'],
    examples: [
      {
        description: 'A numbered list with three items. Try swapping the OL tag with an UL tag.',
        code: `<ol>\n\t<li>Eggs</li>\n\t<li>Bread</li>\n\t<li>HTML</li>\n</ol>`
      },
      {
        description: 'A numbered list inside another numbered list. Try adding more items to each list.',
        code: `<ol>
\t<li>Eggs</li>
\t<li>
\t\t<ol>
\t\t\t<li>Look at me!</li>
\t\t</ol>
\t</li>
</ol>`
      },
      {
        description: 'A numbered list with paragraphs.',
        code: `<ol>
\t<li><p>Step 1: do this</p></li>
\t<li><p>Step 2: do that</p></li>
</ol>` 
      }
    ]
  },
  {
    name: 'Forms',
    description: `Forms.`,
    tags: ['input'],
    examples: [
      {
        description: `A basic form.`,
        code: `<p>Enter your age: <input type="text"></input></p>`
      }
    ]
  },
  {
    name: 'Structure and layout',
    description: `Tags that are used as boxes for other tags and don't have any special visual effects associated with them.`,
    tags: ['html', 'body', 'div'],
    examples: [
      {
        description: 'A DIV tag with an outline.',
        code: `<div style="outline: 10px solid green">Hello world</div>`
      }
    ]
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
