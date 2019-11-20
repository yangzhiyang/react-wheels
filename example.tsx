import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import { Layout, Header, Content, Footer, Aside } from "./lib/layout/layout";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";

import "./example.scss";

const page = (
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <span>Wheels</span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            {/* <li>
              <NavLink to="/button">Button</NavLink>
            </li> */}
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/button" component={ButtonExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer className="site-footer">@冬霖yzy</Footer>
    </Layout>
  </Router>
);

ReactDom.render(page, document.querySelector("#root"));
