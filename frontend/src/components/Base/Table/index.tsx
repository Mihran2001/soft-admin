import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";

const columns = [
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
    width: "20%",
  },
  {
    title: "Category",
    dataIndex: "category",
    width: "20%",

    // sorter: (a: any, b: any) => a.age - b.age,
  },

  {
    title: "Content",
    dataIndex: "content",
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
    width: "40%",
  },

  // {
  //   title: "Parent category",
  //   dataIndex: "parentCategory",
  //   width: "20%",
  // },
  // {
  //   title: "Title tag",
  //   dataIndex: "titleTag",
  //   width: "20%",
  // },

  {
    title: "Action",
    key: "action",
    render: (text: string, record: any) => (
      <Space size="middle">
        <Link to="/posts/edit">Edit</Link>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function () {
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}
