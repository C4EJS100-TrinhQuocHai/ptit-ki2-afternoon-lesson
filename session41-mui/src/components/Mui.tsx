import { Button, Pagination } from '@mui/material'
export default function Mui() {
  return (
    <div>
        Mui

          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Pagination count={10} />
          <Pagination count={10} color="primary" />
          <Pagination count={10} color="secondary" />
          <Pagination count={10} disabled />
    </div>
  )
}
