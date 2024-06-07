import React from 'react';
import Spinner from '../Spinner/Spinner';
import Toast from './Toast';
import ToastBody from './ToastBody';
import ToastHeader from './ToastHeader';

export default {
  title: 'Toast',
  component: Toast,
  parameters: {
    sourceLink: 'Toast/Toast.tsx',
  },
};

export const Colors = (args) => (
  <div>
    <div className="p-3 my-2 rounded">
      <Toast {...args}>
        <ToastHeader>default</ToastHeader>
        <ToastBody>This is a toast on a white background — check it out!</ToastBody>
      </Toast>
    </div>
    <div className="p-3 bg-primary my-2 rounded">
      <Toast>
        <ToastHeader>primary</ToastHeader>
        <ToastBody>This is a toast on a primary background — check it out!</ToastBody>
      </Toast>
    </div>
    <div className="p-3 bg-secondary my-2 rounded">
      <Toast>
        <ToastHeader>secondary</ToastHeader>
        <ToastBody>This is a toast on a secondary background — check it out!</ToastBody>
      </Toast>
    </div>
    <div className="p-3 bg-success my-2 rounded">
      <Toast>
        <ToastHeader>success</ToastHeader>
        <ToastBody>This is a toast on a success background — check it out!</ToastBody>
      </Toast>
    </div>
    <div className="p-3 bg-danger my-2 rounded">
      <Toast>
        <ToastHeader>danger</ToastHeader>
        <ToastBody>This is a toast on a danger background — check it out!</ToastBody>
      </Toast>
    </div>
    <div className="p-3 bg-warning my-2 rounded">
      <Toast>
        <ToastHeader>warning</ToastHeader>
        <ToastBody>This is a toast on a warning background — check it out!</ToastBody>
      </Toast>
    </div>
    <div className="p-3 bg-info my-2 rounded">
      <Toast>
        <ToastHeader>info</ToastHeader>
        <ToastBody>This is a toast on an info background — check it out!</ToastBody>
      </Toast>
    </div>
    <div className="p-3 bg-dark my-2 rounded">
      <Toast>
        <ToastHeader>dark</ToastHeader>
        <ToastBody>This is a toast on a dark background — check it out!</ToastBody>
      </Toast>
    </div>
    <div className="p-3 bg-light my-2 rounded">
      <Toast>
        <ToastHeader>light</ToastHeader>
        <ToastBody>This is a toast on a light background — check it out!</ToastBody>
      </Toast>
    </div>
    <div className="p-3 my-2 rounded" style={{ background: 'black' }}>
      <Toast>
        <ToastHeader>custom</ToastHeader>
        <ToastBody>This is a toast on a black background — check it out!</ToastBody>
      </Toast>
    </div>
  </div>
);

export const HeaderIcons = (args) => (
  <div>
    <Toast {...args}>
      <ToastHeader icon="primary">primary</ToastHeader>
      <ToastBody>This is a toast with a primary icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="secondary">secondary</ToastHeader>
      <ToastBody>This is a toast with a secondary icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="success">success</ToastHeader>
      <ToastBody>This is a toast with a success icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="danger">danger</ToastHeader>
      <ToastBody>This is a toast with a danger icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="warning">warning</ToastHeader>
      <ToastBody>This is a toast with a warning icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="info">info</ToastHeader>
      <ToastBody>This is a toast with an info icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="dark">dark</ToastHeader>
      <ToastBody>This is a toast with a dark icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="light">light</ToastHeader>
      <ToastBody>This is a toast with a light icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon={<Spinner />}>custom</ToastHeader>
      <ToastBody>This is a toast with a custom icon — check it out!</ToastBody>
    </Toast>
  </div>
);
