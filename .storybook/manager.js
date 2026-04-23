import React from 'react';
import { addons, types, useParameter } from 'storybook/manager-api';
import { IconButton } from 'storybook/internal/components';
import { create } from 'storybook/theming/create';
import pkg from '../package.json';

const ADDON_ID = 'storybook/source-link';

const SourceLinkTool = () => {
  const sourceLink = useParameter('sourceLink', null);
  const prefix = useParameter('sourceLinkPrefix', null);
  const link = sourceLink ? (prefix ? `${prefix}${sourceLink}` : sourceLink) : null;

  if (!link) return null;

  return (
    <IconButton title={`View source: ${link}`} onClick={() => window.open(link)}>
      <svg viewBox="0 0 14 14" width="14" height="14" style={{ marginRight: 4 }}>
        <path
          d="M3.5 1.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25V1.75Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M5.75 4h2.5M5.75 6.5h2.5" stroke="currentColor" strokeWidth="1" />
      </svg>
      Source
    </IconButton>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(`${ADDON_ID}/tool`, {
    type: types.TOOLEXTRA,
    title: 'Source Link',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: SourceLinkTool,
  });
});

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: `react-gears ${pkg.version}`,
    brandUrl: 'https://github.com/appfolio/react-gears',
  }),
  sidebar: { showRoots: false },
});
