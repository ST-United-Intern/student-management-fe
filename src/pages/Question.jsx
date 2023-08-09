import { Table } from "antd";
import { useQuestion } from "../hooks/useQuestion";

const Question = () => {
  const { data: listQuestion } = useQuestion();
  const dataTable =
    listQuestion?.length &&
    Object.keys(listQuestion[0]).reduce((prev, curr) => {
      prev[curr] = curr;
      return prev;
    }, {});
  const columns = [
    {
      title: "name",
      dataIndex: dataTable?.name,
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "desc",
      dataIndex: dataTable?.desc,
      key: "desc",
    },
    {
      title: "point",
      dataIndex: dataTable?.point,
      key: "point",
    },
  ];

  return <Table columns={columns} dataSource={listQuestion} />;
};
export default Question;
