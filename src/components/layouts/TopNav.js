import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { RiArrowDropDownLine } from 'react-icons/ri';

const TopNav = () => {
    return (
        <div className='topNav'>
            <div className='container-fluid'>

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
            </div>
        </div>
    )
}

export default TopNav