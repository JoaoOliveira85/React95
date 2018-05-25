import React from 'react';

import styled, { injectGlobal } from 'styled-components';

import woff2 from '../../assets/Pixelade.woff2';
import woff from '../../assets/Pixelade.woff';
import pattern from '../../assets/pattern/dropdown.png';

injectGlobal`
  @font-face {
    font-family: 'Pixelade';
    src: url('${woff2}') format('woff2'),
        url('${woff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #5aa;
  }

  * {
    font-family: 'Pixelade';
  }

  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    background: url('${pattern}');
    background-size: 3px 3px;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  ::-webkit-scrollbar-button {
    width: 15px;
    height: 15px;
    background-color: #c3c7cb;
    box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e;
    border-right: 2px solid black;
    border-bottom: 2px solid black;

    background-size: 10px 10px;
    background-repeat: no-repeat;
  }

  ::-webkit-scrollbar-button:end:decrement,
  ::-webkit-scrollbar-button:start:increment {
    display: none;
  }

  ::-webkit-scrollbar-button:vertical:start:decrement {
    background-image:
      linear-gradient(50deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(-50deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(to bottom, #ccc, #000);
    background-position: center -1px;
  }

  ::-webkit-scrollbar-button:vertical:end:increment {
    background-image:
      linear-gradient(130deg, transparent 45%, #c3c7cb 45%),
			linear-gradient(-130deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(to top, #ccc, #000);
      background-position: center 6px;
  }

  ::-webkit-scrollbar-button:horizontal:start:decrement {
    background-image:
      linear-gradient(150deg, #c3c7cb 45%, transparent 45%),
			linear-gradient(-150deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(to right, #ccc, #000);
      background-position: -1px 2px;
  }

  ::-webkit-scrollbar-button:horizontal:end:increment {
    background-image:
      linear-gradient(-30deg, #c3c7cb 45%, transparent 45%),
			linear-gradient(30deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(to left, #ccc, #000);
      background-position: 4px 1px;
  }

  ::-webkit-resizer {
    /* TODO? */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c3c7cb;
    box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
  }
`;

const Frame = storyFn => (
  <React.Fragment>
    { storyFn() }
  </React.Fragment>
);

export default Frame;