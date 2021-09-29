import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { initOptions, keycloak } from './utils/keycloakManager';
import { useHistory } from 'react-router-dom';

import './App.scss';

function App() {
  const history = useHistory();
	const handleOnKeycloakEvent = async (event: unknown, error: unknown) => {
		// console.log('event:', event);
		// console.log('error:', error);
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={initOptions}
      onEvent={(event, error) => handleOnKeycloakEvent(event, error)}
    >
      <div>
        origin app
      </div>
    </ReactKeycloakProvider>
  );
}

export default App;
