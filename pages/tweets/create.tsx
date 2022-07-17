import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useMutation from "../../lib/useMutation";
import useUser from "../../lib/useUser";
import Layout from "../components/layout";

interface FormInterface {
  title: string;
  content: string;
}

export default function createTweet() {
  const { user } = useUser();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInterface>();
  const [postTweet, { data }] = useMutation(`/api/tweets/create`);

  const onValid = (form: FormInterface) => {
    postTweet(form);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push("/");
    }
  }, [data]);

  return (
    <Layout>
      <h1 className="font-bold text-white text-xl mb-5">Post Tweet</h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col space-y-1"
      >
        <label htmlFor="title" className="text-white text-sm">
          Title
        </label>
        <input
          {...register("title", {
            required: { value: true, message: "required" },
            maxLength: { value: 50, message: "maxLength is 50" },
          })}
          id="title"
          type="text"
        />
        <span className="text-red-500">
          {errors.title ? errors.title.message : ""}
        </span>
        <label className="text-white text-sm" htmlFor="content">
          Content
        </label>
        <textarea
          {...register("content", {
            required: { value: true, message: "required" },
            maxLength: { value: 500, message: "maxLength is 500" },
          })}
          className="h-32"
          id="content"
        />
        <span className="text-red-500">
          {errors.content ? errors.content.message : ""}
        </span>
        <button className="bg-blue-600 text-white py-3">Tweet</button>
      </form>
    </Layout>
  );
}
