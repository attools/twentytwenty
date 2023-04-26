import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiArrowBack } from 'react-icons/bi';
import { RiPencilFill } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';

const TopNav = () => {

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className='topNav'>
            <div className='container-fluid'>
                {location.pathname === '/' ? (
                    <Row className='navBar'>
                        <Col className='navLogo' xs={4} sm={3} md={3} lg={2} xl={2}>
                            <img src='./img/logo.png' alt='twenty_twenty_logo' className='navLogo-img' />
                        </Col>
                        <Col className='navLinks' xs={4} sm={6} md={5} lg={8} xl={7}>
                            <div className='navLink'>Reconcile</div>
                        </Col>
                        <Col className='navProfile' xs={4} sm={3} md={4} lg={2} xl={3}>
                            <div className='align-right'>
                                <img src='./img/profile_img.png' alt='profile_img' className='navProfile-img' />
                                <div className='navProfile-username'>Richard <RiArrowDropDownLine className='dropdownIcon' /></div>
                            </div>
                        </Col>
                    </Row>
                ) : (
                    <Row className='navBar' style={{display: "block"}}>
                        <Col className='navBack' xs={6} sm={6} md={6} lg={6}>
                            <BiArrowBack style={{cursor:"pointer" , fontSize:"20px"}} onClick={() => navigate('/')} /> <span style={{ fontSize: "16px" }}>April-Payroll-Reconcilation</span> <RiPencilFill />
                        </Col>
                        <Col className='navBtn' xs={6} sm={6} md={6} lg={6}>
                           <button className='btn-save'>Save</button>
                        </Col>

                    </Row>
                )}

            </div>
        </div>
    )
}

export default TopNav