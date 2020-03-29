import React, { useState } from "react";
import Header from "./components/header";
import IconBox from "./components/iconbox";
import DrawerRoot from "./components/drawer-root";
import { DrawerContext } from "./contexts/drawer-context.js";

import useSearch from "./utils/useSearch";
// import Gen from './components/gen';

function IconSet(props) {
  return (
    <section className="icon-section">
      <div className="icon-section-header">
        <h1>{props.iconset.label}</h1>
      </div>
      <div className="icon-card-wrapper">
        {props.iconset.icons.map(icon => (
          <div className="icon-card" key={icon.name}>
            <div className="icon-card-header">
              <span>{icon.label}</span>
            </div>
            <div className="icon-card-content">
              {icon.labeled && (
                <IconBox
                  svg={icon.labeled.svg}
                  png={icon.labeled.png}
                  name={icon.name}
                />
              )}
              {icon.unlabeled && (
                <IconBox
                  svg={icon.unlabeled.svg}
                  png={icon.unlabeled.png}
                  name={icon.name}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function SearchInput({ value, onChange, ...props }) {
  return (
    <div className="search-bar">
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Search 40 icons"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
function App() {
  const [query, setQuery] = useState();
  let filteredIcons = useSearch(query || "");

  function toggleDrawer() {
    open === true ? setOpen(false) :  setOpen(true)
  };

  let options = {
    position: "drawer-right",
  }

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <DrawerContext.Provider value={{open:open, toggleDrawer:toggleDrawer, options:options}}>
        <DrawerRoot />
        <Header />
        <div className="app-des">
          <p className="w-75">
            These icons are a way to standardize Kubernetes architecture
            diagrams for presentation. Having uniform architecture diagrams
            improve understandibility.
          </p>
        </div>
        <SearchInput
          value={query || ""}
          onChange={e => setQuery(e.target.value)}
        />
        {filteredIcons.length > 0 ? (
          filteredIcons.map(set => <IconSet iconset={set} key={set.name} />)
        ) : (
          <p>We could't find any icons matchnig {`"${query}"`}</p>
        )}
      </DrawerContext.Provider>
    </div>
  );
}

export default App;
