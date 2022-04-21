import React, { FC, useCallback, useEffect, useMemo } from "react";
import EditOrCreate from "components/shared/EditOrCreate";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useAsyncActions } from "hooks/useActions";
import { useParams } from "react-router-dom";
import { createPostApi, editPostApi } from "api/instance";
import { useNavigate } from "react-router-dom";

const PostEditOrCreate: FC = () => {
  const { createPost, editPost } = useAsyncActions();
  const navigate = useNavigate();
  const { postsTableData } = useTypedSelector((state) => state.admin);
  const { id } = useParams();

  const findedPostData = postsTableData.find(
    (item) => (item as any)._id === id
  );

  const onSubmitCreate = (values: any) => {
    if (id === "add") {
      createPostApi(values, createPost);
      navigate("../posts", { replace: true });
    } else {
      editPostApi({ ...values, id }, editPost);
      navigate("../posts", { replace: true });
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
