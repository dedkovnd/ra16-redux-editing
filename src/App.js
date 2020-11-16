import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceAddClassBased from './components/ServiceAddClassBased';
import ServiceListClassBased from './components/ServiceListClassBased';
import {ServiceSearch} from "./components/ServiceSearch";

function App() {
  return (
      <>
          <ServiceSearch />
        <ServiceAdd />
        <ServiceList />
        <hr />
        {/*<ServiceAddClassBased />*/}
        {/*<ServiceListClassBased />*/}
      </>
  );
}

export default App;