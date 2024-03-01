import React from "react";
import "./pay.css"
import Header from "../../Component/header"
import Footer from "../../Component/footer"
import FromLogin from "../../Component/dialog"

function Pay() {
    return (
        <>
            <Header />
            <div className="main">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-7 m-12 s-12">
                            <div className="pay-information">
                                <div className="pay__heading">Thông tin thanh toán</div>
                                <div className="form-group">
                                    <label htmlFor="account" className="form-label">
                                        Họ Tên *
                                    </label>
                                    <input
                                        id="account"
                                        name="account"
                                        type="text"
                                        className="form-control"
                                    />
                                    <span className="form-message">Không hợp lệ !</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="account" className="form-label">
                                        Địa chỉ *
                                    </label>
                                    <input
                                        id="account"
                                        name="account"
                                        type="text"
                                        className="form-control"
                                    />
                                    <span className="form-message" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="account" className="form-label">
                                        Tỉnh / Thành phố *
                                    </label>
                                    <input
                                        id="account"
                                        name="account"
                                        type="text"
                                        className="form-control"
                                    />
                                    <span className="form-message" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="account" className="form-label">
                                        Email *
                                    </label>
                                    <input
                                        id="account"
                                        name="account"
                                        type="text"
                                        className="form-control"
                                    />
                                    <span className="form-message" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="account" className="form-label">
                                        Số điện thoại *
                                    </label>
                                    <input
                                        id="account"
                                        name="account"
                                        type="text"
                                        className="form-control"
                                    />
                                    <span className="form-message" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="account" className="form-label">
                                        Ghi chú cho đơn hàng
                                    </label>
                                    <textarea
                                        className="form-control"
                                        name=""
                                        id=""
                                        cols={30}
                                        rows={20}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col l-5 m-12 s-12">
                            <div className="pay-order">
                                <div className="pay__heading">Đơn hàng của bạn</div>
                                <div className="pay-info">
                                    <div className="main__pay-text">Azrouel dress variable</div>
                                    <div className="main__pay-price">1,120,000 ₫</div>
                                </div>
                                <div className="pay-info">
                                    <div className="main__pay-text">Azrouel dress variable </div>
                                    <div className="main__pay-amount">3</div>
                                    <div className="main__pay-price">1,120,000 ₫</div>
                                </div>
                                <div className="pay-info">
                                    <div className="main__pay-text">Azrouel dress variable </div>
                                    <div className="main__pay-price">1,120,000 ₫</div>
                                </div>
                                <div className="pay-info">
                                    <div className="main__pay-text special">Giao hàng</div>
                                    <div className="main__pay-text">Giao hàng miễn phí</div>
                                </div>
                                <div className="pay-info">
                                    <div className="main__pay-text special">Tổng thành tiền</div>
                                    <div className="main__pay-price">1,120,000 ₫</div>
                                </div>
                                <div className="btn btn--default">Đặt hàng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {/* Modal Form */}
            <FromLogin />
        </>


    )
}

export default Pay;