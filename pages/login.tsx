import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useMutation from "../lib/useMutation";
import Layout from "./components/layout";

interface FormInterface {
  username: string;
}

export default function CreateAccount() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormInterface>();

  const [login, { data }] = useMutation("/api/login");
  const onValid = (form: FormInterface) => {
    login(form);
  };

  useEffect(() => {
    if (!data?.ok && data?.message) {
      setError("username", { message: "not found username" });
    }
    if (data && data?.ok) {
      router.push("/");
    }
  }, [data]);

  return (
    <Layout>
      <h1 className="font-bold text-white text-xl mb-5">Login</h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col space-y-2"
      >
        <div className="flex justify-center items-center">
          <label className="mr-3 text-md text-white" htmlFor="username">
            username
          </label>
          <input
            {...register("username", {
              required: { value: true, message: "required" },
              minLength: { value: 3, message: "minLength is 3" },
              maxLength: { value: 12, message: "maxLength is 12" },
            })}
            type="text"
            placeholder="username"
            className="w-full p-2"
          />
        </div>
        <span className="text-red-500">
          {errors.username && errors.username.message}
        </span>
        <div className="flex flex-col">
          <button className="p-2 bg-gray-800 text-white">Login</button>
          <Link href={"/create-account"}>
            <a className="p-2 w-full bg-gray-300 text-center mt-3">Sign-up</a>
          </Link>
        </div>
      </form>
    </Layout>
  );
}
