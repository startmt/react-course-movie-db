import { Tag } from "antd";

interface CategoryTagProps {
  type: number;
}

const CategoryTag: React.FC<CategoryTagProps> = (props) => {
  const { children, type } = props;

  switch (type) {
    case 35:
      return <Tag color="red">{children}</Tag>;
    case 28:
      return <Tag color="blue">{children}</Tag>;
    case 12:
      return <Tag color="green">{children}</Tag>;
    case 878:
      return <Tag color="geekblue">{children}</Tag>;
    default:
      return <Tag>{children}</Tag>;
  }
};

export default CategoryTag;
