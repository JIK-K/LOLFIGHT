interface Props {
  guildLength: number;
}

const LeagueHeaderComponent = (props: Props) => {
  return (
    <>
      {/* <div className="flex w-full h-32 items-center dark:bg-dark dark:text-white">
        <span className="text-54px font-extrabold p-2">롤파이트 공식리그</span>
        <div className="flex w-50px rounded rounded-full bg-white text-black items-center p-1">
          <p className="pl-1 pr-1 font-extrabold text-sm">공식</p>
          <div className="flex w-8px h-8px bg-green-500 rounded-full rounded" />
        </div>
        <div className="pl-5">{props.guildLength}개의 길드 참여중</div>
      </div> */}
      <div className="flex">
        <div className="flex w-50px rounded rounded-full bg-white text-black items-center p-1">
          <p className="pl-1 pr-1 font-extrabold text-sm">공식</p>
          <div className="flex w-8px h-8px bg-green-500 rounded-full rounded" />
        </div>
        <div className="pl-5">{props.guildLength}개의 길드 참여중</div>
      </div>
      <div className="w-full h-30px flex justify-around items-center bg-brandcolor text-white dark:bg-dark font-thin mt-2 rounded-t">
        <div className="w-220px text-center">길드이름</div>
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
