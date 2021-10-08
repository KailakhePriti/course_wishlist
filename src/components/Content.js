import React from 'react'

import '../css/Content.css'
import girl from '../images/girl.png'
import hr from '../images/hr.png'
import horizontal from '../images/horizontal.png'
import people from '../images/people.png'
import  course from '../images/course.png'
import heart from '../images/heart.png'
import  cart from '../images/cart.png'
import star from '../images/star.png'
import  gstar from '../images/goldstar.png'
import  setting from '../images/setting.png'
import  logout from '../images/logout.png'
import gd_img from '../images/gd_img.png'
import star_empty from '../images/star_empty.png'
import rupee from '../images/rupee.png'
import arrow from '../images/arrow.png'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    DropdownItem,
    DropdownToggle,
    Dropdown,
    Button
} from 'reactstrap';
export default function Content() {
    return (
             <div>
            <div className="container main_block" >
                <div className="img_block">
                    <img src={girl} alt=""/>
                </div>
                <div className="text_content">
                    <h4 className="girl_text">Hello, Priya</h4>

                </div>
            </div>
            {/* */}
            <p className="hr_line" align="center" >
                <img src={hr} alt="" width="80%"/> 
            </p>
            
            <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                               
                                <div className="main_section">
                                    <div className="section1" align="left">
                                                <Navbar bg="dark" variant="dark">
                                                <Container>
                                                    <Nav>
                                                        <ul className="list_items">
                                                            <li><img src={people} alt=""  className="list_img"/> &nbsp;My Profile</li>
                                                            <li><img src={course} alt="" className="list_img"/>Enrolled Course</li>
                                                            <li><img src={heart} alt="" className="list_img"/>&nbsp;Wishlist</li>
                                                            <li><img src={star} alt="" className="list_img"/>Review</li>
                                                            <li><img src={cart} alt="" className="list_img"/>&nbsp;Purchase History</li>
                                                            
                                                            <li><img src={setting} alt="" className="list_img"/>&nbsp;Setting</li>
                                                            <li><img src={logout} alt="" className="list_img"/>&nbsp;Logout</li>
                                                        </ul>
                                                    </Nav>
                                                </Container>
                                            </Navbar>
                                            
                                           
                                    </div>
                <div className="section2" style={{paddingBottom: '3rem'}}>
                    <div className="content">
                        <div className="content1">
                            <h6>Wishlist</h6>
                        </div>
                        <div className="content2">
                            <div className="cart1">
                                {/* 1 cart */}
                            <div className="btn_img" style={{marginTop: '1rem'}}>
                                
                                <img src={gd_img} alt="" className="gd_img"/>
                                <Button style={{backgroundColor: '#FFCA41',color:'#6A2F85',marginRight: '1rem',border: 'none',padding: '0.1rem'}} className="btn" >JEE ADVANCED</Button>
                            </div>
                            <p className="cart_img_text1">
                            CBSE Class XII English Core
                            </p>
                            <p className="cart_img_text2">Oprah Winfrey</p>
                            <p>
                                <img src={gstar} alt=""/>
                                <img src={gstar} alt=""/>
                                <img src={gstar} alt=""/>
                                <img src={star_empty} alt=""/>
                                <img src={star_empty} alt=""/> 
                            </p>
                            <p className="para_text">Vestibulum at iaculis metus, at mollis mauris. Duis ut justo commodo, pretium nisl ut...</p>
                            <hr className="last_para_text_hr"/>
                            <div className="rupees_block">
                                <img src={rupee} alt="" className="rupee_img"/>
                                <span className="rupee_text1">999.00</span><span className="rupee_text2">650.00</span>
                            </div>
                            <Button style={{backgroundColor: '#6A2F85',color: '#fffffff',marginRight: '1rem',marginTop: '1rem',width: '10.675rem'}}>
                
            &nbsp;Add to cart</Button>
                       
                    </div>
                       {/* 2 cart */}
                       <div className="cart2">
                       <div className="btn_img" style={{marginTop: '1rem'}}>
                                
                                <img src={gd_img} alt="" className="gd_img"/>
                                <Button style={{backgroundColor: '#FFCA41',color:'#6A2F85',marginRight: '1rem',border: 'none',padding: '0.1rem'}} className="btn" >JEE ADVANCED</Button>
                            </div>
                            <p className="cart_img_text1">
                            CBSE Class XII English Core
                            </p>
                            <p className="cart_img_text2">Oprah Winfrey</p>
                            <p>
                                <img src={gstar} alt=""/>
                                <img src={gstar} alt=""/>
                                <img src={gstar} alt=""/>
                                <img src={star_empty} alt=""/>
                                <img src={star_empty} alt=""/>      
                            </p>
                            <p className="para_text">Vestibulum at iaculis metus, at mollis mauris. Duis ut justo commodo, pretium nisl ut...</p>
                            <hr className="last_para_text_hr"/>
                            <div className="rupees_block">
                                <img src={rupee} alt="" className="rupee_img"/>
                                <span className="rupee_text1">999.00</span><span className="rupee_text2">650.00</span>
                            </div>
                            <Button style={{backgroundColor: '#6A2F85',color: '#fffffff',marginRight: '1rem',marginTop: '1rem',width: '10.675rem'}}>
                
            &nbsp;Add to cart</Button>
            </div>
                        
                {/* 3 cart */}
                <div className="cart3">
                <div className="btn_img" style={{marginTop: '1rem'}}>
                                
                                <img src={gd_img} alt="" className="gd_img"/>
                                <Button style={{backgroundColor: '#FFCA41',color:'#6A2F85',marginRight: '1rem',border: 'none',padding: '0.1rem',}} className="btn" >JEE ADVANCED</Button>
                        </div>
                            <p className="cart_img_text1">
                            CBSE Class XII English Core
                            </p>
                            <p className="cart_img_text2">Oprah Winfrey</p>
                            <p>
                                <img src={gstar} alt=""/>
                                <img src={gstar} alt=""/>
                                <img src={gstar} alt=""/>
                                <img src={star_empty} alt=""/>
                                <img src={star_empty} alt=""/>      
                            </p>
                            <p className="para_text">Vestibulum at iaculis metus, at mollis mauris. Duis ut justo commodo, pretium nisl ut...</p>
                            <hr className="last_para_text_hr"/>
                            <div className="rupees_block">
                                <img src={rupee} alt="" className="rupee_img"/>
                                <span className="rupee_text1">999.00</span><span className="rupee_text2">650.00</span>
                            </div>
                            <Button style={{backgroundColor: '#6A2F85',color: '#fffffff',marginRight: '1rem',marginTop: '1rem',width: '10.675rem'}}>
                
            &nbsp;Add to cart</Button>
                       
                        
                       
                    
                        
                            </div>
                        
                      
                           
                            
                           
                            
                          
                     
            </div>
                   
                                        </div> 

                                    </div>
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
        </div>
    )
}
