import { Link } from "react-router-dom";
import { Table, Tag, Space, Button } from "antd";
import { deletePostApi } from "api/instance";
import { convertHTMLToString } from "components/TextEditor";

// export const postsData = (data: any) => [
//   {
//     key: "1",
//     title: "John Brown",
//     category: "32",
//     content: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     title: "John Brown",
//     category: "32",
//     content: "New York No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     title: "John Brown",
//     category: "32",
//     content: "New York No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     title: "John Brown",
//     category: "32",
//     content: "New York No. 1 Lake Park",
//   },
// ];

export const columns = (deletePost: any) => [
  {
    title: "Title",
    dataIndex: "title",
    width: "28%",
  },
  {
    title: "Content",
    dataIndex: "content",
    width: "28%",
    ellipsis: true,
    render: (value: string) => convertHTMLToString(value),
  },

  {
    title: "Category",
    dataIndex: "category",
    filters: [
      {
        text: "design",
        value: "design",
      },
      {
        text: "marketing",
        value: "marketing",
      },
      {
        text: "development",
        value: "development",
      },
    ],
    onFilter: (value: any, record: any) => record.category.startsWith(value),
    filterSearch: true,
    width: "28%",
  },

  {
    title: "Action",
    key: "action",
    dataIndex: "_id",
    render: (id: string, record: any) => (
      <Space size="middle">
        <Link to={`/posts/${id}`}>Edit</Link>
        <Button
          type="link"
          danger
          onClick={() => deletePostApi(id, deletePost)}
        >
          Delete
        </Button>
      </Space>
    ),
    width: "20%",
  },
];
