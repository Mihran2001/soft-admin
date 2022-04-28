import React, { FC, useEffect } from "react";
import Table from "./List/index";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useAsyncActions } from "hooks/useActions";
import { setPostsTableDataApi } from "api/instance";

const Posts: FC = () => {
  const { setPostsTabaleData } = useAsyncActions();

  useEffect(() => {
    setPostsTableDataApi(setPostsTabaleData);
  }, []);
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 360 }}
    >
      <Button style={{ marginBottom: "20px" }}>
        <Link to="/posts/add"> Add Post </Link>
      </Button>
      <Table url="posts" />
    </div>
  );
};

export default Posts;
