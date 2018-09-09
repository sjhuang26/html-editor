function parseHTML(html) {
  return parseHTMLRecursive(html, 0, null, 0).result;
}

function parseHTMLRecursive(html, start, outerTag, depth) {
  logVerboseParse('recursive', '..'.repeat(depth), html.substring(start), outerTag);
  let result = [];
  let state = 'text';
  let tokenBegin = -1;
  let tagName = '';
  let i = start;
  for (; i < html.length; i++) {
    const x = html[i];
    if (tokenBegin === -1) {
      tokenBegin = i;
    }
    if (state === 'text') {
      if (x === '<') {
        state = 'tag';
        tagName = '';
        if (tokenBegin < i) {
          result.push({
            type: 'text',
            start: tokenBegin,
            end: i,
            content: html.substring(tokenBegin, i)
          });
        }
      }
    } else if (state === 'tag') {
      if (x === '>') {
        state = 'inside tag';
        tokenBegin = -1;
      } else {
        tagName += x;
      }
    } else if (state === 'inside tag') {
      state = 'text';
      tokenBegin = -1;
      if (outerTag !== null && tagName === '/' + outerTag) {
        break;
      } else {
        const recursiveResult = parseHTMLRecursive(html, i, tagName, depth + 1);
        result.push({
          type: 'tag',
          name: tagName,
          start: start,
          end: recursiveResult.newPosition,
          children: recursiveResult.result
        });
        i = recursiveResult.newPosition - 1;
      }
    }
  }
  const x = {
    newPosition: i,
    result: result
  };
  logVerboseParse('recursive', '..'.repeat(depth), 'returns', JSON.stringify(x));
  return x;
}

function traverseModel(model, position) {
  if (position.length === 0) {
    return null;
  } else {
    // the first position value is a special case
    let currentModel = model[position[0]];

    for (let i = 1; i < position.length; i++) {
      if (currentModel === undefined) {
        return null;
      }
      currentModel = currentModel.children[position[i]];
    }
    return currentModel;
  }
}

/*function logVerboseParse(...args) {
  console.log(...args); // eslint-disable-line no-console
}*/
function logVerboseParse() {
  // do nothing
}

export { parseHTML, traverseModel };
