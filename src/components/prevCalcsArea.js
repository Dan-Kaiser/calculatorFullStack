import React from 'react';

const PrevCalcsArea = (props) => (
  <div className="prevCalcsArea">
    {props.recentArr.map((str, index) => {
      return <div key={index}>
        {str}
      </div>;
    })}
  </div>
)

export default PrevCalcsArea;