import React from 'react';

const PrevCalcsArea = (props) => {
  if (props.recentArr) {
    return (
      <div className="prevCalcsArea">
        {props.recentArr.map((str, index) => {
          return <div key={index}>
            {str}
          </div>;
        })}
      </div>
    )
  } else {
    return null;
  }
}

export default PrevCalcsArea;