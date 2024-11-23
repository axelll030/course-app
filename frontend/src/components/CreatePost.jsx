import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().max(50).required(),
    userName: Yup.string().min(3).max(15).required(),
  });

  const navigate = useNavigate();

  const initialValues = {
    title: "",
    postText: "",
    userName: "",
  };

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:3001/posts", values)
      .then((response) => {
        if (response.status === 201) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="Enter post title..."
          />
          <ErrorMessage name="title" component="span" />
          <label>Post: </label>
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="Enter post text..."
          />
          <ErrorMessage name="postText" component="span" />
          <label>User Name: </label>
          <Field
            id="inputCreatePost"
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
