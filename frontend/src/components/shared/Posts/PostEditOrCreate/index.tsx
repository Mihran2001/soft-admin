import React, { FC, useCallback, useEffect, useMemo } from "react";
import EditOrCreate from "components/shared/EditOrCreate";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useAsyncActions } from "hooks/useActions";
import { useParams } from "react-router-dom";
import { createPostApi, editPostApi } from "api/instance";

const PostEditOrCreate: FC = () => {
  const { createPost, editPost } = useAsyncActions();

  const { postsTableData } = useTypedSelector((state) => state.admin);
  const { id } = useParams();

  const findedPostData = postsTableData.find(
    (item) => (item as any)._id === id
  );

  // console.log("id", id);

  const onSubmitCreate = (values: any) => {
    if (id === "add") {
      createPostApi(values, createPost);
    } else {
      editPostApi({ ...values, id }, editPost);
    }
  };

  return (
    <EditOrCreate
      isEdit={!!id}
      postData={findedPostData}
      onSubmit={onSubmitCreate}
    />
  );
};

export default PostEditOrCreate;
