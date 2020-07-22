import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      width: 100vw;
      height: 100vh;
   }

   #root {
      width: 100%;
      height: 100%;
   }
`;

ReactDOM.render(
	<React.Fragment>
		<GlobalStyle />
		<App />
	</React.Fragment>,
	document.getElementById('root')
);
