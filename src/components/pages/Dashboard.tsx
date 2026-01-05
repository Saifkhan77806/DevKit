import { Folder, FolderOpen, MoreVertical, Plus } from "lucide-react";
import { projects } from "../../data";
import { Button } from "../ui/button";
import { getProjectColor } from "../../lib/utils";
import { Link, Outlet, useParams } from "react-router-dom";
import { useScreenSize } from "../../hooks/use-mobile";
import { useEffect, useState } from "react";
import DialodformWrapper from "../blocks/DialodformWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProjectSchema } from "../../schemas/projectSchema";
import type z from "zod";
import FormError from "../blocks/FormError";

const Dashboard = () => {
  const { id } = useParams();
  const size = useScreenSize();
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [projectSize, setProjectSize] = useState<number>(8);

  useEffect(() => {
    setProjectSize(size === "sm" ? 3 : size === "md" ? 6 : 8);
  }, [size]);

  type projectSchemaType = z.infer<typeof createProjectSchema>;

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<projectSchemaType>({
    resolver: zodResolver(createProjectSchema),
  });

  const onSubmit = (data: projectSchemaType) => {
    console.log("project Upload schema", data);
  };

  return (
    <>
      <DialodformWrapper
        header="Create a new project"
        description="Set up a new project workspace to manage code, APIs, schemas, and environments—all in one place."
        isOpen={isProjectOpen}
        openChange={() => setIsProjectOpen(!isProjectOpen)}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex space-y-2 flex-col">
            <label
              htmlFor="projectName"
              className="text-sm text-left font-medium text-neutral-700 dark:text-neutral-300"
            >
              Project Name
            </label>
            <input
              id="projectName"
              type="text"
              {...register("projectName")}
              placeholder="Project name"
              className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            />
            <FormError message={errors?.projectName?.message} />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="mongourl"
              className="text-sm text-left font-medium text-neutral-700 dark:text-neutral-300"
            >
              Mongo Url
            </label>
            <input
              id="mongourl"
              type="text"
              {...register("mongodbUrl")}
              placeholder="Mongo Url"
              className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            />
            <FormError message={errors.mongodbUrl?.message} />
          </div>
          <Button
            type="submit"
            className="bg-secondary-my flex justify-center items-center cursor-pointer hover:bg-hard"
          >
            Create new project
          </Button>
        </form>
      </DialodformWrapper>
      <section className="px-4 poppins">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold my-3 ">Yours Projects</h1>
          <Button
            className="bg-secondary-my flex justify-center items-center cursor-pointer hover:bg-hard"
            onClick={() => setIsProjectOpen(!isProjectOpen)}
          >
            <Plus className="size-5" />
            Create Project
          </Button>
        </div>
        <div className="h-80 overflow-auto">
          <div className="flex flex-wrap gap-y-6 gap-x-2 my-5">
            {projects.slice(0, projectSize).map((item, index) => {
              const randomHex = getProjectColor(item.id);

              return (
                <Link to={String(item.id)} key={index}>
                  <div
                    className={`w-44 ${
                      item.id === Number(id)
                        ? "bg-gray-500/25"
                        : "bg-gray-200/25"
                    }  hover:bg-gray-500/25 rounded-lg p-3`}
                  >
                    <div className="flex justify-between">
                      {Number(id) === item.id && id ? (
                        <FolderOpen
                          className="size-6 stroke-white"
                          style={{
                            fill: randomHex,
                          }}
                        />
                      ) : (
                        <Folder
                          className="size-6"
                          style={{ fill: randomHex, stroke: "none" }}
                        />
                      )}
                      <Button
                        variant={"ghost"}
                        className="size-6 cursor-pointer"
                      >
                        <MoreVertical className="size-5" />
                      </Button>
                    </div>
                    <div className="truncate my-2">{item.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <p
            className="text-gray-400 cursor-pointer hover:text-gray-800"
            onClick={() => setProjectSize(projects.length)}
          >
            ...See More
          </p>
        </div>
        <div>
          {/* this part */}
          this is my project
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
