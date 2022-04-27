import { useState, useEffect } from "react";
import CardJob from "./components/CardJob";
import { data } from "./utils/data";

function App() {

  const [dataToDisplay, setDataToDisplay] = useState(data);
  const [filterArr, setFilterArr] = useState(["Frontend", "CSS", "JavaScript"]);

  useEffect(() => {
    if (filterArr.length > 0) {
      let dataToFilter = [...data];
      const result = dataToFilter.filter(item => {
        let searchArr = [];
        searchArr.push(item.role);
        searchArr.push(item.level);
        searchArr.push(...item.languages);
        searchArr.push(...item.tools);

        let resultNumber = 0;
        for (let i = 0; i < filterArr.length; i++) {
          if (searchArr.includes(filterArr[i])) {
            resultNumber++
          }
        }
        return resultNumber === filterArr.length
      }
      );
      setDataToDisplay(result);
    } else {
      setDataToDisplay(data);
    }

  }, [filterArr]);

  const removeFilter = (index) => {
    let newFilter = [...filterArr];
    newFilter.splice(index, 1);
    setFilterArr(newFilter);
  }

  return (
    <main id="app">
      <header>
        <h1 className="sro">Job listings with filtering || FrontEnd Mentor Challenge || ThiCode</h1>
      </header>
      <section id="filter">
        {
          filterArr.length > 0 && (
            <div className="display-filter cw">
              <div className="filters">

                {
                  filterArr.map((item, k) => (
                    <div className="filter" key={k}>
                      <p className="name">
                        {item}
                      </p>
                      <button onClick={() => removeFilter(k)} aria-label="remove-filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" /></svg>
                      </button>
                    </div>
                  ))
                }
              </div>
              <button className="clear" onClick={() => setFilterArr([])}>
                Clear
              </button>
            </div>
          )
        }
      </section>
      <section id="job">
        {
          dataToDisplay.map((item, k) => (
            <CardJob key={k} item={item} filterArr={filterArr} setFilterArr={setFilterArr} />
          ))
        }
      </section>
    </main >
  );
}

export default App;
