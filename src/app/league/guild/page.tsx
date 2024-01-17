import GuildBanner from "@/src/components/league/guild/GuildBanner.guild";

const blackurl = "/images/검은주먹해적단.png";

export default function Page() {
  return (
    <>
      <div className="w-full h-96">
        <div className="w-full h-full mx-auto">
          <GuildBanner />
          <div className="flex flex-col">
            <div className="bg-red-200 w-full h-4 mt-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
