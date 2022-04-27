import React from "react";

const CardJob = ({ item, filterArr, setFilterArr }) => {
  let filterDisplayArr = [];
  filterDisplayArr.push(item.role);
  filterDisplayArr.push(item.level);
  filterDisplayArr.push(...item.languages);
  filterDisplayArr.push(...item.tools);

  const addFilter = (item) => {
    if (!filterArr.includes(item)) {
      let newFilter = [...filterArr];
      newFilter.push(item);
      setFilterArr(newFilter);
    }
  };

  return (
    <div className={`card cw${item?.featured ? " featured" : ""}`}>
      <div className="card__body">
        <img src={item?.logo} alt="logo" width="88" height="88" />
        <div className="in-body">
          <div className="data">
            <span className="company">{item?.company}</span>
            {item?.new && <span className="new">new!</span>}
            {item?.featured && <span className="featured">featured</span>}
          </div>
          <h2>{item?.position}</h2>
          <div className="more-info">
            <span>{item?.postedAt}</span>
            <span>{item?.contract}</span>
            <span>{item?.location}</span>
          </div>
        </div>
      </div>
      <div className="card__footer">
        {filterDisplayArr.map((item, k) => (
          <div onClick={() => addFilter(item)} key={k}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardJob;
