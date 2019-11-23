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
      <h1>example 3</h1>
      <Layout className="layout">
        <Header className="header">Header</Header>
        <Layout>
          <Content className="content">Content</Content>
          <Aside className="aside">Aside</Aside>
        </Layout>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
};
