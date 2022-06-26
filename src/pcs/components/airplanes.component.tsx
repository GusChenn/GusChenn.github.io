import React from 'react';
import mockedData from './../resources/flights-mock-data.json';

interface IAirplanesProps {

};

// @ts-nocheck
const Airplanes = ({}: IAirplanesProps): React.ReactElement => {
  // @ts-ignore
  const dataFilter = (data) => {
    const filteredData = data.data.filter((flight: any) => flight.live !== null);
    return filteredData;
  };

  console.log(dataFilter(mockedData));

  dataFilter(mockedData);
  return (<div>
    <div>
      dslkfajds
    </div>
  </div>);
};

export default Airplanes;
