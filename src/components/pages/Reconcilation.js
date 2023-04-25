import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import "./../pages/recon.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';
import { useNavigate } from 'react-router';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.common.black,
        height:40,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        height:56,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function Reconcilation() {
    const datas = [
        {
            id:"R001",
            name: "Payroll Disperency Report",
            createdOn: "June 26, 2020 10:03 PM"
        },
        {
            id:"R002",
            name: "Transaction Reconcilation Log",
            createdOn: "July 2, 2020 1:04 PM"
        },
        {
            id:"R003",
            name: "Expense Dispute Tracker",
            createdOn: "July 5, 2020 09:17 AM"
        },
        {
            id:"R004",
            name: "Payment Disrepancy Log",
            createdOn: "July 10, 2020 10:22 AM"
        },
        {
            id:"R005",
            name: "Invoice Disperancy Report",
            createdOn: "July 10, 2020 10:22 AM"
        }
    ]

    const navigate =useNavigate()

 const handleClick = ()=>{
    navigate('/comparisionpage')
 }


    return (
        <Container fluid>
            <Row>
                <div className='recon-title col-lg-6 col-md-6 col-sm-6 col-6 float-start'>
                    Reconcilation
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 float-end col-6 button-div'>
                    <button className=' btn btn-primary button-new' onClick={handleClick}>
                        <AiOutlinePlus style={{ fontSize: "15px" }} />
                        New
                    </button>
                </div>
            </Row>
            <div className='recon-table'>
                <TableContainer component={Paper} className='recon-table'>
                    <Table>
                        <TableHead>
                            <TableRow className='table-row'>
                                <StyledTableCell>ID <FaSort className='sort-icon'/></StyledTableCell>
                                <StyledTableCell>NAME <FaSort className='sort-icon'/></StyledTableCell>
                                <StyledTableCell>CREATED ON <FaSort className='sort-icon'/></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas && datas.map(data => (
                                <StyledTableRow key={data.id}>
                                    <StyledTableCell>{data.id}</StyledTableCell>
                                    <StyledTableCell>{data.name}</StyledTableCell>
                                    <StyledTableCell>{data.createdOn}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    )
}

export default Reconcilation