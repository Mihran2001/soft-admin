import React, { FC } from "react";
import Table from "../../Base/Table";

const Posts: FC = () => {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 360 }}
    >
      <Table />
    </div>
  );
};

export default Posts;
