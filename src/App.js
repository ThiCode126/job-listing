import { useState } from "react";
import CardJob from "./components/CardJob";
import { data } from "./utils/data";

function App() {

  const [dataToDisplay, setDataToDisplay] = useState(data);
  const [filter, setFilter] = useState(["Frontend", "CSS", "JavaScript"]);

  return (
    <main id="app">
      <header>
        <h1 className="sro">Job listings with filtering || FrontEnd Mentor Challenge || ThiCode</h1>
      </header>
      <section id="filter">
        {
          filter.length > 0 && (
            <div className="display-filter cw">
              <div className="filters">

                {
                  filter.map((item, k) => (
                    <div className="filter">
                      <p className="name">
                        {item}
                      </p>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" /></svg>
                      </button>
                    </div>
                  ))
                }
              </div>
              <button className="clear" onClick={() => setFilter([])}>
                Clear
              </button>
            </div>
          )
        }
      </section>
      <section id="job">
        {
          dataToDisplay.map((item, k) => (
            <CardJob key={k} item={item} />
          ))
        }
      </section>
    </main>
  );
}

export default App;
