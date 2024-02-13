import { MemberDTO } from "@/src/common/DTOs/member/member.dto";
import { useRouter } from "next/navigation";
import { FaRegQuestionCircle, FaArrowCircleRight } from "react-icons/fa";

interface Props {
  member: MemberDTO;
}
const GuildManagePage = (props: Props) => {
  const router = useRouter();
  const handleCreateGuild = () => {
    router.replace("/league/guild/create");
  };

  return (
    <div className="flex flex-col w-full h-full leading-5 pt-2 bg-white rounded ">
      <p className="font-bold text-xl p-5">길드</p>
      <div className="border-[#11235A] border-t-2 p-10">
        {props.member.memberGuild === null ? (
          <div className="flex w-full">
            <div className="flex flex-col w-full border-2 border-black rounded-lg p-7">
              <div className="mb-10">
                <p className="font-extrabold text-4xl">롤파이트에 오신것을</p>
                <p className="font-extrabold text-4xl">환영합니다</p>
              </div>
              <div className="mb-10">
                <p className="font-extrabold text-3xl text-brandcolor">
                  길드를 생성하세요
                </p>
                <p className="font-extrabold text-3xl text-brandcolor">
                  나만의 길드를 운영해보세요.
                </p>
              </div>
              <button
                className="flex h-45px rounded-lg w-200px items-center justify-center bg-brandcolor gap-2"
                onClick={handleCreateGuild}
              >
                <FaArrowCircleRight className="w-30px h-30px text-white" />
                <p className="text-3xl text-white">길드만들기</p>
              </button>
            </div>
            <div className="flex flex-col pl-5">
              <div className="flex w-full gap-2 pb-3">
                <FaRegQuestionCircle className="w-30px h-30px text-brandcolor" />
                <p className="font-extrabold text-2xl text-brandcolor">
                  롤파이트 길드란?
                </p>
              </div>
              <p className="text-lg">
                롤파이트 유저가 자신만의 길드를 만들어 원하는 다른 길드들과 함께
                롤파이트 전적시스템을 이용할 수 있습니다.
              </p>
              <div className="flex w-full gap-2 pb-3 pt-3">
                <FaRegQuestionCircle className="w-30px h-30px text-brandcolor" />
                <p className="font-extrabold text-2xl text-brandcolor">
                  어떻게 참여하나요?
                </p>
              </div>
              <p className="text-lg">
                길드생성을 하면 자동으로 롤파이트 공식 리그에 참여하여 참여 중인
                다른 길드들과 경쟁하세요.
              </p>
              <div className="flex w-full gap-2 pb-3 pt-3">
                <FaRegQuestionCircle className="w-30px h-30px text-brandcolor" />
                <p className="font-extrabold text-2xl text-brandcolor">
                  길드는 어떻게 만들수 있나요.
                </p>
              </div>
              <p className="text-lg">
                롤파이트 클라이언트를 통해 롤 계정 인증을 완료한 유저만 길드를
                생성할 수 있습니다. 길드를 생성해 강한팀을 만들어 보세요.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full border-y-2  gap-2">
            <div className="flex">
              <div className="w-40 bg-brandbgcolor border-b p-2">
                <p>아이디</p>
              </div>
              <div className="w-full p-2 border-b-2 pl-5">
                {props.member.memberId}
              </div>
            </div>
            <div className="flex">
              <div className="w-40 bg-brandbgcolor border-b p-2">
                <p>닉네임</p>
              </div>
              <div className="w-full p-2 border-y-2 pl-5">
                {props.member.memberName}
              </div>
            </div>
            <div className="flex">
              <div className="w-40 bg-brandbgcolor border-b p-2">
                <p>전화번호</p>
              </div>
              <div className="w-full p-2 border-y-2">
                {props.member.memberPhone}
              </div>
            </div>
            <div className="flex">
              <div className="w-40 bg-brandbgcolor p-2">
                <p>소속길드</p>
              </div>
              <div className="w-full border-t-2 p-2">
                {props.member.memberGuild}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuildManagePage;
