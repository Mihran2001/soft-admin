import React, { FC } from "react";
import Table from "../../Base/Table";
import { Button } from "antd";

const Posts: FC = () => {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 360 }}
    >
      <Button style={{ marginBottom: "20px" }}>Add Post</Button>
      <Table />
    </div>
  );
};

export default Posts;
