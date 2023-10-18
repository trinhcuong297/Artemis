import Gallery from '../home/gallery';
import Text from '../home/text';
// import Hero from '../home/hero';
import Timer from '../home/timer';

const Index = () => {
  return (
    <div className="bg-gray-900">
      {/* <Hero /> */}
      <Timer />
      <Gallery />
      <Text />
    </div>
  );
};

export default Index;
