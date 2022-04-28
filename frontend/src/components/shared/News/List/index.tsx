import { Table as AntdTable } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { columns } from "helpers/postsTableData";
import { useAsyncActions } from "hooks/useActions";

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function Table() {
  const { newsTableData } = useTypedSelector((state) => state.news);
  const { deletePost } = useAsyncActions();

  return (
    <AntdTable
      columns={columns(deletePost)}
      dataSource={newsTableData}
      rowKey="_id"
      onChange={onChange}
    />
  );
}
