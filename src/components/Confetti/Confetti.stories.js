import { array, boolean, number } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Button from '../Button/Button';
import ButtonToolbar from '../Button/ButtonToolbar';

import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalFooter from '../Modal/ModalFooter';
import ModalHeader from '../Modal/ModalHeader';
import ConfettiDropper from './Confetti';

export default {
  title: 'Confetti',
  component: ConfettiDropper,
  parameters: {
    sourceLink: 'Modal/Modal.js',
  },
};

export const SimpleExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Simple Modal</Button>
      <Modal isOpen={open} fade={false} fullscreen={null} size={null}>
        <ConfettiDropper
          numberOfPieces={number('numberOfPieces', 1000)}
          fullWidth={boolean('fullWidth', false)}
          recycle={false}
        />
        <ModalHeader toggle={() => setOpen(false)}>Modal title</ModalHeader>
        <ModalBody>Congrats!!!!</ModalBody>
        <ModalFooter>
          <ButtonToolbar>
            <Button color="primary" onClick={() => setOpen(false)}>
              Thank you
            </Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </ButtonToolbar>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const HeartsExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>♥ Open Hearts Modal ♥</Button>
      <Modal isOpen={open} fade={false} fullscreen={null} size={null}>
        <ConfettiDropper
          numberOfPieces={number('numberOfPieces', 1000)}
          fullWidth={boolean('fullWidth', false)}
          colors={[
            '#f8c9eb',
            '#f8e4e2',
            '#fe9dd0',
            '#eb78B8',
            '#8bd2f1',
            '#FF269B',
            '#FEA1E7',
            '#FBB657',
            '#FE4D84',
            '#6187DB',
          ]}
          drawShape={(ctx) => {
            ctx.save();
            ctx.beginPath();
            const dim = 20;
            const offset = dim / 5;
            ctx.moveTo(offset + 0, offset + dim / 2);
            ctx.lineTo(offset + dim / 2, offset + dim);
            ctx.lineTo(offset + dim, offset + dim / 2);
            ctx.moveTo(offset, offset + dim / 2);
            const radius = Math.sqrt((dim * dim) / 4 + (dim * dim) / 4) / 2;
            ctx.arc(
              offset + dim / 4,
              offset + dim / 4,
              radius,
              (Math.PI * 3) / 4,
              (Math.PI * 7) / 4
            );
            ctx.arc(
              offset + (3 * dim) / 4,
              offset + dim / 4,
              radius,
              (Math.PI * 5) / 4,
              Math.PI / 4
            );
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          }}
          recycle={false}
        />
        <ModalHeader toggle={() => setOpen(false)}>Modal title</ModalHeader>
        <ModalBody>♥♥♥♥♥♥♥♥ Congrats!!!! ♥♥♥♥♥♥♥♥</ModalBody>
        <ModalFooter>
          <ButtonToolbar>
            <Button color="primary" onClick={() => setOpen(false)}>
              Thank you
            </Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </ButtonToolbar>
        </ModalFooter>
      </Modal>
    </>
  );
};
