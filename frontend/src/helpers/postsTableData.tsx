import { Link } from "react-router-dom";
import { Table, Tag, Space } from "antd";

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

export const columns = [
  {
    title: "Title",
    dataIndex: "title",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
        children: [
          {
            text: "Yellow",
            value: "Yellow",
          },
          {
            text: "Pink",
            value: "Pink",
          },
        ],
      },
      {
        text: "Category 2",
        value: "Category 2",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],

    // filterMode: "tree",

    filterSearch: true,
    onFilter: (value: any, record: any) => record.name.includes(value),
    width: "28%",
  },
  {
    title: "Content",
    dataIndex: "content",
    width: "28%",
  },

  {
    title: "Category",
    dataIndex: "category",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value: any, record: any) => record.address.startsWith(value),
    filterSearch: true,
    width: "28%",
  },

  {
    title: "Action",
    key: "action",
    render: (text: string, record: any) => (
      <Space size="middle">
        <Link to="/posts/edit">Edit</Link>
        <a>Delete</a>
      </Space>
    ),
    width: "20%",
  },
];