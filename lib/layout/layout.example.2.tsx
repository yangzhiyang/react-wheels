import React from "react";

import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";

import "./layout.example.scss";

export default () => {
  return (
    <div>
      <h1>example 2</h1>
      <Layout className="layout">
        <Header className="header">Header</Header>
        <Layout>
          <Aside className="aside">Aside</Aside>
          <Content className="content">Content</Content>
        </Layout>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
};
