import React from 'react';
import styled, { css } from 'styled-components';
import { ItemProps } from '../../types/matching';

const MatchingItem = ({ placeName, address, url }: ItemProps) => {
  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <MatchingItemLayout>
      <ItemContent>
        <p style={{ fontWeight: 600 }}>{placeName}</p>
        <p>{address}</p>
        <Link onClick={() => handleOpenNewTab(`${url}`)}>링크</Link>
      </ItemContent>
      <Border />
    </MatchingItemLayout>
  );
};

export default MatchingItem;

const MatchingItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  color: black;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #4589ff;
  cursor: pointer;
  &:hover {
    color: #c0d1ff;
  }
`;

const Border = styled.div`
  border-bottom: 0.5px solid #cfd7db;
`;
