import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';
import { FaSort } from "react-icons/fa";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.common.black,
        height: 40,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        height: 56,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function ConcileTable({ csvValues }) {
    return (
        <Row>
            <Col xs={6} lg={6} md={6} sm={6}>
                <TableContainer component={Paper}>
                    <Table className='reconcile-table'>
                        <TableHead>
                            <TableRow >
                                <StyledTableCell style={{ position: "sticky", left: 0, background: "#f5f5f5" }}>ID</StyledTableCell>
                                <StyledTableCell style={{ position: "sticky", left: 48, background: "#f5f5f5" }}>EMPLOYEE NAME</StyledTableCell>
                                <StyledTableCell>ASSIGNMENT</StyledTableCell>
                                <StyledTableCell>PAY PERIOD</StyledTableCell>
                                <StyledTableCell>RATE</StyledTableCell>
                                <StyledTableCell>HOURS</StyledTableCell>
                                <StyledTableCell>GROSS PAY</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {csvValues.map(csvData => (
                                <StyledTableRow key={csvData.id}>
                                    <StyledTableCell style={{ position: "sticky", left: 0, backgroundColor: "white" }}>{csvData.id}</StyledTableCell>
                                    <StyledTableCell style={{ position: "sticky", left: 48, backgroundColor: "white" }}>{csvData.employeeName}</StyledTableCell>
                                    <StyledTableCell>{csvData.assignment}</StyledTableCell>
                                    <StyledTableCell>{csvData.payPeriod}</StyledTableCell>
                                    <StyledTableCell>{csvData.rate}</StyledTableCell>
                                    <StyledTableCell>{csvData.hours}</StyledTableCell>
                                    <StyledTableCell>{csvData.grossPay}</StyledTableCell>
                                </StyledTableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Col>
            <Col xs={6} lg={6} md={6} sm={6}>
                <TableContainer component={Paper}>
                    <Table className='reconcile-table'>
                        <TableHead>
                            <TableRow >
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>EMPLOYEE NAME</StyledTableCell>
                                <StyledTableCell>ASSIGNMENT</StyledTableCell>
                                <StyledTableCell>PAY PERIOD</StyledTableCell>
                                <StyledTableCell>RATE</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Col>
        </Row>
    )
}

export default ConcileTable;