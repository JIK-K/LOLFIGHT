import { MemberDTO } from "@/src/common/DTOs/member/member.dto";
import { useState } from "react";
import CustomAlert from "../../../common/components/alert/CustomAlert";
import { login, update } from "@/src/api/member.api";
import { useRouter } from "next/navigation";

interface Props {
  member: MemberDTO;
}
const ChangePasswordPage = (props: Props) => {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const handleCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
  };
  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const handleChangeButton = () => {
    if (currentPassword && newPassword) {
      login(props.member.memberId, currentPassword)
        .then((response) => {
          if (response.data.isSuccess === "F") {
            CustomAlert("warning", "비밀번호 변경", "비밀번호를 확인해주세요.");
            return;
          } else {
            if (newPassword.length < 8) {
              CustomAlert(
                "warning",
                "비밀번호 변경",
                "비밀번호는 8글자 이상 작성해주세요."
              );
              return;
            } else {
              const member: MemberDTO = props.member;
              member.memberPw = newPassword;
              update(
                member.id,
                member.memberId,
                member.memberPw,
                member.memberName,
                member.memberGuild,
                member.memberGame
              )
                .then((response) => {
                  CustomAlert(
                    "success",
                    "비밀번호 변경",
                    "성공적으로 비밀번호를 변경했습니다."
                  );
                  sessionStorage.clear();
                  router.replace("/register");
                })
                .catch((error) => {
                  CustomAlert("error", "비밀번호 변경", "에러2");
                });
            }
          }
        })
        .catch((error) => {
          CustomAlert("error", "비밀번호 변경", "에러");
        });
    } else {
      CustomAlert("warning", "비밀번호 변경", "정보를 모두 작성해주세요.");
    }
  };
  return (
    <div className="w-1200px h-full pt-48 mx-auto">
      <p className="pb-5 text-xl font-normal border-b border-gray-200">
        비밀번호 변경
      </p>
      <div className="flex flex-col  gap-2 py-5 mt-4">
        <div className="flex border-y-2 dark:border-brandgray">
          <div className="flex w-32 bg-brandbgcolor dark:bg-black p-2 justify-center">
            현재 비밀번호
          </div>
          <input
            className="borde-2 p-2 w-full"
            placeholder="현재 비밀번호를 입력하세요."
            type="password"
            onChange={handleCurrentPassword}
          ></input>
        </div>
        <div className="flex border-y-2 dark:border-brandgray">
          <div className="flex w-32 bg-brandbgcolor dark:bg-black p-2 justify-center">
            새 비밀번호
          </div>
          <input
            className="borde-2 p-2 w-full"
            placeholder="새 비밀번호를 입력하세요."
            type="password"
            onChange={handleNewPassword}
          ></input>
        </div>

        <button
          className="w-full bg-brandcolor rounded p-2"
          onClick={handleChangeButton}
        >
          <p className="text-white font-extrabold tracking-widest">
            비밀번호 변경
          </p>
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
