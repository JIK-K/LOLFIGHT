import { MemberDTO } from "@/src/common/DTOs/member/member.dto";

interface Props {
  member: MemberDTO;
}
const ChangePasswordPage = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-full leading-5 pt-2 bg-white rounded ">
      <p className="font-bold text-xl p-5">비밀번호 변경</p>
      <div className="border-[#11235A] border-t-2 p-10">
        {props.member.memberId}
      </div>
    </div>
  );
};

export default ChangePasswordPage;
