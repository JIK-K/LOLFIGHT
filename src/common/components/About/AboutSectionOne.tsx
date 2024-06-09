import Image from "next/image";
import SectionTitle from "../Desktop/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-52 border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28 ">
          <div className="-mx-4 flex flex-wrap items-center h-350px">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="승리의 비결은 나를 아는것"
                paragraph="홈 화면에서는 나의 롤 계정의 최근 전적 상태와 랭크 티어 정보를 볼 수 있습니다. 본인 소환사의 이름을 눌러 나의 LOLFIGHT 계정에 등록 할 수 있습니다. "
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="최근전적" />
                    <List text="소환사 계정 등록" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="랭크티어" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 relative">
              <div className="relative mx-auto lg:mr-0 aspect-w-25 aspect-h-24">
                <Image
                  src="/images/homePage.png"
                  alt="about-image"
                  layout="responsive"
                  width={500}
                  height={1200}
                  className="mx-auto max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center h-500px">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="길드를 키우고 더 강한 팀으로"
                paragraph="LOLFIGHT는 길드 시스템으로 길드원을 모아서 다른 길드와 경쟁할 수 있습니다. 자신의 길드와 맞는 멤버를 찾고 최고의 팀워크를 자랑하는 길드가 되어보세요!"
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="길드정보" />
                    <List text="길드톡방" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="길드전" />
                    <List text="길드티어" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 relative">
              <div className="relative mx-auto  lg:mr-0 aspect-w-25 aspect-h-24">
                <Image
                  src="/images/guildPage.png"
                  alt="about-image"
                  layout="responsive"
                  width={500}
                  height={1200}
                  className="mx-auto max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
