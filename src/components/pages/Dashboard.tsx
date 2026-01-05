import { Folder, FolderOpen, MoreVertical } from "lucide-react";
import { projects } from "../../data";
import { Button } from "../ui/button";
import { getProjectColor } from "../../lib/utils";
import { Link, Outlet, useParams } from "react-router-dom";
import { useScreenSize } from "../../hooks/use-mobile";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { id } = useParams();
  const size = useScreenSize();

  const [projectSize, setProjectSize] = useState<number>(8);

  useEffect(() => {
    setProjectSize(size === "sm" ? 3 : size === "md" ? 6 : 8);
  }, [size]);

  return (
    <section className="px-4 poppins">
      <div className="h-80 overflow-auto">
        <h1 className="text-3xl font-semibold my-3 ">Yours Projects</h1>
        <div className="flex flex-wrap gap-y-6 gap-x-2 my-5">
          {projects.slice(0, projectSize).map((item, index) => {
            const randomHex = getProjectColor(item.id);

            return (
              <Link to={String(item.id)} key={index}>
                <div
                  className={`w-44 ${
                    item.id === Number(id) ? "bg-gray-500/25" : "bg-gray-200/25"
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
                    <Button variant={"ghost"} className="size-6 cursor-pointer">
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
  );
};

export default Dashboard;
