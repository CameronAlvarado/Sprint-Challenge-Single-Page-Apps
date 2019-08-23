import React from "react";
import { Tab } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./Home"
import CharacterList from "./CharacterList"
import LocationsList from "./LocationsList"
import EpisodeList from "./EpisodeList"

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

export default function TabNav() {
    // const panes = [
    //     { menuItem: 'Home', render: () => <Tab.Pane><Home /></Tab.Pane> },
    //     { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList /></Tab.Pane> },
    //     { menuItem: 'Locations', render: () => <Tab.Pane><LocationsList /></Tab.Pane> },
    //     { menuItem: 'Episodes', render: () => <Tab.Pane><EpisodeList /></Tab.Pane> },
    //   ]
      
    //   const TabNav = () => <Tab panes={panes} />

    //   export default TabNav

    return (
        <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/characters/">Characters</NavLink>
                </li>
                <li>
                  <NavLink to="/locations/">Locations</NavLink>
                </li>
                <li>
                  <NavLink to="/episodes/">Episodes</NavLink>
                </li>
              </ul>
            </nav>
    
            <Route path="/" exact component={Home} />
            <Route path="/characters/" component={CharacterList} />
            <Route path="/locations/" component={LocationsList} />
            <Route path="/episodes/" component={EpisodeList} />
          </div>
        </Router>
        </div>
      );
};

