export default function Page() {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto w-1200px">
          <div className="flex justify-center items-center pt-24 mb-8">
            <span className="text-32px font-extrabold">롤파이트</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col border border-gray-200 rounded-md p-20 w-540px">
              <span className="text-32px mb-4">
                무자비하게 <p />
                우리와 함께하세요
              </span>
              <div className="w-full">
                {/* <button className="flex font-medium bg-yellow-400 h-10 items-center justify-center rounded-md cursor-pointer w-full my-2">카카오톡으로 로그인</button>
                            <button className="flex font-medium bg-green-400 h-10 items-center justify-center rounded-md cursor-pointer w-full my-2">구글로 로그인</button>
                            <button className="flex font-medium text-white bg-black h-10 items-center justify-center rounded-md cursor-pointer w-full my-2">애플로 로그인</button> */}
                {/* <div className="border-b w-full"></div> */}
                <div className="border border-gray-200 rounded-md my-4">
                  <input
                    className="w-full h-12 rounded-md px-2 bg-gray-100"
                    type="text"
                    placeholder="이메일"
                  />
                </div>
                <div className="border border-gray-200 rounded-md my-4">
                  <input
                    className="w-full h-12 rounded-md px-2 bg-gray-100"
                    type="text"
                    placeholder="비밀번호"
                  />
                </div>
                <div className="border-b w-full"></div>
                <button className="flex font-medium bg-black text-white h-10 items-center justify-center rounded-md cursor-pointer my-4 w-full my-1">
                  이메일로 로그인
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <span className="text-xs text-gray-700 font-bold mx-2">
                  회원가입
                </span>
                <span className="h-4 w-1px mx-1 bg-gray-700"></span>
                <span className="text-xs text-gray-700 font-bold mx-2">
                  비밀번호 찾기
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
