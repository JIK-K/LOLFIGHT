import Image from "next/image";
import logo from "../../../public/images/흰주먹해적단.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky w-full bg-brandcolor">
      <section className="w-1200px mx-auto h-16 flex justify-between items-center">
        <div className="flex items-center">
          <Image width={64} height={64} src={logo} alt="logo" />
          <p className="font-extrabold text-white ml-2 text-xl">
            <Link key="home" href={"/"}>
              LOL.FIGHT
            </Link>
          </p>
        </div>
        <div className="flex items-center">
          <Link
            href={"/register"}
            className="flex ml-4 text-black bg-white w-20 h-10 items-center justify-center rounded-md cursor-pointer"
          >
            로그인
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
