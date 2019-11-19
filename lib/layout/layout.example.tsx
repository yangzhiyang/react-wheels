import React from "react";

import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";

export default () => {
  return (
    <div>
      <div>
        <h1>example 1</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 2</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Header>Header</Header>
          <Layout>
            <Aside>Aside</Aside>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 3</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Aside>Aside</Aside>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 4</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Aside>Aside</Aside>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};
