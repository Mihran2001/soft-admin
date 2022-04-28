import { Table as AntdTable } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { columns } from "helpers/postsTableData";
import { useAsyncActions } from "hooks/useActions";
import { deleteNewsApi } from "api/instance";

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}

interface Props {
  url?: string;
}

const Table: React.FC<Props> = ({ url }: any) => {
  const { newsTableData } = useTypedSelector((state) => state.news);
  const { deleteNews } = useAsyncActions();

  return (
    <AntdTable
      columns={columns(deleteNews, url, deleteNewsApi)}
      dataSource={newsTableData}
      rowKey="_id"
      onChange={onChange}
    />
  );
};

export default Table;
