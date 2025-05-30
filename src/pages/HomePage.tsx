import Banner from "../banner/Banner";
import Card from "../card/Card";

import QuickLinks from "../Quick-Links/QuickLinks";

const HomePage = () => {
  return (
    <div>
      <div>
        <div className="divider"></div>
      </div>
      <Banner />
      <QuickLinks />
      <Card />
    </div>
  );
};

export default HomePage;
