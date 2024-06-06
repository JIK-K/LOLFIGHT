import SectionTitle from "../Desktop/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="주요 기능"
            paragraph="거기에는 있다 많은 기능들이. 이것들은 그 중 일부입니다. 더 많은 기능들을 확인해보세요."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
