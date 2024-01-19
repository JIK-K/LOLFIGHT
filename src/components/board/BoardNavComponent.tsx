import Link from "next/link";
import boardNavLinks from "@/src/data/boardNavLinks";

const BoardNavComponent = () => {
  return (
    <div className="">
      {" "}
      <div className="flex flex-col w-64 h-full leading-5">
        {boardNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden h-8 items-center font-medium text-gray-900 dark:text-gray-100 sm:flex ml-4"
            >
              {link.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BoardNavComponent;
