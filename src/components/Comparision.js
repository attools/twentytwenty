import React, { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { VscChecklist } from "react-icons/vsc";
import ConcileTable from './ConcileTable';
import Papa from "papaparse";

function Comparision() {

  const sourceRef = useRef();
  const [sourceFileName, setSourceFileName] = useState('');
  const [targetFileName, setTargetFileName] = useState('');
  const [csvSourceData, setcsvSourceData] = useState([]);
  const [csvTargetData, setcsvTargetData] = useState([]);
  const [reconcileSourceUploaded, setReconcileSourceUploaded] = useState(false)
  const [reconcileTargetUploaded, setReconcileTargetUploaded] = useState(false)

  const sourceUploadHandler = (e) => {
    let sourceFileNameValue = e.target.files[0].name;
    let sourceFileNameValueShifted = sourceFileNameValue.split('.').shift();
    setSourceFileName(sourceFileNameValueShifted);
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const csvDataValues = []
        results.data.map(data => (
          csvDataValues.push((data))
        ))
        const groupedData = csvDataValues.reduce((acc, curr)=>{
          const {employeeName, ...rest} = curr;
          const employeeIndex = acc.findIndex(item => item.employeeName === employeeName);
          if(employeeIndex === -1){
            acc.push({employeeName, assignments: [{...rest}]})
          }else{
            acc[employeeIndex].assignments.push({...rest});
          }
          return acc
        },[]);
        setcsvSourceData(groupedData);
        setReconcileSourceUploaded(true);
      }
    })
  }

  const targetUploadHandler = (e) => {
    let targetFileNameValue = e.target.files[0].name;
    let targetFileNameValueShifted = targetFileNameValue.split('.').shift();
    setTargetFileName(targetFileNameValueShifted)
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const csvTargetValues = []
        results.data.map(data => (
          csvTargetValues.push((data))
        ))
        const groupedTargetData = csvTargetValues.reduce((acc, curr)=>{
          const {employeeName, ...rest} = curr;
          const employeeIndex = acc.findIndex(item => item.employeeName === employeeName);
          if(employeeIndex === -1){
            acc.push({employeeName, assignments: [{...rest}]})
          }else{
            acc[employeeIndex].assignments.push({...rest});
          }
          return acc
        },[]);
        setcsvTargetData(groupedTargetData)
        setReconcileTargetUploaded(true);
      }
    })
  }
  console.log(csvSourceData);
  console.log("Tar",csvTargetData);


  if(csvSourceData.length === csvTargetData.length){
    console.log("it is equal");
  }else if(csvSourceData.length !== csvTargetData.length){
    console.log("The number of rows in the two files is different");
  }




  
  const [showReconcile, setShowReconcile] = useState((reconcileSourceUploaded && reconcileTargetUploaded) ? true : false);
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
                {sourceFileName ? (
                  <>
                    <div className='csv-heading-txt'>{sourceFileName}</div>
                    <div className='csv-sub-text'>.csv file</div>
                  </>
                ) : (
                  <>
                    <div className='csv-heading-txt'>Source file</div>
                    <div className='csv-sub-text'>Upload .csv of your source file</div>
                  </>
                )}

              </div>
            </div>
            <input type='file'
              id='csvSourceFileId' accept='.csv' style={{ display: "none" }} ref={sourceRef} onChange={sourceUploadHandler} />
            <label htmlFor='csvSourceFileId' className='btn-upload float-end m-4'>Upload</label >
          </div>
        </Col>
        <Col xs={12} lg={6} sm={12} md={12}>
          <div className='csv-card2'>
            <div style={{ height: "47px", marginTop: "15px", marginLeft: "15px" }} className='float-start'>
              <div className='csv-img float-start'>
                <img width={"31px"} height={"31px"} style={{ marginLeft: "8px", marginTop: "7px" }} src='./img/image 19.png' alt='csvimg' />
              </div>
              <div className='csv-text float-start'>
                {targetFileName ? (
                  <>
                    <div className='csv-heading-txt'>{targetFileName}</div>
                    <div className='csv-sub-text'>.csv file</div>
                  </>
                ) : (
                  <>
                    <div className='csv-heading-txt'>Target file</div>
                    <div className='csv-sub-text'>Upload .csv of your target file</div>
                  </>
                )}

              </div>
            </div>
            <input type='file'
              id='csvTargetFileId' accept='.csv' style={{ display: "none" }} onChange={targetUploadHandler} />
            <label htmlFor='csvTargetFileId' className='btn-upload float-end m-4'>Upload</label >
          </div>
        </Col>
      </Row >
      <Row>
        {(reconcileSourceUploaded && reconcileTargetUploaded) &&
          <Col className='mt-4 mb-4' lg={12} xs={12} sm={12} md={12}>
            {showReconcile ? (
              <button className='reconcile-btn' onClick={() => setShowReconcile(false)}><VscChecklist style={{ fontSize: "18px", fontWeight: "50" }} /> Reconcile</button>
            ) : (
              <button className='reconcile-btn' onClick={() => setShowReconcile(true)}><VscChecklist style={{ fontSize: "18px", fontWeight: "50" }} /> Reconcile</button>
            )}

          </Col>
        }

      </Row>
      {
        showReconcile && (
          <ConcileTable csvValues={csvSourceData} csvTargetValues={csvTargetData} />
        )
      }

    </Container >
  )
}

export default Comparision