import React, { ReactElement } from 'react';

import './App.css';
import { SiteInfoContainer } from 'components/siteInfo/SiteInfoContainer';

const App = (): ReactElement => (
  <div className="App">
    <SiteInfoContainer />
  </div>
);

export default App;
