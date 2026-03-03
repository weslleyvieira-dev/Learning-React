import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {Object.entries(EXAMPLES).map(([topicId, topicData]) => (
              <TabButton
                key={topicId}
                isSelected={selectedTopic === topicId}
                onClick={() => handleSelect(topicId)}
              >
                {topicData.title}
              </TabButton>
            ))}
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
