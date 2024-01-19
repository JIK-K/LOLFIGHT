import GuildBanner from "@/src/components/league/guild/GuildBanner";
import GuildSummeryRecord from "@/src/components/league/guild/GuildSummeryRecord";

const blackurl = "/images/검은주먹해적단.png";

export default function Page() {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full mx-auto">
          <GuildBanner
            guildName="marineClan"
            guildBanner="yaya"
            guildCreate="2000년 1월 1일"
            guildMaster="태양같은사나이"
            guildMembers={1}
            guildRank="99"
          />
          <div className="flex flex-col mt-5 mb-5">
            <div className="w-1200px mx-auto h-full flex justify-between items-center ">
              <GuildSummeryRecord />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
