import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import Section from "../blocks/Section";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import AuthWrapper from "../blocks/AuthWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import { z } from "zod";
import FormError from "../blocks/FormError";
import { Spinner } from "../ui/spinner";

export const PasswordIcon = ({
  isVisible,
  className,
  onClick,
}: {
  isVisible: boolean;
  className?: string;
  onClick: () => void;
}) => {
  return isVisible ? (
    <EyeOff className={cn(className)} onClick={onClick} />
  ) : (
    <Eye className={cn(className)} onClick={onClick} />
  );
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  type formSchemaType = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: formSchemaType) => {
    console.log(data);
  };

  return (
    <AuthWrapper
      title="Welcome back to DevKit"
      subtitle="Access your projects, APIs, and developer tools securely."
      link={
        <Link
          to={"/signup"}
          className="text-sm w-fit text-gray-800 underline text-center"
        >
          Don't have an account ? - Sign-up
        </Link>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("email")}
            type="text"
            placeholder="xyz@gmail.com"
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            disabled={isSubmitting}
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
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder={showPassword ? "Pass#@$^13" : "••••••••"}
            className="rounded-md border border-neutral-300 px-3 py-2 pr-10 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            disabled={isSubmitting}
          />

          <PasswordIcon
            isVisible={showPassword}
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-8 h-5 w-5 cursor-pointer text-neutral-500 hover:text-neutral-700 dark:text-neutral-400"
          />
          <FormError message={errors.password?.message} />
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
            <>Sign in</>
          )}
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default Login;
