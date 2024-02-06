import { MemberDTO } from "@/src/common/DTOs/member/member.dto";

interface Props {
  member: MemberDTO;
}
const ProfileInfoPage = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-full leading-5 pt-2 bg-white rounded ">
      <p className="font-bold text-xl p-5">개인정보</p>
      <div className="border-[#11235A] border-t-2 p-10">
        <p className="pb-5 text-xl">개인정보 변경</p>
        <div className="flex flex-col w-full border-y-2 border">
          <div className="flex">
            <div className="w-40 bg-brandbgcolor border-b p-2">
              <p>아이디</p>
            </div>
            <div className="w-full p-2 border-b pl-5">
              {props.member.memberId}
            </div>
          </div>
          <div className="flex">
            <div className="w-40 bg-brandbgcolor border-b p-2">
              <p>닉네임</p>
            </div>
            <div className="w-full p-2 border-b pl-5">
              {props.member.memberName}
            </div>
          </div>
          <div className="flex">
            <div className="w-40 bg-brandbgcolor border-b p-2">
              <p>전화번호</p>
            </div>
            <div className="w-full p-2 border-b">
              {props.member.memberPhone}
            </div>
          </div>
          <div className="flex">
            <div className="w-40 bg-brandbgcolor p-2">
              <p>소속길드</p>
            </div>
            <div className="w-full p-2">{props.member.memberGuild}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoPage;
