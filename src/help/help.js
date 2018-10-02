/*
Contains strings used in help messages.
*/

const tagHelp = {
  html: {
    title: 'html',
    description: 'contains the whole website'
  },
  body: {
    title: 'body',
    description: 'contains all website content'
  },
  h1: {
    title: 'header #1',
    description: '1st largest header'
  },
  p: {
    title: 'paragraph',
    description: 'a paragraph of text'
  },
  a: {
    title: 'link',
    description: 'a hyperlink'
  }
};

const inlineTextHelp = 'text';

function getInlineTagHelp(tagName) {
  if (tagHelp[tagName] === undefined) {
    return 'tag unknown; no help available';
  } else {
    return tagName + ': ' + tagHelp[tagName].description;
  }
}

function getInlineTextHelp() {
  return inlineTextHelp;
}

export { tagHelp, getInlineTagHelp, inlineTextHelp, getInlineTextHelp };
