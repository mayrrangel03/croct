import Inicio from './Inicio.tsx'
import {CroctProvider} from '@croct/plug-react';
import React from 'react';
function App() {
    return (
      <CroctProvider appId="00000000-0000-0000-0000-000000000000">
          <Inicio/>
      </CroctProvider>
 
    );
  }
export default App;
