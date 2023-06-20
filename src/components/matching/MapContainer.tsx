import React, { useState } from 'react';
import styled from 'styled-components';
import MatchingMap from './MatchingMap';
import MatchingList from './MatchingList';
import { ItemProps } from '../../types/matching';

const MapContainer = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  return (
    <MapContainerLayout>
      <MatchingMap keyword="정형외과" setItems={setItems} />
      <MatchingList items={items} />
    </MapContainerLayout>
  );
};

export default MapContainer;

const MapContainerLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;
