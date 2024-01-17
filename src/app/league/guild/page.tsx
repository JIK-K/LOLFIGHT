import GuildBanner from "@/src/components/league/guild/GuildBanner.guild";

const blackurl = "/images/검은주먹해적단.png";

export default function Page() {
  return (
    <>
      <div className="w-full h-96">
        <div className="w-full h-full mx-auto">
          <GuildBanner
            guildName="marineClan"
            guildBanner="yaya"
            guildCreate="2000년 1월 1일"
            guildMaster="태양같은사나이"
            guildMembers={1}
            guildRank="99"
          />
          <div className="flex flex-col">
            <div className="bg-red-200 w-full h-4 mt-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
