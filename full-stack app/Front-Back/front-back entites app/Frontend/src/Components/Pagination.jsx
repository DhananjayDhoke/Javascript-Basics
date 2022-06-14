import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({getpage}) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    
  };

  return (
    <Stack spacing={2} style={{"margin":"auto"}}>
      <Typography>{getpage(page)}</Typography>
      
      <Pagination count={3} page={page} onChange={handleChange} />
    </Stack>
  );
}
