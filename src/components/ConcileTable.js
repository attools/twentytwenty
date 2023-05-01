import React, { useState, useEffect } from 'react'
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


function ConcileTable({ csvValues, csvTargetValues, classs }) {

    const [showGroupedData, setShowGroupedData] = useState(false);
    const [clas, setClas] = useState();





    const compareCsvData = () => {
        const newRowClasses = [];
        if (csvValues.length === csvTargetValues.length) {
            for (let i = 0; i < csvValues.length; i++) {
                if (csvValues[i].employeeName !== csvTargetValues[i].employeeName) {
                    console.log(`Employee name does not match for row ${i}`);
                    newRowClasses[i] = "red-Color"
                }
                if (csvValues[i].assignments.length !== csvTargetValues[i].assignments.length) {
                    console.log(`Number of assignments does not match for row ${i}`);
                    newRowClasses[i] = "red-Color"
                } else {
                    for (let j = 0; j < csvValues[i].assignments.length; j++) {
                        if (csvValues[i].assignments[j].name !== csvTargetValues[i].assignments[j].name) {
                            console.log(`Assignment name does not match for row ${i}, assignment ${j}`);
                            newRowClasses[i] = "red-Color"
                        }
                        if (csvValues[i].assignments[j].grossPay !== csvTargetValues[i].assignments[j].grossPay) {
                            console.log(`Assignment grosspay does not match for row ${i}, assignment ${j}`);
                            newRowClasses[i] = "red-Color"
                        }
                        // Add more property comparisons as needed
                    }
                }
            }
            setClas(newRowClasses)
        } else {
            console.log("The number of rows in the two files is different");
        }
    }

    useEffect(() => {
        compareCsvData();
    }, [csvValues, csvTargetValues])


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
                            {csvValues.map(csvData => (<>
                                <StyledTableRow key={csvData.id}>
                                    <StyledTableCell style={{ position: "sticky", left: 0, backgroundColor: "white" }}>{csvData.id}</StyledTableCell>
                                    <StyledTableCell style={{ position: "sticky", left: 48, backgroundColor: "white" }}>{csvData.employeeName}</StyledTableCell>
                                    <StyledTableCell>{csvData.assignments.length} assignments</StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    {showGroupedData ? (
                                        <button onClick={() => setShowGroupedData(false)} className='btn-plus'></button>
                                    ) : (
                                        <button onClick={() => setShowGroupedData(true)} className='btn-plus'></button>
                                    )
                                    }

                                </StyledTableRow>
                                {showGroupedData &&
                                    csvData.assignments.map((assign, index) => {
                                        let rowClass = ''; // Initialize row class
                                        let i
                                        for (i = 0; i < csvValues.length; i++) {
                                            if (csvTargetValues[i].assignments[index]) { // Check if target value exists for this assignment
                                                if (assign.grossPay !== csvTargetValues[i].assignments[index].grossPay) {
                                                    rowClass = 'red-Color'; // Add class if gross pay does not match
                                                }
                                                // Add more property comparisons as needed

                                                return (
                                                    <StyledTableRow key={`${csvData.employeeName}-${index}`} className={rowClass}>
                                                        <StyledTableCell></StyledTableCell>
                                                        <StyledTableCell>{csvData.employeeName}</StyledTableCell>
                                                        <StyledTableCell>{assign.assignment}</StyledTableCell>
                                                        <StyledTableCell>{assign.payPeriod}</StyledTableCell>
                                                        <StyledTableCell>{assign.rate}</StyledTableCell>
                                                        <StyledTableCell>{assign.hours}</StyledTableCell>
                                                        <StyledTableCell>{assign.grossPay}</StyledTableCell>
                                                    </StyledTableRow>
                                                );
                                            } else {
                                                return null; // If target value does not exist for this assignment, skip rendering row
                                            }
                                        }
                                    })
                                }
                            </>
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
                            {csvTargetValues.map(csvData => (<>
                                <StyledTableRow key={csvData.id}>
                                    <StyledTableCell style={{ position: "sticky", left: 0, backgroundColor: "white" }}>{csvData.id}</StyledTableCell>
                                    <StyledTableCell style={{ position: "sticky", left: 48, backgroundColor: "white" }}>{csvData.employeeName}</StyledTableCell>
                                    <StyledTableCell>{csvData.assignments.length} assignments</StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    {showGroupedData ? (
                                        <button onClick={() => setShowGroupedData(false)} className='btn-plus'></button>
                                    ) : (
                                        <button onClick={() => setShowGroupedData(true)}></button>
                                    )
                                    }

                                </StyledTableRow>
                                {showGroupedData &&
                                    csvData.assignments.map((assign, index) => {
                                        let rowClass = ''; // Initialize row class
                                        let i
                                        for (i = 0; i < csvTargetValues.length; i++) {
                                            if (csvValues[i].assignments[index]) { // Check if target value exists for this assignment
                                                if (assign.name !== csvValues[i].assignments[index].name) {
                                                    rowClass = 'red-Color'; // Add class if assignment name does not match
                                                } else if (assign.grossPay !== csvValues[i].assignments[index].grossPay) {
                                                    rowClass = 'red-Color'; // Add class if gross pay does not match
                                                }
                                                // Add more property comparisons as needed

                                                return (
                                                    <StyledTableRow key={`${csvData.employeeName}-${index}`} className={rowClass}>
                                                        <StyledTableCell></StyledTableCell>
                                                        <StyledTableCell>{csvData.employeeName}</StyledTableCell>
                                                        <StyledTableCell>{assign.assignment}</StyledTableCell>
                                                        <StyledTableCell>{assign.payPeriod}</StyledTableCell>
                                                        <StyledTableCell>{assign.rate}</StyledTableCell>
                                                        <StyledTableCell>{assign.hours}</StyledTableCell>
                                                        <StyledTableCell>{assign.grossPay}</StyledTableCell>
                                                    </StyledTableRow>
                                                );
                                            } else {
                                                return null; // If target value does not exist for this assignment, skip rendering row
                                            }
                                        }
                                        return null;
                                    })
                                }

                            </>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Col>
        </Row>
    )
}

export default ConcileTable;