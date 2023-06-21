import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import RoutineTodo from '../components/routine/RoutineTodo';
import RoutineCalendar from '../components/routine/RoutineCalendar';

const RoutinePage = () => {
  return (
    <RoutinePageLayout>
      <PageTitle title="Stretching Routine" />
      <ContentContainer>
        <RoutineTodo />
        <RoutineCalendar />
      </ContentContainer>
    </RoutinePageLayout>
  );
};

export default RoutinePage;

const RoutinePageLayout = styled.div`
  width: 77vw;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
