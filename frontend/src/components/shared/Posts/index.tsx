import React, { FC, useEffect } from "react";
import Table from "../../shared/Posts/Table/index";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Posts: FC = () => {
  // useEffect(() => {}, []);
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
