/**
 * Story component
 *
 * This component is responsible for adding a new or editing an existing
 * story.
 */

import React from "react";
import Layout from "../../components/Layout";
import Editor from "./Editor";

const title = 'Edit';

function action() {
  return {
    title,
    component: (
      <Layout>
        <Editor />
      </Layout>
    )
  };
}

export default action;