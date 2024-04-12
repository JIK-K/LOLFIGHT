import Link from "next/link";
import boardNavLinks from "@/src/data/boardNavLinks";

const BoardNavComponent = () => {
  return (
    <div>
      <div className="shadow-md">
        <div className="flex flex-col w-52 leading-5 bg-white pt-2">
          {boardNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden h-8 items-center font-medium text-gray-900 dark:text-gray-100 sm:flex ml-8 my-2"
              >
                {link.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BoardNavComponent;
