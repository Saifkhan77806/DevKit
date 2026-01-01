import { useState } from "react";
import AuthWrapper from "../blocks/AuthWrapper";
import { Button } from "../ui/button";
import { PasswordIcon } from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/registerSchema";
import type z from "zod";
import FormError from "../blocks/FormError";
import { Spinner } from "../ui/spinner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  type registerSchemaType = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: registerSchemaType) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <AuthWrapper
      title="Get Started with DevKit"
      subtitle="Set up your workspace and generate production-ready APIs fast"
      link={
        <Link
          to={"/signin"}
          className="text-sm w-fit text-gray-800 underline text-center"
        >
          Already have an account ? - Sign-in
        </Link>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-sm text-left font-medium text-neutral-700 dark:text-neutral-300"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="saif khan"
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            disabled={isSubmitting}
          />
          <FormError message={errors.name?.message} />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-sm text-left font-medium text-neutral-700 dark:text-neutral-300"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="xyz@gmail.com"
            disabled={isSubmitting}
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          />
          <FormError message={errors.email?.message} />
        </div>

        {/* Password */}
        <div className="relative flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm text-left font-medium text-neutral-700 dark:text-neutral-300"
          >
            Password
          </label>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder={showPassword ? "Pass#@$^13" : "••••••••"}
            disabled={isSubmitting}
            className="rounded-md border border-neutral-300 px-3 py-2 pr-10 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          />

          <PasswordIcon
            isVisible={showPassword}
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-8 h-5 w-5 cursor-pointer text-neutral-500 hover:text-neutral-700 dark:text-neutral-400"
          />
          <FormError message={errors.password?.message} />
        </div>

        <div className="relative flex flex-col gap-1">
          <label
            htmlFor="cpassword"
            className="text-sm text-left font-medium text-neutral-700 dark:text-neutral-300"
          >
            Confirm Password
          </label>

          <input
            id="cpassword"
            {...register("confirmPassword")}
            type={showPassword ? "text" : "password"}
            placeholder={showPassword ? "Pass#@$^13" : "••••••••"}
            disabled={isSubmitting}
            className="rounded-md border border-neutral-300 px-3 py-2 pr-10 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          />

          <PasswordIcon
            isVisible={showPassword}
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-8 h-5 w-5 cursor-pointer text-neutral-500 hover:text-neutral-700 dark:text-neutral-400"
          />
          <FormError message={errors.confirmPassword?.message} />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient transition-transform hover:scale-[1.02]"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-x-2">
              {" "}
              <Spinner />
              Loading...
            </div>
          ) : (
            <>Sign Up</>
          )}
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default Register;
