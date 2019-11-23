import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import { Layout, Header, Content, Footer, Aside } from "./lib/layout/layout";
import IconDemo from "./lib/icon/icon.demo";
import ButtonDemo from "./lib/button/button.demo";
import DialogDemo from "./lib/dialog/dialog.demo";
import LayoutDemo from "./lib/layout/layout.demo";
import FormDemo from "./lib/form/form.demo";

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
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/" component={IconDemo}></Route>
          <Route path="/icon" component={IconDemo}></Route>
          <Route path="/button" component={ButtonDemo}></Route>
          <Route path="/dialog" component={DialogDemo}></Route>
          <Route path="/layout" component={LayoutDemo}></Route>
          <Route path="/form" component={FormDemo}></Route>
        </Content>
      </Layout>
      <Footer className="site-footer">@冬霖yzy</Footer>
    </Layout>
  </Router>
);

ReactDom.render(page, document.querySelector("#root"));
