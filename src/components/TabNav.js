import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./Home"
import CharacterList from "./CharacterList"
import LocationsList from "./LocationsList"


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return (
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
            {/* <Route path="/episodes/" component={LocationsList} /> */}
          </div>
        </Router>
      );
};

