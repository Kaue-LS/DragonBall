import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main/Main'

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
  // O react strictMode, tem o papel de verificar os nosso componentes e dos seus filhosm nao é obrigatorio, mas é bom
  // o que ta ai vai direto ao root, o div no index.html
);

