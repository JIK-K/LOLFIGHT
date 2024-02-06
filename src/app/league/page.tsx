import GuildInfoComponent from "../league/components/guildinfo/GuildInfoComponent";
import LeagueHeaderComponent from "./components/LeagueHeaderComponent";

const blackurl = "/images/검은주먹해적단.png";

export default function Page() {
  return (
    <>
      <div className="w-full h-full h-96 mt-16">
        <div className="w-1200px h-full mx-auto">
          <LeagueHeaderComponent />
          <div className="flex flex-col">
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
            ></GuildInfoComponent>{" "}
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
            ></GuildInfoComponent>{" "}
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
            ></GuildInfoComponent>{" "}
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
