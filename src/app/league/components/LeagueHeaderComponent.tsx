const LeagueHeaderComponent = () => {
    return (
        <>  
            <div className="h-32 bg-brandcolor text-white flex">
                <span className="text-8xl">롤파이트 공식리그</span>
                <button className="w-16 h-8 border rounded-sm">눌러보기</button>
            </div>
            <div className="w-full h-16 flex justify-around items-center">
                <div className="w-1/6 text-center">길드이름</div>
                <div className="w-1/4 text-center">설명</div>
                <div className="w-1/12 text-center">길드원</div>
                <div className="w-1/12 text-center">승</div>
                <div className="w-1/12 text-center">패</div>
                <div className="w-1/6 text-center">길드장</div>
            </div>
        </>
      
    );
};

export default LeagueHeaderComponent;
