/*
Contains strings used in help messages.
*/

const tags = {
  html: {
    title: 'html',
    description: 'contains the whole website',
    extendedDescription: 'Contains the whole website. There should only be one of these per site.',
    codeSample: '<html>[YOUR ENTIRE WEBSITE]</html>'
  },
  body: {
    title: 'body',
    description: 'contains all website content',
    extendedDescription: 'Contains all website content.',
    codeSample: '<body>[WEBSITE CONTENT]</body>'
  },
  h1: {
    title: 'header #1',
    description: '#1 largest header',
    extendedDescription: 'This header is the #1 largest.',
    codeSample: '<h1>My header</h1>'
  },
  p: {
    title: 'paragraph',
    description: 'a paragraph of text',
    extendedDescription: 'A paragraph of text.',
    codeSample: '<p>This is my paragraph</p>'
  },
  a: {
    title: 'link',
    description: 'a hyperlink',
    extendedDescription: 'A hyperlink. Make sure to include the href attribute or else it won\'t do anything.',
    codeSample: '<a href="https://google.com">Link to Google</a>'
  },
  div: {
    title: 'div',
    description: 'a box that contains other things',
    extendedDescription: 'A box that you can put other elements into. You can use CSS to give it fancy borders and stuff.',
    codeSample: '<div style="outline: 1px solid black">[CONTENTS]</div>'
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
    extendedDescription: 'A table row. Goes into a table tag. Table data tags go into table rows.',
    codeSample: `<tr><td>A</td><td>A</td></tr>`
  },
  td: {
    title: 'table data',
    description: 'a single cell or "table data" of a table',
    extendedDescription: 'A table cell or "table data". Goes into a table row tag.',
    codeSample: `<td>Cell</td>`
  },
  b: {
    title: 'bold',
    description: 'makes its contents bold',
    extendedDescription: 'A tag that makes its contents bold.',
    codeSample: `<b>Bold</b>`
  },
  i: {
    title: 'italic',
    description: 'makes its contents italicized',
    extendedDescription: 'A tag that makes its contents italicized.',
    codeSample: `<i>Italicized</i>`
  },
  u: {
    title: 'underline',
    description: 'makes its contents underlined',
    extendedDescription: 'A tag that makes its contents underlined.',
    codeSample: `<u>Underlined</u>`
  }
};

/*
Indents are intentionally removed here.
*/
const tutorial = {
elements: [
{
type: 'card',
title: 'Welcome!',
pages: [
{
text: 'HTML allows you to write code and create websites.',
code: `<html>\n<head></head>\n<body>\n<h1>Welcome!</h1>\n<p>Hi!</p>\n</body>\n</html>`
},
{
text: 'HTML is made of tags, which change what is in them',
}
]
},
{
type: 'card',
title: 'Basic structure of website',
pages: [
{
text: 'This is an empty site.',
code: `<html>\n<body></body>\n</html>\n`
},
{
text: 'When you add paragraphs and most other content, they go into the BODY tag.',
code: `<html>\n<body>\n<p>My paragraph</p>\n</body>\n</html>`
},
{
text: 'You can add as many paragraphs as you want.',
code: `<html>\n<body>\n<p>My paragraph</p>\n<p>My paragraph</p>\n<p>My paragraph</p>\n</body>\n</html>`
}
]
},
{
type: 'card',
title: 'Headers',
pages: [
{
text: 'Header tags are used in a similar way to headers in a book. The tags are called h1, h2, h3, h4, h5, and h6.',
code: `<h1>My header</h1>\n`
},
{
text: 'h1 is the 1st largest header, h2 the second, h3 the third, ...',
code: `<h1>Big</h1>\n<h3>Medium</h3>\n<h6>Small</h6>\n`
}
]
},
{
type: 'card',
title: 'Bold Italic Underline',
pages: [
{
text: `The B tag makes whatever's in it bold. The I tag creates italics, and the U tag creates underlines.`,
code: `<p>I know <b>HTML!</b></p>\n`
},
{
text: 'Another example.',
code: `<h1><i>Italic heading</i></h1>\n<h2><u>Underlined heading</u></h2>`
},
{
text: 'Bold, italic, and underline tags can go inside each other.',
code: `<p><b>This is bold, and this is also <i>italic</i>.</b></p>`
},
]
},
{
type: 'card',
title: 'Tables',
pages: [
{
text: `Let's go step by step. This is a single cell of a table.`,
code: `<td>Cell</td>`
},
{
text: `This is a row in a table.`,
code: `<tr>\n<td>A</td>\n<td>B</td>\n<td>C</td>\n</tr>\n`
},
{
text: `This is an entire table.`,
code: `<table>\n<tr>\n<td>Apple</td>\n<td>B</td>\n<td>C</td>\n</tr>\n<tr>\n<td>A</td>\n<td>Bee</td>\n<td>C</td>\n</tr>\n<tr>\n<td>A</td>\n<td>B</td>\n<td>Cherry</td>\n</tr>\n</table>`
}
]
}
]
};

function getInlineTagHelp(tagName) {
  if (tags[tagName] === undefined) {
    return 'tag unknown; no help available';
  } else {
    return tagName + ': ' + tags[tagName].description;
  }
}

function getInlineTextHelp() {
  return 'text';
}

export { tags, tutorial, getInlineTagHelp, getInlineTextHelp };
