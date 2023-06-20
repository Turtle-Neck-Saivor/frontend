import React from 'react';
import styled from 'styled-components';
import MatchingItem from './MatchingItem';
import { ItemProps } from '../../types/matching';

const MatchingList = ({ items }: { items: ItemProps[] }) => {
  return (
    <MatchingListLayout>
      {items &&
        items.map((item) => (
          <MatchingItem
            key={item.url}
            placeName={item.placeName}
            address={item.address}
            url={item.url}
          />
        ))}
    </MatchingListLayout>
  );
};

export default MatchingList;

const MatchingListLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  margin-bottom: 3rem;
`;
