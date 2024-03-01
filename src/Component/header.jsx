import React from 'react'
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="grid wide">
                    <div className="header__top">
                        <div className="navbar-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="index.html" className="header__logo">
                            <img src="./assets/logo.png" alt="" width="150px" height="100px" />
                        </a>
                        <div className="header__search">
                            <div className="header__search-wrap">
                                <input type="text" className="header__search-input" placeholder="Tìm kiếm" />
                                <a className="header__search-icon" href="#">
                                    <i className="fas fa-search"></i>
                                </a>
                            </div>
                        </div>
                        <div className="header__account">
                            <a href="#my-Login" className="header__account-login">Đăng Nhập</a>
                            <a href="#my-Register" className="header__account-register">Đăng Kí</a>
                        </div>

                        {/* <!-- Cart --> */}
                        <div className="header__cart have" href="#">
                            <i className="fas fa-shopping-basket"></i>
                            <div className="header__cart-amount">
                                3
                            </div>
                            <div className="header__cart-wrap">
                                <ul className="order__list">
                                    <li className="item-order">
                                        <div className="order-wrap">
                                            <a href="product.html" className="order-img">
                                                <img src="./assets/img/product/product1.jpg" alt="" />
                                            </a>
                                            <div className="order-main">
                                                <a href="product.html" className="order-main-name">Áo sơ mi  caro kèm belt caro kèm belt Áo sơ mi caro kèm belt</a>
                                                <div className="order-main-price">2 x 45,000 ₫</div>
                                            </div>
                                            <a href="product.html" className="order-close"><i className="far fa-times-circle"></i></a>
                                        </div>
                                    </li>
                                    <li className="item-order">
                                        <div className="order-wrap">
                                            <a href="product.html" className="order-img">
                                                <img src="./assets/img/product/product1.jpg" alt="" />
                                            </a>
                                            <div className="order-main">
                                                <a href="product.html" className="order-main-name">Áo sơ mi  caro kèm belt caro kèm belt Áo sơ mi caro kèm belt</a>
                                                <div className="order-main-price">2 x 45,000 ₫</div>
                                            </div>
                                            <a href="product.html" className="order-close"><i className="far fa-times-circle"></i></a>
                                        </div>
                                    </li>
                                    <li className="item-order">
                                        <div className="order-wrap">
                                            <a href="product.html" className="order-img">
                                                <img src="./assets/img/product/product1.jpg" alt="" />
                                            </a>
                                            <div className="order-main">
                                                <a href="product.html" className="order-main-name">Áo sơ mi  caro kèm belt caro kèm belt Áo sơ mi caro kèm belt</a>
                                                <div className="order-main-price">2 x 45,000 ₫</div>
                                            </div>
                                            <a href="product.html" className="order-close"><i className="far fa-times-circle"></i></a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="total-money">Tổng cộng: 120.000đ</div>
                                <Link to={"/Cart"} href="cart.html" className="btn btn--default cart-btn">Xem giỏ hàng</Link>
                                <Link to={"/Pay"} className="btn btn--default cart-btn orange">Thanh toán</Link>
                                {/* <!-- norcart -->
                            <!-- <img className="header__cart-img-nocart" src="http://www.giaybinhduong.com/images/empty-cart.png" alt=""> --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Menu --> */}
                <div className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item nav__search">
                            <div className="nav__search-wrap">
                                <input className="nav__search-input" type="text" name="" id="" placeholder="Tìm sản phẩm..." />
                            </div>
                            <div className="nav__search-btn">
                                <i className="fas fa-search"></i>
                            </div>
                        </li>
                        <li className="header__nav-item authen-form">
                            <a href="#" className="header__nav-link">Tài Khoản</a>
                            <ul className="sub-nav">
                                <li className="sub-nav__item">
                                    <a href="#my-Login" className="sub-nav__link">Đăng Nhập</a>
                                </li>
                                <li className="sub-nav__item">
                                    <a href="#my-Register" className="sub-nav__link">Đăng Kí</a>
                                </li>
                            </ul>
                        </li>
                        <li className="header__nav-item index">
                            <Link to={"/"} className="header__nav-link">Trang chủ</Link>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Giới Thiệu</a>
                        </li>
                        <li className="header__nav-item">
                            <Link to={"/Book"} className="header__nav-link">Sản Phẩm</Link>
                            <div className="sub-nav-wrap grid wide">
                                <ul className="sub-nav">
                                    <li className="sub-nav__item">
                                        <a href="" className="sub-nav__link heading">Nước hoa</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc toàn thân vvv</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Khuyến mãi</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc cơ thể</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Nước hoa</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc miệng</a>
                                    </li>
                                </ul>
                                <ul className="sub-nav">
                                    <li className="sub-nav__item">
                                        <a href="" className="sub-nav__link heading">Nước hoa</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc toàn thân vvv</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Khuyến mãi</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc cơ thể</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Nước hoa</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc miệng</a>
                                    </li>
                                </ul>
                                <ul className="sub-nav">
                                    <li className="sub-nav__item">
                                        <a href="" className="sub-nav__link heading">Nước hoa</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc toàn thân vvv</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Khuyến mãi</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc cơ thể</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Nước hoa</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc miệng</a>
                                    </li>
                                </ul>
                                <ul className="sub-nav">
                                    <li className="sub-nav__item">
                                        <a href="" className="sub-nav__link heading">Nước hoa</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc toàn thân vvv</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Khuyến mãi</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc cơ thể</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Nước hoa</a>
                                    </li>
                                    <li className="sub-nav__item">
                                        <a href="listProduct.html" className="sub-nav__link">Chăm sóc miệng</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header__nav-item">
                            <a href="news.html" className="header__nav-link">Tin Tức</a>
                        </li>
                        {/* <li className="header__nav-item">
                            <a href="contact.html" className="header__nav-link">Liên Hệ</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;