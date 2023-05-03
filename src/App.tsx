import { useState, useEffect } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Row from './Components/Row';
import Paper from '@mui/material/Paper';

import './App.css'

function App() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((fetch) => {
        setData(fetch.data.coins)
      })
    }, []);
  return (
    <>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ICON</TableCell>
            <TableCell align="left">NAME</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">HOUR</TableCell>
            <TableCell align="right">DAY</TableCell>
            <TableCell align="right">WEEK</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((coin: any, idx: number) => (
            <Row key={idx} name={coin.name} icon={coin.icon} price={coin.price} priceChange1h={coin.priceChange1h} priceChange1d={coin.priceChange1d} priceChange1w={coin.priceChange1w}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </>
  )
}

export default App
