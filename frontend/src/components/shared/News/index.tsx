import React, { FC, useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Table from "./List/index";
import { setNewsTableData } from "api/instance";
import { useAsyncActions } from "hooks/useActions";

const News: FC = () => {
  const { setNewsTabaleData } = useAsyncActions();

  useEffect(() => {
    setNewsTableData(setNewsTabaleData);
  }, []);
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 360 }}
    >
      <Button style={{ marginBottom: "20px" }}>
        <Link to="/news/add"> Add News </Link>
      </Button>
      <Table />
    </div>
  );
};

export default News;
