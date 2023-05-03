import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

function Row(props: any) {
  return (
    <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component={"th"} align='left'>
            <img style={{width: "25px", height: "25px"}} src={props.icon}/>
            </TableCell>
              <TableCell component="th" scope="row" align='left'>
                {props.name}
              </TableCell>
              <TableCell align="right">{props.price}</TableCell>
              <TableCell align='right'>{props.priceChange1h < 0.0000 ? <ThumbDownAltIcon sx={{color: "red"}}/> : <ThumbUpAltIcon sx={{color: "green"}}/>}</TableCell>
              <TableCell align='right'>{props.priceChange1d < 0.0000 ? <ThumbDownAltIcon sx={{color: "red"}}/> : <ThumbUpAltIcon sx={{color: "green"}}/>}</TableCell>
              <TableCell align='right'>{props.priceChange1w < 0.0000 ? <ThumbDownAltIcon sx={{color: "red"}}/> : <ThumbUpAltIcon sx={{color: "green"}}/>}</TableCell>
            </TableRow>
  )
}

export default Row