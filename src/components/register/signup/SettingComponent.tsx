import Link from "next/link";

const SettingComponent = () => {
  return (
    <>
      <span className="text-32px mb-4">
        릭레임 <p />
        비밀번호 주시겠수꽝
      </span>

      <div className="w-full">
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="text"
            placeholder="릭레임"
          />
        </div>
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="text"
            placeholder="비밀번호"
          />
        </div>
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="text"
            placeholder="비밀번호 화긴"
          />
        </div>
        <div className="border-b w-full"></div>
        <button className="flex font-medium bg-brandcolor text-white h-10 items-center justify-center rounded-md cursor-pointer my-4 w-full my-1">
          <Link href="/">가입완료</Link>
        </button>
      </div>
    </>
  );
};

export default SettingComponent;
