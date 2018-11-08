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

export { tags, getInlineTagHelp, getInlineTextHelp };
