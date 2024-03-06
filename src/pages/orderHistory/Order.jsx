import React from 'react'
import "./style.css"
import Header from "../../Component/header"
import Footer from "../../Component/footer"
import FromLogin from "../../Component/dialog"
import { Link } from 'react-router-dom'

function home_customer() {
    return (
        <>
            <Header />
            {/* <div className="main" style={{ padding: "0px" }}>
                <div className='home-customer' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}  >
                    <div className="row" style={{ marginTop: '10px', marginBottom: '30px' }} > */}
            {/* Left Column */}
            {/* <div className="w3-container w3-card w3-white w3-margin-bottom" style={{ width: '250px' }}>
                            <div className='full-height' >
                                <img className='img-customer' src="/assets/img/customer.jpg" alt="" />
                                <div className="customer-name">hello world</div>
                                <div className='order-history'><Link to={"/Info"}>Thông tin</Link></div>
                                <div className="order-history"><a href="">Lịch sử đơn hàng</a> </div>
                            </div>
                        </div> */}
            {/* End Left Column */}
            {/* Right Column */}
            {/* <div className="w3-white w3-text-grey w3-card-4" style={{ width: '1100px' }} >
                            <div >
                                <div className="content">
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }} >
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên Khách Hàng</th>
                                            <th>Địa chỉ</th>
                                            <th>Số điẹn thoại</th>
                                            <th>Phương thức thanh toán</th>
                                            <th>Tổng tiền</th>
                                            <th colSpan={"3"} style={{ textAlign: "center" }}>Trạng thái</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Sách 1</td>
                                            <td>bdhjfddfhjd jfdfdhjdfdhdfnjnjkdfndfkj</td>
                                            <td>25000 VND</td>
                                            <td>50000 VND</td>
                                            <td>50000 VND</td>
                                            <td><div className='div-wait' style={{ width: "150px" }}>Chờ duyệt</div></td>
                                            <td><button className='button' type="button"><i class="fas fa-times"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Sách 1</td>
                                            <td>2</td>
                                            <td>25000 VND</td>
                                            <td>50000 VND</td>
                                            <td>50000 VND</td>
                                            <td><div className='div-approved' style={{ width: "150px" }}>Đã duyệt</div></td>
                                            <td><button className='button' type="button"><i class="fas fa-times"></i></button></td>
                                            <td><button className='button' type="button">Hủy</button></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='main' style={{ backgroundColor: "pink" }}>
                <section class="profile-info" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                    <div class="avatar" style={{ textAlign: "center"}}>
                        <img src="assets/img/product/product6.jpg" alt="Avatar" />
                    </div>
                    <div class="info">
                        <h2>Thông tin cá nhân</h2>
                        <ul>
                            <li>Họ và tên: [Tên khách hàng]</li>
                            <li>Email: [Email khách hàng]</li>
                            <li>Số điện thoại: [Số điện thoại khách hàng]</li>
                            <li>Địa chỉ: [Địa chỉ khách hàng]</li>
                        </ul>
                        <a href="#">Cập nhật thông tin</a>
                    </div>
                </section>

                <br />

                <section class="order-history" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                    <h2>Lịch sử mua hàng</h2>
                    <table class="table-bordered">
                        <thead>
                            <tr>
                                <th>Mã đơn hàng</th>
                                <th>Ngày đặt</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#123456</td>
                                <td>2023-11-14</td>
                                <td>1.000.000 VNĐ</td>
                                <td>Đã giao hàng</td>
                            </tr>
                            <tr>
                                <td>#123457</td>
                                <td>2023-11-15</td>
                                <td>2.000.000 VNĐ</td>
                                <td>Đang xử lý</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <a href="#">Xem tất cả lịch sử mua hàng</a> */}
                </section>
            </div>


            <Footer />
            <FromLogin />
        </>
    );
}

export default home_customer