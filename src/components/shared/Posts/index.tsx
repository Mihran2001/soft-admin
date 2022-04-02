import React, { FC } from "react";
import Table from "../../Base/Table";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Posts: FC = () => {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 360 }}
    >
      <Button style={{ marginBottom: "20px" }}>
        <Link to="/posts/add"> Add Post </Link>
      </Button>
      <Table />
    </div>
  );
};

export default Posts;
