import EditOrCreate from "components/shared/EditOrCreate";
import { useTypedSelector } from "hooks/useTypedSelector";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostEditOrCreate: FC = () => {
  const { id } = useParams();
  // console.log(id);

  const { postsTableData } = useTypedSelector((state) => state.admin);
  const choosenPostData = postsTableData?.find((item) => item.id == id);

  // console.log("postTableData", postsTableData);
  console.log("choosenPost", choosenPostData);

  if (postsTableData.length) {
    return <>{id ? <EditOrCreate isEdit={true} /> : <EditOrCreate />}</>;
  } else {
    return <>loading</>;
  }
};

export default PostEditOrCreate;
