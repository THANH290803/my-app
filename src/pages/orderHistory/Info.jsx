import React from 'react'
import "./style.css"
import Header from "../../Component/header"
import Footer from "../../Component/footer"
import FromLogin from "../../Component/dialog"

function Infor() {
    return (
        <>
            <div className='home-customer' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                <div className="w3-row-padding" style={{ marginTop: '10px' }}>
                    {/* Left Column */}
                    <div className="w3-third custom-width" style={{ marginRight: '20px', }} >
                        <div className="w3-container w3-card w3-white w3-margin-bottom" style={{ width: '300px' }}>
                            <div className='full-height' >
                                <img className='img-customer' src="/assets/img/customer.jpg" alt="" />
                                <div className="customer-name">hello world</div>
                                <div className='order-history'><a href="http://"></a>Thông tin</div>
                                <div className="order-history"><a href="http://"></a> Lịch sử đơn hàng</div>
                            </div>
                        </div>
                    </div>
                    {/* End Left Column */}
                    {/* Right Column */}
                    <div className="w3-twothird" style={{ width: '400px', height: '100%', marginLeft: '100px' }} >
                        <div className="w3-white w3-text-grey w3-card-4" style={{ height: '100%' }}  >
                            <div className="content" >
                                <p><i className="fa fa-user-circle-o w3-margin-right w3-large w3-text-teal"></i><input type="text" value={"hello world"} /> </p><br />
                                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i><input type="text" placeholder='London, UK' /> </p><br />
                                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i><input type="text" placeholder='ex@mail.com' /> </p><br />
                                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i><input type="text" placeholder='1224435534' /> </p><br />
                                <button className='div-approved'>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infor