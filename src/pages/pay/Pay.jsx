import React from "react";
import "./pay.css"

function Pay() {
    return (
        <>
            <div className="header scrolling" id="myHeader">
                <div className="grid wide">
                    <div className="header__top">
                        <div className="navbar-icon">
                            <span />
                            <span />
                            <span />
                        </div>
                        <a href="index.html" className="header__logo">
                            <img src="./assets/logo.png" alt="" width="150px" height="100px" />
                        </a>
                        <div className="header__search">
                            <div className="header__search-wrap">
                                <input
                                    type="text"
                                    className="header__search-input"
                                    placeholder="Tìm kiếm"
                                />
                                <a className="header__search-icon" href="#">
                                    <i className="fas fa-search" />
                                </a>
                            </div>
                        </div>
                        <div className="header__account">
                            <a href="#my-Login" className="header__account-login">
                                Đăng Nhập
                            </a>
                            <a href="#my-Register" className="header__account-register">
                                Đăng Kí
                            </a>
                        </div>
                        {/* Cart */}
                        <div className="header__cart have" href="#">
                            <i className="fas fa-shopping-basket" />
                            <div className="header__cart-amount">3</div>
                            <div className="header__cart-wrap">
                                <ul className="order__list">
                                    <li className="item-order">
                                        <div className="order-wrap">
                                            <a href="product.html" className="order-img">
                                                <img src="./assets/img/product/product1.jpg" alt="" />
                                            </a>
                                            <div className="order-main">
                                                <a href="product.html" className="order-main-name">
                                                    Áo sơ mi caro kèm belt caro kèm belt Áo sơ mi caro kèm
                                                    belt
                                                </a>
                                                <div className="order-main-price">2 x 45,000 ₫</div>
                                            </div>
                                            <a href="product.html" className="order-close">
                                                <i className="far fa-times-circle" />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="item-order">
                                        <div className="order-wrap">
                                            <a href="product.html" className="order-img">
                                                <img src="./assets/img/product/product1.jpg" alt="" />
                                            </a>
                                            <div className="order-main">
                                                <a href="product.html" className="order-main-name">
                                                    Áo sơ mi caro kèm belt caro kèm belt Áo sơ mi caro kèm
                                                    belt
                                                </a>
                                                <div className="order-main-price">2 x 45,000 ₫</div>
                                            </div>
                                            <a href="product.html" className="order-close">
                                                <i className="far fa-times-circle" />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="item-order">
                                        <div className="order-wrap">
                                            <a href="product.html" className="order-img">
                                                <img src="./assets/img/product/product1.jpg" alt="" />
                                            </a>
                                            <div className="order-main">
                                                <a href="product.html" className="order-main-name">
                                                    Áo sơ mi caro kèm belt caro kèm belt Áo sơ mi caro kèm
                                                    belt
                                                </a>
                                                <div className="order-main-price">2 x 45,000 ₫</div>
                                            </div>
                                            <a href="product.html" className="order-close">
                                                <i className="far fa-times-circle" />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="total-money">Tổng cộng: 120.000đ</div>
                                <a href="cart.html" className="btn btn--default cart-btn">
                                    Xem giỏ hàng
                                </a>
                                <a href="pay.html" className="btn btn--default cart-btn orange">
                                    Thanh toán
                                </a>
                                {/* norcart */}
                                {/* <img class="header__cart-img-nocart" src="http://www.giaybinhduong.com/images/empty-cart.png" alt=""> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Menu */}
                <div className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item nav__search">
                            <div className="nav__search-wrap">
                                <input
                                    className="nav__search-input"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Tìm sản phẩm..."
                                />
                            </div>
                            <div className="nav__search-btn">
                                <i className="fas fa-search" />
                            </div>
                        </li>
                        <li className="header__nav-item authen-form">
                            <a href="#" className="header__nav-link">
                                Tài Khoản
                            </a>
                            <ul className="sub-nav">
                                <li className="sub-nav__item">
                                    <a href="#my-Login" className="sub-nav__link">
                                        Đăng Nhập
                                    </a>
                                </li>
                                <li className="sub-nav__item">
                                    <a href="#my-Register" className="sub-nav__link">
                                        Đăng Kí
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="header__nav-item index">
                            <a href="index.html" className="header__nav-link">
                                Trang chủ
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">
                                Giới Thiệu
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">
                                Sản Phẩm
                            </a>
                            <div className="sub-nav-wrap grid wide">
                                <ul className="sub-nav">
                                    <li className="sub-nav__item">
                                        <a href="" className="sub-nav__link heading">
                                            Nước hoa
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc toàn thân vvv
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Khuyến mãi
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc cơ thể
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Nước hoa
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc miệng
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-nav">
                                    <li className="sub-nav__item">
                                        <a href="" className="sub-nav__link heading">
                                            Nước hoa
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc toàn thân vvv
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Khuyến mãi
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc cơ thể
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Nước hoa
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc miệng
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-nav">
                                    <li className="sub-nav__item">
                                        <a href="" className="sub-nav__link heading">
                                            Nước hoa
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc toàn thân vvv
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Khuyến mãi
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc cơ thể
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Nước hoa
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc miệng
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-nav">
                                    <li className="sub-nav__item">
                                        <a href="" className="sub-nav__link heading">
                                            Nước hoa
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc toàn thân vvv
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Khuyến mãi
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc cơ thể
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Nước hoa
                                        </a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">
                                            Chăm sóc miệng
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header__nav-item">
                            <a href="news.html" className="header__nav-link">
                                Tin Tức
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="contact.html" className="header__nav-link">
                                Liên Hệ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
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
            <div className="footer">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-3 m-6 s-12">
                            <h3 className="footer__title">Menu</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        Trang điểm
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        Chăm sóc da
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        Chăm sóc tóc
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        Nước hoa
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        Chăm sóc toàn thân{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-6 s-12">
                            <h3 className="footer__title">Hỗ trợ khách hàng</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        Hướng dẫn mua hàng
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        Giải đáp thắc mắc
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        Chính sách mua hàng
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        Chính sách đổi trả
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-6 s-12">
                            <h3 className="footer__title">Liên hệ</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <span className="footer__text">
                                        <i className="fas fa-map-marked-alt" /> 319 C16 Lý Thường Kiệt,
                                        Phường 15, Quận 11, Tp.HCM
                                    </span>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        <i className="fas fa-phone" /> 076 922 0162
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        <i className="fas fa-envelope" /> phuonggiang150@gmail.com
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <div className="social-group">
                                        <a href="#" className="social-item">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#" className="social-item">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#" className="social-item">
                                            <i className="fab fa-pinterest-p" />
                                        </a>
                                        <a href="#" className="social-item">
                                            <i className="fab fa-invision" />
                                        </a>
                                        <a href="#" className="social-item">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-6 s-12">
                            <h3 className="footer__title">Đăng kí</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <span className="footer__text">
                                        Đăng ký để nhận được được thông tin ưu đãi mới nhất từ chúng
                                        tôi.
                                    </span>
                                </li>
                                <li className="footer__item">
                                    <div className="send-email">
                                        <input
                                            className="send-email__input"
                                            type="email"
                                            placeholder="Nhập Email..."
                                        />
                                        <a href="#" className="send-email__link">
                                            <i className="fas fa-paper-plane" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <span className="footer__text">
                        {" "}
                        © Bản quyền thuộc về{" "}
                        <a className="footer__link" href="#">
                            {" "}
                            Phương Giang
                        </a>
                    </span>
                </div>
            </div>
            {/* Modal Form */}
            <div className="ModalForm">
                <div className="modal" id="my-Register">
                    <a href="#" className="overlay-close" />
                    <div className="authen-modal register">
                        <h3 className="authen-modal__title">Đăng Kí</h3>
                        <div className="form-group">
                            <label htmlFor="account" className="form-label">
                                Họ Tên
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
                            <label htmlFor="password" className="form-label">
                                Tài khoản Email *
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="text"
                                className="form-control"
                            />
                            <span className="form-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Mật khẩu *
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="text"
                                className="form-control"
                            />
                            <span className="form-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Nhập lại mật khẩu *
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="text"
                                className="form-control"
                            />
                            <span className="form-message" />
                        </div>
                        <div className="authen__btns">
                            <div className="btn btn--default">Đăng Kí</div>
                        </div>
                    </div>
                </div>
                <div className=" modal" id="my-Login">
                    <a href="#" className="overlay-close" />
                    <div className="authen-modal login">
                        <h3 className="authen-modal__title">Đăng Nhập</h3>
                        <div className="form-group">
                            <label htmlFor="account" className="form-label">
                                Địa chỉ email *
                            </label>
                            <input
                                id="account"
                                name="account"
                                type="text"
                                className="form-control"
                            />
                            <span className="form-message">Tài khoản không chính xác !</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Mật khẩu *
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="text"
                                className="form-control"
                            />
                            <span className="form-message" />
                        </div>
                        <div className="authen__btns">
                            <div className="btn btn--default">Đăng Nhập</div>
                            <input type="checkbox" className="authen-checkbox" />
                            <label className="form-label">Ghi nhớ mật khẩu</label>
                        </div>
                        <a className="authen__link">Quên mật khẩu ?</a>
                    </div>
                </div>
                <div className="up-top" id="upTop" onclick="goToTop()">
                    <i className="fas fa-chevron-up" />
                </div>
            </div>
        </>


    )
}

export default Pay;