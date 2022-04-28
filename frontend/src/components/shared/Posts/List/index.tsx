import { Table as AntdTable, Tag, Space, Button } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { columns } from "helpers/postsTableData";
import { useAsyncActions } from "hooks/useActions";
import { deletePostApi } from "api/instance";

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}

interface Props {
  url?: string;
}

const Table: React.FC<Props> = ({ url }: any) => {
  const { postsTableData } = useTypedSelector((state) => state.posts);
  const { deletePost } = useAsyncActions();

  return (
    <AntdTable
      columns={columns(deletePost, url, deletePostApi)}
      dataSource={postsTableData}
      rowKey="_id"
      onChange={onChange}
    />
  );
};

export default Table;
