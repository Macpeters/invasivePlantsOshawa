import React, { useState } from "react";
import CurrentAction from "../CurrentAction.js";
import PossibleAction from "../PossibleAction.js";

import DogStranglingVine from "../AllTabs/DogStranglingVine.js";
import GarlicMustard from "../AllTabs/GarlicMustard.js";
import HimalayanBalsam from "../AllTabs/HimalayanBalsam.js";
import JapaneseKnotweed from "../AllTabs/JapaneseKnotweed.js";
import Phragmites from "../AllTabs/Phragmites.js";
import PurpleLoosestrife from "../AllTabs/PurpleLoosestrife.js";
import RoseMultiflora from "../AllTabs/RoseMultiflora.js";
import TabNavItem from "../v2/TabNavItem";
import TabContent from "../v2/TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      <header className="App-header">
        <h1>
          <p>Invasive Plants</p>
          <p>Oshawa/Durham study</p>
        </h1>
      </header>

      <div>
        <CurrentAction />
      </div>

      <div>
        <PossibleAction />
      </div>

      <ul className="nav">
        <TabNavItem title="Dog Strangling Vine" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Garlic Mustard" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Himalyan Balsam" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Japanese Knotweed" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Phragmites" id="tab5" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Purple Loosestrife" id="tab6" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Rose Multiflora" id="tab7" activeTab={activeTab} setActiveTab={setActiveTab} />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <DogStranglingVine />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <GarlicMustard />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <HimalayanBalsam />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <JapaneseKnotweed />
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
          <Phragmites />
        </TabContent>
        <TabContent id="tab6" activeTab={activeTab}>
          <PurpleLoosestrife />
        </TabContent>
        <TabContent id="tab7" activeTab={activeTab}>
          <RoseMultiflora />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;