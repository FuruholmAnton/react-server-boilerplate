import React from 'react';
import * as Routes from '../routes/Routes'

const Layout = props => {
  return (
     <div id="lwjgl-routes">
        <Match exactly={true} pattern="/" component={Routes.Home} />
        <Match exactly={true} pattern="/about" component={Routes.About} />
      </div>
  )
};
