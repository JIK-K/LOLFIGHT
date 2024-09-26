import { MemberDTO } from "@/src/common/DTOs/member/member.dto";

interface Props {
  member: MemberDTO;
}
const ProfileInfoPage = (props: Props) => {
  return (
    <div className="w-1200px h-full mx-auto pt-4">
      <div className="flex justify-between items-center pb-5 border-b border-gray-200">
        <p className="text-xl font-normal">내 정보</p>
        <button className="bg-brandcolor text-white px-4 py-2 rounded hover:bg-brandhover">
          프로필 사진 변경
        </button>
      </div>
      <div className="flex mt-4">
        <div className="w-32 h-32 bg-black my-auto"></div>
        <div className="info-container flex-col ml-8">
          <div className="flex items-center">
            <p className="font-bold py-2 pr-8">이메일</p>
            <p>{props.member.memberId}</p>
          </div>
          <div className="flex items-center">
            <p className="font-bold py-2 pr-8">닉네임</p>
            {props.member.memberName}
          </div>
          <div className="flex items-center">
            <p className="font-bold py-2  pr-8">가입일</p>
            {props.member.createdAt?.toString().split("T")[0]}
          </div>
        </div>
      </div>
      <p className="pb-5 text-xl font-normal border-b border-gray-200 mt-8">
        계정 정보
      </p>
      <div className="flex pt-4 pb-16">
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="font-bold py-2 pr-8">인게임 닉네임</p>

            {props.member.memberGame?.gameName}
          </div>
          <div className="flex items-center">
            <p className="font-bold py-2 pr-24">티어</p>
            {props.member.memberGame?.gameTier}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoPage;
