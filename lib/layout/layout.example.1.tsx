import React from "react";

import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

import "./layout.example.scss";

export default () => {
  return (
    <div>
      <h1>example 1</h1>
      <Layout className="layout">
        <Header className="header">Header</Header>
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
};
