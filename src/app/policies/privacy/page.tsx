import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Page() {
  return (
    <div className="w-full h-full h-96 mt-16 mb-14 bg-brandbgcolor dark:bg-dark">
      <div className="w-1200px mx-auto">
        <div className="privacy-header py-3 border-b-2 border-black dark:border-white">
          <p className="text-2xl font-extrabold">롤파이트 개인정보 처리방침</p>
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-xl font-bold">개인정보처리방침</p>
          <p className="font-light">
            &apos;lolfight.kr&apos;는 (이하 &apos;LOL.FIGHT&apos;는)
            &apos;정보통신망 이용촉진 및 정보보호&apos;에 관한 법률을 준수하고
            있으며, 고객님으로 부터 수집하는 개인정보 및 개인정보의 사용방법에
            대한 제반사항을 규정하기위해 작성되었습니다.
          </p>
        </div>
        {/* ①②③④⑤⑥⑦⑧⑨ 여기있다 */}
        <div className="flex flex-col mt-3">
          <p className="text-xl font-bold">개인정보 처리목적 및 수집항목 </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="dark:text-white">항목</TableCell>
                <TableCell className="dark:text-white">내용</TableCell>
                <TableCell className="dark:text-white">수집항목</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key="1">
                <TableCell className="dark:text-white">
                  회원가입 및 관리
                </TableCell>
                <TableCell className="dark:text-white">
                  ① 본인확인 및 개인식별확인
                  <br /> ② 서비스 부정 이용 방지
                  <br /> ③ 고지사항 또는 통지
                </TableCell>
                <TableCell className="dark:text-white">이메일 주소</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="dark:text-white">
                  마케팅 서비스 제공
                </TableCell>
                <TableCell className="dark:text-white">
                  ① 신규 서비스 제공
                  <br /> ② 광고 또는 이벤트 관련 정보 제공
                  <br /> ③ 회원의 서비스 유효성 관련 정보 제공
                </TableCell>
                <TableCell className="dark:text-white">이메일 주소</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="dark:text-white">수집정보</TableCell>
                <TableCell className="dark:text-white">
                  ① 고객이 정보통신기기를 이용하여 정보 통신망에 접속시
                  인터넷서비스제공자가 부여하는 고유 식별 주소 확인목적. <br />②
                  고객이 LOL.FIGHT에서 제공하는 실시간 서비스 이용 목적. <br />③
                  LOL.FIGHT에서 제공하는 서비스 이용 과정에서 발생된 기록, 로그,
                  비정상적으로 이용된 이용제한 기록의 확인 목적.
                </TableCell>
                <TableCell className="dark:text-white">
                  IP주소, 서비스 이용기록
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col mt-3">
          <p className="text-xl font-bold">개인정보 보유 및 이용기간 </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="dark:text-white">수집항목</TableCell>
                <TableCell className="dark:text-white">
                  처리 및 보유기간
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key="1">
                <TableCell className="dark:text-white">
                  회원의 이메일주소 및 식별자들
                </TableCell>
                <TableCell className="dark:text-white">
                  회원탈퇴 후 다른 사람이 탈퇴회원의 이메일주소 및 식별자들을
                  이용하여 즉시 재가입하는 것을 방지하기 위하여 회원
                  탈퇴일로부터 30일이 되는 날까지. 단, 탈퇴한 회원이라고
                  하더라도 해당 회원에 대하여 관계 법령 위반에 따른 수사 또는
                  소송절차가 진행되는 경우 해당 수사 또는 소송절차가 확정적으로
                  종결되는 날까지.
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="dark:text-white">
                  회원의 동의를 얻어 회사가 보유하게 된 개인정보에 해당하는
                  회원의 이메일주소
                </TableCell>
                <TableCell className="dark:text-white">
                  1. 전자상거래 등에서의 소비자보호에 관한 법률 ① 표시ㆍ광고에
                  관한 기록: 6개월 ② 계약 또는 청약철회 등에 관한 기록: 5년 ③
                  대금결제 및 재화등의 공급에 관한 기록: 5년 ④ 소비자의 불만
                  또는 분쟁처리에 관한 기록: 3년 2. 개인정보 보호법 미이용기간
                  1년 경과시 파기 또는 별도 분리 저장 및 관리 3. 통신비밀보호법
                  통신사실확인자료(로그기록자료): 3개월
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="dark:text-white">기타</TableCell>
                <TableCell className="dark:text-white">
                  고객의 개인정보 보유기간이 만료된 이후 개인정보보호법, 관계
                  법령에 의거하여 추가 기간 동안 보유 할 수 있다.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col mt-3">
          <p className="text-xl font-bold">개인정보 파기절차 및 방법</p>
          <ol className="font-light py-2">
            <li>
              ① 파기절차: 회사가 보유한 회원의 개인정보는 그 처리목적 달성 후
              또는 보유기간 경과 후 별도의 데이터베이스에 옮겨져 본
              개인정보처리방침 또는 관련 법령에 따라 일정 기간 저장(물리적
              형태로 저장된 개인정보는 별도의 공간으로 옮겨서 보관)된 후 또는
              즉시 파기 됩니다. 이 때 별도 데이터베이스 또는 별도 공간으로
              옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로
              이용되지 않습니다.
            </li>
            <li>
              ② 파기방법: 전자적 파일 형태로 기록 및 저장된 개인정보는 기록을
              재생할 수 없도록 파기하며, 물리적 형태(종이 등)로 기록 및 저장된
              개인정보는 파쇄하거나 소각하여 파기합니다.
            </li>
          </ol>
        </div>

        <div className="flex flex-col mt-3">
          <p className="text-xl font-bold">수집한 개인정보의 위탁 및 제공</p>
          <p className="font-light py-2">
            LOL.FIGHT는 고객님의 개인정보를 외부(타사)에 제공하지 않습니다.
          </p>
          <p>
            단, 아래의 경우에는 예외로 합니다.
            <br /> ① 이용자들이 사전에 동의한 경우
            <br />② 사이버수사대나 경찰서에서 요청한 경우
            <br />③ 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
            방법에 따라 수사기관의 요구가 있는 경우
          </p>
        </div>

        <div className="flex flex-col mt-3">
          <p className="text-xl font-bold">
            이용자 및 법정대리인의 권리와 행사방법
          </p>
          <div className="py-2">
            <p>
              ① 회원은 언제든지 「개인정보의 열람, 정정, 수정, 삭제, 처리의 중단
              요구」등 개인정보 보호에 필요한 권리를 모두 행사할 수 있습니다.
            </p>
            <p>
              ② 제1항에 따른 권리 행사는 회사에 대해 서비스 내 회원정보
              관리시스템을 통하여 할 수 있으며, 이 경우 10일 내 조치하도록
              하겠습니다.
            </p>
            <p>
              ③ 제1항에 따른 권리 행사는 회원의 대리인(법정대리인, 임의대리인
              모두 포함)을 통해 할 수 있습니다. 이 경우 회원은
              「개인정보처리방법에 관한 고시 제2020-7호」 별지 제11호 서식에
              따른 위임장을 제출하여야 합니다.
            </p>
            <p>
              ④ 개인정보보호법 제35조 제4항, 제37조 제2항에 의하여 회원의 권리가
              제한될 수 있습니다.
            </p>
            <p>
              ⑤ 처리 중인 개인정보가 다른 법령에서 수집 대상으로 명시되어 있는
              경우, 회원은 회사에 대하여 해당 개인정보의 삭제를 요구할 수
              없습니다.
            </p>
            <p>
              ⑥ 회원이 제1항 기재 권리를 행사할 때 그 회원이 본인인지 아니면
              정당한 위임을 받은 대리인인지 확인합니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-3">
          <p className="text-xl font-bold">개인정보관련 민원 서비스</p>
          <div className="py-2">
            <p>
              LOLFIGHT는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
              처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를
              지정하고 있습니다.
            </p>
            <p>이메일 : lolfight.help@gmail.com</p>
            <p>
              귀하께서는 LOLFIGHT의 서비스를 이용하시며 발생하는 모든
              개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로
              신고하실 수 있습니다. LOLFIGHT는 이용자들의 신고사항에 대해
              신속하게 충분한 답변을 드릴 것입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
