import React, { ReactNode } from 'react';

interface Segment {
  start: number;
  end: number;
  highlight: boolean;
}

interface HighlightProps {
  pattern: string;
  caseSensitive?: boolean;
  children: ReactNode;
}

const escapePattern = (pattern: string) => pattern.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');

const Highlight = ({ pattern, caseSensitive, children }: HighlightProps) => {
  const highlightedSegments = (text: string) => {
    const regex = new RegExp(escapePattern(pattern), caseSensitive ? 'g' : 'gi');

    const segments: Segment[] = [];
    let match: RegExpExecArray | null = regex.exec(text);

    while (match) {
      const start = match.index;
      const end = regex.lastIndex;

      if (end > start) segments.push({ start, end, highlight: true });

      if (match.index === regex.lastIndex) regex.lastIndex += 1;

      match = regex.exec(text);
    }

    return segments;
  };

  const getSegments = (text: string, highlighted: Segment[]) => {
    const segments: Segment[] = [];
    const addSegment = (start: number, end: number, highlight: boolean) => {
      if (end - start > 0) {
        segments.push({ start, end, highlight });
      }
    };

    if (highlighted.length === 0) {
      addSegment(0, text.length, false);
    } else {
      let lastIndex = 0;
      highlighted.forEach((segment) => {
        addSegment(lastIndex, segment.start, false);
        addSegment(segment.start, segment.end, true);
        lastIndex = segment.end;
      });

      addSegment(lastIndex, text.length, false);
    }
    return segments;
  };

  const renderChildren = (node: ReactNode) : ReactNode => {
    if (Array.isArray(node)) {
      return node.map(renderChildren);
    } else if (typeof node === 'string') {
      return getSegments(node, highlightedSegments(node)).map(({ start, end, highlight }) => {
        const text = node.slice(start, end);
        if (highlight) {
          return <mark className="p-0">{text}</mark>;
        }

        return text;
      });
    } else if (React.isValidElement(node)) {
      return React.cloneElement(node, [], renderChildren(node.props.children));
    }

    return node;
  };

  return renderChildren(children);
};

export default Highlight;
