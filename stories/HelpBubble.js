import React from 'react';
import { Container } from 'reactstrap';
import { storiesOf } from '@kadira/storybook';

import HelpBubble from '../src/components/HelpBubble';

storiesOf('Help Bubble', module)
  .add('Default', () => (
    <Container className="m-t-1">
      <p>
        I can be placed in context to provide some contextual help!
        <HelpBubble title="What does this mean?" className="m-l-1" placement="bottom">
          Help bubbles are a handy way of explaining things.
        </HelpBubble>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat urna id pretium maximus. Phasellus ut cursus lectus. Ut at lobortis enim. In id enim luctus mi facilisis dapibus nec a nunc. Praesent vel facilisis erat. Donec porttitor ipsum at lacinia vehicula. Sed tristique tempor ante finibus imperdiet.
      </p>
      <p>
        Vivamus leo metus, vestibulum sit amet odio vitae, sagittis convallis nibh. Aliquam sed rhoncus diam, non dapibus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mi turpis. Phasellus tellus ipsum, ornare eget mi sed, consequat ornare mi. Curabitur posuere urna urna, nec imperdiet enim convallis non. Mauris finibus nisl fringilla, dictum justo nec, auctor purus.
      </p>
      <p>
        Vivamus neque urna, egestas nec tempor ut, semper non urna. Nunc ornare nec magna a gravida. In in lacus massa. Vivamus in ullamcorper sapien. Suspendisse a dapibus massa. Vivamus viverra volutpat ipsum sed feugiat. Nullam lacinia gravida enim at vulputate. Nam quis viverra nisl. Suspendisse dapibus commodo arcu vel facilisis. Maecenas consequat auctor ultrices.
      </p>
      <p>
        In non arcu commodo, porttitor felis non, porta lacus. Phasellus at venenatis velit. Aliquam erat volutpat. Cras hendrerit finibus turpis, sed rutrum ipsum auctor iaculis. Mauris congue odio purus, vulputate tempus enim rutrum volutpat. Vivamus quis lacus vel nisl elementum sollicitudin vel nec erat. Quisque non diam eget turpis blandit blandit. Duis sollicitudin, nisi quis sodales elementum, neque sem sagittis sem, ac volutpat justo quam at eros. Nunc consectetur, nunc eget euismod sodales, elit lorem iaculis turpis, sed elementum odio ipsum eleifend odio. Aliquam enim felis, consectetur blandit venenatis in, ullamcorper non est. Nunc porta urna sit amet risus mattis maximus. Maecenas bibendum tristique aliquam.
      </p>
      <p>
        Sed sed lectus nulla. Morbi gravida convallis tortor sed pulvinar. Proin eget commodo tortor. Aenean faucibus aliquam nulla. Phasellus elementum commodo magna sit amet egestas. Quisque luctus urna nec nisl porttitor dignissim. Nulla at quam efficitur, rutrum elit ac, placerat neque. Proin dignissim pellentesque risus ac viverra. Aliquam sit amet mauris nulla.
      </p>
    </Container>
  ));
