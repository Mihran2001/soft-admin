import { Table as AntdTable, Tag, Space } from "antd";
import { Link } from "react-router-dom";
import { useTypedSelector } from "hooks/useTypedSelector";
import { columns } from "helpers/postsTableData";

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function Table() {
  const { postsTableData } = useTypedSelector((state) => state.admin);
  console.log("postsTabledata", postsTableData);

  // const  data.map()

  return (
    <AntdTable
      columns={columns}
      dataSource={postsTableData}
      onChange={onChange}
    />
  );
}
