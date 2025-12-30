import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";

const AuthWrapper = ({
  children,
  link,
  subtitle,
  title,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  link: React.ReactNode;
}) => {
  return (
    <Section className="px-4 poppins min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 text-center">
        {/* Logo */}
        <div className="mx-auto w-fit">
          <img
            src="/images/logo.png"
            alt="DevKit logo"
            className="h-16 w-40 object-contain"
          />
        </div>
        <div className="text-center -mt-4 mb-8">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className=" text-sm italic text-gray-700">
            {subtitle}
          </p>
        </div>

        {/* Form */}
        {children}
        {link}
      </div>
    </Section>
  );
};

export default AuthWrapper;
