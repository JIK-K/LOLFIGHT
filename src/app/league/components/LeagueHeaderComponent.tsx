const LeagueHeaderComponent = () => {
  return (
    <>
      <div className="flex w-full h-32 items-center bg-brandcolor text-white">
        <span className="text-54px font-extrabold p-2">롤파이트 공식리그</span>
        <div className="flex w-50px rounded rounded-full bg-white text-black items-center p-1">
          <p className="pl-1 pr-1 font-extrabold text-sm">공식</p>
          <div className="flex w-8px h-8px bg-green-500 rounded-full rounded" />
        </div>
        <div className="pl-5">22개의 길드 참여중(더미데이터)</div>
        {/* <button className="w-16 h-8 border rounded-sm">눌러보기</button> */}
      </div>
      <div className="w-full h-30px flex justify-around items-center bg-slate-200">
        <div className="w-1/6 text-center">길드이름</div>
        <div className="w-1/4 text-center">길드소개</div>
        <div className="w-1/12 text-center">길드원</div>
        <div className="w-1/12 text-center">승</div>
        <div className="w-1/12 text-center">패</div>
        <div className="w-1/12 text-center">티어</div>
        <div className="w-1/6 text-center">길드장</div>
      </div>
    </>
  );
};

export default LeagueHeaderComponent;
