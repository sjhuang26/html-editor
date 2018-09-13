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

const inlineTextHelp = 'text (not a tag)';

function getInlineTagHelp(tagName) {
  if (tagHelp[tagName] === undefined) {
    return 'no help available';
  } else {
    return tagHelp[tagName].title + ': ' + tagHelp[tagName].description;
  }
}

function getInlineTextHelp() {
  return inlineTextHelp;
}

export { tagHelp, getInlineTagHelp, inlineTextHelp, getInlineTextHelp };
