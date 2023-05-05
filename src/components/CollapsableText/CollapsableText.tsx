import React, { useEffect, useState, useRef } from 'react';
import Button, { ButtonProps } from '../Button/Button';

const Toggle = ({ children, ...props }: ButtonProps) => (
  <Button color="link" size="sm" className="p-0 m-0 ms-2" {...props}>
    {children}
  </Button>
);

const modifyAnchorElementText = (element: string, linkText: string) => {
  const regex = /(<a[^>]*?>)([^<]*)(<\/a>)/gi;

  return element.replace(regex, (_match, openingTag, _oldText, closingTag) => openingTag + linkText + closingTag);
};

const collapseChildren = (text: string, maxLength: number) => {
  const anchorElementRegex = /<a[^>]*?href="([^"]*)"[^>]*?>([^<]*)<(\/a)>/gi;

  if(text.length <= maxLength){
    return text;
  }
  const matches = text.match(anchorElementRegex);

  const trimAndEllipsis = (trimText: string) => `${trimText.trim()}&hellip;`;

  if (!matches) {
    return trimAndEllipsis(text.substring(0, maxLength));
  }
  
  let truncatedText = '';
   
  let hyperLinkEndIndex = 0;
  for(let i = 0; i < matches.length; i += 1){
    const [anchorElement, url, linkText, endTag] = anchorElementRegex.exec(matches[i]) || [];

    if(!anchorElement || !url || !linkText || !endTag){
      // eslint-disable-next-line no-continue
      continue;
    }

    const linkStartIndex = text.indexOf(anchorElement);

    if (linkStartIndex >= maxLength) {
      truncatedText = `${truncatedText}${text.substring(hyperLinkEndIndex, maxLength)}`;
      break;
    } 

    const isLinkTextOverflown = linkStartIndex + linkText.length > maxLength;

    if(isLinkTextOverflown){
      const modifiedHyperlinkText = linkText.substring(0, maxLength - linkStartIndex);
      truncatedText = `${truncatedText}${text.substring(hyperLinkEndIndex, linkStartIndex)}${modifyAnchorElementText(anchorElement, modifiedHyperlinkText)}`;
    } else {
      truncatedText = `${truncatedText}${text.substring(hyperLinkEndIndex, text.indexOf(matches[i+1]) > maxLength ? maxLength : text.indexOf(matches[i+1]))}`;
    }

    if(i - 1 === matches.length){
      truncatedText = `${truncatedText}${text.substring(hyperLinkEndIndex, maxLength)}`;
    }

    hyperLinkEndIndex = linkStartIndex + anchorElement.length;
    anchorElementRegex.lastIndex = 0;
  }

  return trimAndEllipsis(truncatedText);
};

export interface CollapsableTextProps {
  children?: string;
  collapsed?: boolean;
  lessLabel?: React.ReactNode;
  maxLength?: number;
  moreLabel?: React.ReactNode;
}

const CollapsableText = ({
  children = '',
  collapsed: defaultCollapsed = true,
  lessLabel = 'Show Less',
  maxLength = 256,
  moreLabel = 'Show More',
}: CollapsableTextProps) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const toggle = () => setCollapsed(!collapsed);
  const collapsedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() =>{
    
    const {current: collapsedText } = collapsedTextRef;

    if(collapsedText){
      collapsedText.innerHTML = collapseChildren(children, maxLength);
    }
  }, [collapsedTextRef, maxLength, children, collapsed]);

  useEffect(() => setCollapsed(defaultCollapsed), [defaultCollapsed]);

  if (children.length < maxLength) {
    return <span dangerouslySetInnerHTML={{ __html: children }} />;
  }
  
  if (collapsed) {
    return (
      <>
        <span ref={collapsedTextRef}  />
        <Toggle onClick={() => toggle()}>{moreLabel}</Toggle>
      </>
    );
  }

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <span dangerouslySetInnerHTML={{ __html: children }} /><Toggle onClick={() => toggle()}>{lessLabel}</Toggle>
    </>
  );
};

CollapsableText.defaultProps = {
  children: '',
  collapsed: true,
  lessLabel: 'Show Less',
  maxLength: 256,
  moreLabel: 'Show More',
};

CollapsableText.displayName = 'CollapsableText';

export default CollapsableText;
