import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MatchingMap from './MatchingMap';
import MatchingList from './MatchingList';
import { ItemProps } from '../../types/matching';

const MapContainer = ({ keyword }: { keyword: string }) => {
  const [items, setItems] = useState<ItemProps[]>([]);

  return (
    <MapContainerLayout>
      <MatchingMap keyword={keyword} items={items} setItems={setItems} />
      <MatchingList items={items} />
    </MapContainerLayout>
  );
};

export default MapContainer;

const MapContainerLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;
