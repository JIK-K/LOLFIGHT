import headerNavLinks from "@/src/data/headerNavLinks";
import Link from "./Link";

const Navigation = () => {
  return (
    <div className="w-full">
      <div className="min-w-783">
        <div className="px-16 mx-auto h-12 flex justify-around items-center border-b-2">
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
            {headerNavLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
