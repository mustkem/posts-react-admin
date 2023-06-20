import { useRecordContext } from "react-admin";

const MyUrlField = ({ source }: any) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <a style={{ fontWeight: "700" }} href={record[source]}>
      {record[source]}
    </a>
  );
};

export default MyUrlField;
