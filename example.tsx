import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";

const page = (
  <Router>
    <div>
      <header>
        <div className="log">Wheels</div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/button" component={ButtonExample}></Route>
        </main>
      </div>
    </div>
  </Router>
);

ReactDom.render(page, document.querySelector("#root"));
