import React, { FC } from "react";
import EditOrCreate from "components/shared/EditOrCreate";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useAsyncActions } from "hooks/useActions";
import { useParams } from "react-router-dom";
import { createPostApi, editPostApi } from "api/instance";
import { useNavigate } from "react-router-dom";

const NewsEditOrCreate: FC = () => {
  const { createPost, editPost } = useAsyncActions();
  const navigate = useNavigate();
  const { newsTableData } = useTypedSelector((state) => state.news);
  const { id } = useParams();

  const findedNewsData = newsTableData.find((item) => (item as any)._id === id);

  const onSubmitCreate = (values: any) => {
    if (!!id) {
      createPostApi(values, createPost);
      navigate("../news", { replace: true });
    } else {
      editPostApi({ ...values, id }, editPost);
      navigate("../news", { replace: true });
    }
  };

  return (
    <EditOrCreate
      isEdit={!!id}
      postData={findedNewsData}
      onSubmit={onSubmitCreate}
    />
  );
};

export default NewsEditOrCreate;
