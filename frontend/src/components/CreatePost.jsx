import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const CreatePost = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().max(50).required(),
    userName: Yup.string().min(3).max(15).required(),
  });

  const initialValues = {
    title: "",
    postText: "",
    userName: "",
  };

  const handleSubmit = (values) => {
    axios.post("http://localhost:3001/posts", values).then((response) => {});
  };

  return (
    <div className="create-post-page">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-container">
          <label>Title: </label>
          <Field
            id="input-create-post"
            name="title"
            placeholder="Enter post title..."
          />
          <ErrorMessage name="title" component="span" />
          <label>Post: </label>
          <Field
            id="input-create-post"
            name="postText"
            placeholder="Enter post text..."
          />
          <ErrorMessage name="postText" component="span" />
          <label>User Name: </label>
          <Field
            id="input-create-post"
            name="userName"
            placeholder="Enter user name..."
          />
          <ErrorMessage name="userName" component="span" />
          <button type="submit">Create post</button>
        </Form>
      </Formik>
    </div>
  );
};
