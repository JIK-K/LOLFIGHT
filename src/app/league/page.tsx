import GuildInfoComponent from "./../../components/league/GuildInfoComponent";

const blackurl = "/images/검은주먹해적단.png";

export default function Page() {
  return (
    <>
      <div className="w-full h-96">
        <div className="w-1200px h-full mx-auto">
          <div className="h-32 bg-gray-400">lolfight league</div>
          <div className="flex flex-col">
            <div className="bg-red-200 w-full h-4 mt-1"></div>
            <div className="bg-red-200 w-full h-4 mt-1"></div>
            <div className="bg-red-200 w-full h-4 mt-1"></div>
            <div className="bg-red-200 w-full h-4 mt-1"></div>
            <div className="bg-red-200 w-full h-4 mt-1"></div>
            <div className="bg-red-200 w-full h-4 mt-1"></div>
            <GuildInfoComponent
              guild={{
                icon: blackurl,
                name: "흰주먹해적단",
                tier: "흰주먹해적단은 무적의 해적단이다.",
                members: 100,
                win: 100,
                lose: 100,
                leader: "흰주먹",
              }}
            ></GuildInfoComponent>
          </div>
        </div>
      </div>
    </>
  );
}
