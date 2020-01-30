import React from 'react';

interface Segment {
  start: number;
  end: number;
  highlight: boolean;
}

interface HighlightProps {
  pattern: string;
  caseSensitive?: boolean;
  children: string;
}

const Highlight = ({ pattern, caseSensitive, children }: HighlightProps) => {
  const highlightedSegments = () => {
    const regex = new RegExp(pattern, caseSensitive ? 'g' : 'gi');

    const segments: Segment[] = [];
    let match: RegExpExecArray | null = regex.exec(children);

    while (match) {
      const start = match.index;
      const end = regex.lastIndex;

      if (end > start) segments.push({ start, end, highlight: true });

      if (match.index === regex.lastIndex) regex.lastIndex += 1;

      match = regex.exec(children);
    }

    return segments;
  };

  const getSegments = (highlighted: Segment[]) => {
    const segments: Segment[] = [];
    const addSegment = (start: number, end: number, highlight: boolean) => {
      if (end - start > 0) {
        segments.push({ start, end, highlight });
      }
    };

    if (highlighted.length === 0) {
      addSegment(0, children.length, false);
    } else {
      let lastIndex = 0;
      highlighted.forEach((segment) => {
        addSegment(lastIndex, segment.start, false);
        addSegment(segment.start, segment.end, true);
        lastIndex = segment.end;
      });

      addSegment(lastIndex, children.length, false);
    }
    return segments;
  };

  return (
    <div>
      {
        getSegments(highlightedSegments()).map(({ start, end, highlight }) => {
          const text = children.slice(start, end);
          if (highlight) {
            return <mark>{text}</mark>;
          }

          return text;
        })
      }
    </div>
  );
};

export default Highlight;
