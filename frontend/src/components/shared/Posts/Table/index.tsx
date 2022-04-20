import { Table as AntdTable, Tag, Space, Button } from "antd";
import { Link } from "react-router-dom";
import { useTypedSelector } from "hooks/useTypedSelector";
import { columns } from "helpers/postsTableData";
import { useAsyncActions } from "hooks/useActions";

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function Table() {
  const { postsTableData } = useTypedSelector((state) => state.admin);
  const { deletePost } = useAsyncActions();
  console.log("postsTableData", postsTableData);

  // console.log("postsTabledata", postsTableData);

  // const  data.map()

  return (
    <AntdTable
      columns={columns(deletePost)}
      dataSource={postsTableData}
      rowKey="_id"
      onChange={onChange}
    />
  );
}
