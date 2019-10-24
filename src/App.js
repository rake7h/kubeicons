import React from 'react';
import Header from './components/header';
import IconCard from './components/icons-card';
import Gen from './components/gen';
import KubeIcons from './icons.json';

function App() {
  return (
    <div className="App">
      <Header/>
      <Gen/>

      <div className="app-des">
        <p>
          kubeicons.com is icons explorer for Kuberntes icons set. These icons are a way to standardize Kubernetes architecture diagrams for presentation. Having uniform architecture diagrams improve understandibility.
        </p>
      </div>
      <section className="icon-section">
        <div className="icon-section-header">
          <h1>Compute</h1>
        </div>
        <div className="icon-card-wrapper">
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
        </div>
      </section>
      <section className="icon-section">
        <div className="icon-section-header">
          <h1>Storage</h1>
        </div>
        <div className="icon-card-wrapper">
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
          <IconCard/>
        </div>
      </section>
      {console.log(KubeIcons)}
    </div>
  );
}

export default App;
