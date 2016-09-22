/**
 * Shims UI/MouseEvents to support event.path property
 * TODO extract and share
 */
export default function path(event) {
  if (event.path) {
    return event.path;
  }

  const pathArr = [];
  let node = event.target;
  while (node !== document.body && node.parentNode) {
    pathArr.push(node);
    node = node.parentNode;
  }
  return pathArr;
}
