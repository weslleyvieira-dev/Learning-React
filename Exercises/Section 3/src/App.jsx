import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.entries(EXAMPLES).map(([topicId, topicData]) => (
              <TabButton
                key={topicId}
                isSelected={selectedTopic === topicId}
                onSelect={() => handleSelect(topicId)}
              >
                {topicData.title}
              </TabButton>
            ))}
          </menu>
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a topic.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
