import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { VscChecklist } from "react-icons/vsc";
import ConcileTable from './ConcileTable';
import Papa from "papaparse";

function Comparision() {

  const [showReconcile, setShowReconcile] = useState(false);
  const [csvData, setcsvData] = useState([]);

  const changeHandler =(e)=>{
    Papa.parse(e.target.files[0],{
      header: true,
      skipEmptyLines: true,
      complete: function (results){
        const csvDataValues = []
        results.data.map(data => (
          csvDataValues.push((data))
        ))
        setShowReconcile(true);
        setcsvData(csvDataValues)
      }
    })
  }


  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={6} sm={12} md={12}>
          <div className='csv-card'>
            <div style={{ height: "47px", marginTop: "15px", marginLeft: "15px" }} className='float-start'>
              <div className='csv-img float-start'>
                <img width={"31px"} height={"31px"} style={{ marginLeft: "8px", marginTop: "7px" }} src='./img/image 19.png' alt='csvimg' />
              </div>
              <div className='csv-text float-start'>
                <div className='csv-heading-txt'>Source file</div>
                <div className='csv-sub-text'>Upload .csv of your source file</div>
              </div>
            </div>
            <input type='file'
              id='csvFileId' accept='.csv' style={{ display: "none" }} onChange={changeHandler}/>
            <label htmlFor='csvFileId' className='btn-upload float-end m-4'>Upload</label >
          </div>
        </Col>
        <Col xs={12} lg={6} sm={12} md={12}>
          <div className='csv-card2'>
            <div style={{ height: "47px", marginTop: "15px", marginLeft: "15px" }} className='float-start'>
              <div className='csv-img float-start'>
                <img width={"31px"} height={"31px"} style={{ marginLeft: "8px", marginTop: "7px" }} src='./img/image 19.png' alt='csvimg' />
              </div>
              <div className='csv-text float-start'>
                <div className='csv-heading-txt'>Target file</div>
                <div className='csv-sub-text'>Upload .csv of your target file</div>
              </div>
            </div>
            <input type='file'
              id='csvFileId' accept='.csv' style={{ display: "none" }} />
            <label htmlFor='csvFileId' className='btn-upload float-end m-4'>Upload</label >
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='mt-4 mb-4' lg={12} xs={12} sm={12} md={12}>
        {showReconcile ? (
          <button className='reconcile-btn' onClick={() => setShowReconcile(false)}><VscChecklist style={{ fontSize: "18px", fontWeight: "50" }} /> Reconcile</button>
      ) : (
        <button className='reconcile-btn' onClick={() => setShowReconcile(true)}><VscChecklist style={{ fontSize: "18px", fontWeight: "50" }} /> Reconcile</button>
      )}
          
        </Col>
      </Row>
      {showReconcile && (
      <ConcileTable csvValues={csvData} />
      )}

    </Container>
  )
}

export default Comparision