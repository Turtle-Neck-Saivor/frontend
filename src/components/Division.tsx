import { Box } from '@mui/material';
import React from 'react';

/**
 * 구분선
 */

const Division = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          margin: '0 auto',
          width: '20rem',
          borderBottom: '1px solid #E9E9E9',
          mb: 5,
        }}
      />
    </React.Fragment>
  );
};

export default Division;
