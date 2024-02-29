import React from 'react'
import "../BookDeatil/product.css"

function book(){
    return(
        <>
            <div className="header scrolling" id="myHeader">
        <div className="grid wide">
            <div className="header__top">
                <div className="navbar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="index.html" className="header__logo">
                    <img src="./assets/logo.png" alt="" width="150px" height="100px"/>
                </a>
                <div className="header__search">
                    <div className="header__search-wrap">
                        <input type="text" className="header__search-input" placeholder="Tìm kiếm"/>
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
                                        <img src="./assets/img/product/product1.jpg" alt=""/>
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
                                        <img src="./assets/img/product/product1.jpg" alt=""/>
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
                                        <img src="./assets/img/product/product1.jpg" alt=""/>
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
                        <a href="cart.html" className="btn btn--default cart-btn">Xem giỏ hàng</a>
                        <a href="pay.html" className="btn btn--default cart-btn orange">Thanh toán</a>
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
                    <a href="index.html" className="header__nav-link">Trang chủ</a>
                </li>
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">Giới Thiệu</a>
                </li>
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">Sản Phẩm</a>
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
                <li className="header__nav-item">
                    <a href="contact.html" className="header__nav-link">Liên Hệ</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="main" style={{ backgroundColor: "pink" }}>
        <div className="grid wide">
            <div className="main__taskbar">
                <div className="main__breadcrumb" >
                    <div className="breadcrumb__item">
                        <a href="#" className="breadcrumb__link">Trang chủ</a>
                    </div>
                    <div className="breadcrumb__item">
                        <a href="#" className="breadcrumb__link">Cửa hàng</a>
                    </div>
                    <div className="breadcrumb__item">
                        <a href="#" className="breadcrumb__link">Hãng DHC</a>
                    </div>
                </div>
                <div className="main__sort">
                    <h3 className="sort__title">
                        Hiển thị kết quả theo
                    </h3>
                    <select className="sort__select" name="" id="">
                        <option value="1">Thứ tự mặc định</option>
                        <option value="2">Mức độ phổ biến</option>
                        <option value="3">Điểm đánh giá</option>
                        <option value="4">Mới cập nhật</option>
                        <option value="5">Giá : Cao đến thấp</option>
                        <option value="6">Giá Thấp đến cao</option>
                    </select>
                </div>
            </div>
            <div className="productList">
                <div className="listProduct">
                    <div className="row">
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">
                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">
                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">
                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">
                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">
                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">
                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">
                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">

                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">

                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">

                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="col l-2 m-4 s-6">
                            <div className="product">
                                <div className="product__avt" style={{backgroundImage: "url(assets/img/product/product1.jpg)"}}>
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">Framed-Sleeve Tops Group</h3>
                                    <div className="product__price">
                                        <div className="price__new">320.000 <span className="price__unit">đ</span></div>
                                    </div>
                                </div>
                                <a href="#" className="viewDetail">Xem chi tiết</a>
                                <a href="#" className="addToCart">Thêm vào giỏ</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination" style={{}}>
                    <ul className="pagination__list">
                        <li className="pagination__item">
                            <a href="listFilm.html" className="pagination__link">
                                <i className="fas fa-chevron-left"></i>
                            </a>
                        </li>
                        <li className="pagination__item active">
                            <a href="listFilm.html" className="pagination__link">1</a>
                        </li>
                        <li className="pagination__item">
                            <a href="listFilm.html" className="pagination__link">2</a>
                        </li>
                        <li className="pagination__item">
                            <a href="listFilm.html" className="pagination__link">3</a>
                        </li>
                        <li className="pagination__item">
                            <a href="listFilm.html" className="pagination__link">4</a>
                        </li>
                        <li className="pagination__item">
                            <a href="listFilm.html" className="pagination__link">5</a>
                        </li>
                        <li className="pagination__item">
                            <a href="listFilm.html" className="pagination__link">...</a>
                        </li>
                        <li className="pagination__item active">
                            <a href="listFilm.html" className="pagination__link">14</a>
                        </li>
                        <li className="pagination__item">
                            <a href="listFilm.html" className="pagination__link">
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
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
                            <a href="#" className="footer__link">Trang điểm</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Chăm sóc da</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Chăm sóc tóc</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Nước hoa</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Chăm sóc toàn thân </a>
                        </li>
                    </ul>
                </div>
                <div className="col l-3 m-6 s-12">
                    <h3 className="footer__title">Hỗ trợ khách hàng</h3>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">Hướng dẫn mua hàng</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Giải đáp thắc mắc</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Chính sách mua hàng</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Chính sách đổi trả</a>
                        </li>
                    </ul>
                </div>
                <div className="col l-3 m-6 s-12">
                    <h3 className="footer__title">Liên hệ</h3>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <span className="footer__text">
                                    <i className="fas fa-map-marked-alt"></i> 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
                                </span>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                <i className="fas fa-phone"></i> 076 922 0162
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                <i className="fas fa-envelope"></i> phuonggiang150@gmail.com
                            </a>
                        </li>
                        <li className="footer__item">
                            <div className="social-group">
                                <a href="#" className="social-item"><i className="fab fa-facebook-f"></i>
                                    </a>
                                <a href="#" className="social-item"><i className="fab fa-twitter"></i>
                                    </a>
                                <a href="#" className="social-item"><i className="fab fa-pinterest-p"></i>
                                    </a>
                                <a href="#" className="social-item"><i className="fab fa-invision"></i>
                                    </a>
                                <a href="#" className="social-item"><i className="fab fa-youtube"></i>  
                                    </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col l-3 m-6 s-12">
                    <h3 className="footer__title">Đăng kí</h3>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <span className="footer__text">Đăng ký để nhận được được thông tin ưu đãi mới nhất từ chúng tôi.</span>
                        </li>
                        <li className="footer__item">
                            <div className="send-email">
                                <input className="send-email__input" type="email" placeholder="Nhập Email..."/>
                                <a href="#" className="send-email__link">
                                    <i className="fas fa-paper-plane"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <span className="footer__text"> Dọc, Đọc nữa, Đọc Mãi cùng  <a className="footer__link" href="#"> Thành Po </a></span>
        </div>
    </div>
    {/* <!-- Modal Form --> */}
    <div className="ModalForm">
        <div className="modal" id="my-Register">
            <a href="#" className="overlay-close"></a>
            <div className="authen-modal register">
                <h3 className="authen-modal__title">Đăng Kí</h3>
                <div className="form-group">
                    <label for="account" className="form-label">Họ Tên</label>
                    <input id="account" name="account" type="text" className="form-control"/>
                    <span className="form-message">Không hợp lệ !</span>
                </div>
                <div className="form-group">
                    <label for="password" className="form-label">Tài khoản Email *</label>
                    <input id="password" name="password" type="text" className="form-control"/>
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label for="password" className="form-label">Mật khẩu *</label>
                    <input id="password" name="password" type="text" className="form-control"/>
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label for="password" className="form-label">Nhập lại mật khẩu *</label>
                    <input id="password" name="password" type="text" className="form-control"/>
                    <span className="form-message"></span>
                </div>
                <div className="authen__btns">
                    <div className="btn btn--default">Đăng Kí</div>
                </div>
            </div>
        </div>
        <div className=" modal" id="my-Login">
            <a href="#" className="overlay-close"></a>
            <div className="authen-modal login">
                <h3 className="authen-modal__title">Đăng Nhập</h3>
                <div className="form-group">
                    <label for="account" className="form-label">Địa chỉ email *</label>
                    <input id="account" name="account" type="text" className="form-control"/>
                    <span className="form-message">Tài khoản không chính xác !</span>
                </div>
                <div className="form-group">
                    <label for="password" className="form-label">Mật khẩu *</label>
                    <input id="password" name="password" type="text" className="form-control"/>
                    <span className="form-message"></span>
                </div>
                <div className="authen__btns">
                    <div className="btn btn--default">Đăng Nhập</div>
                    <input type="checkbox" className="authen-checkbox"/>
                    <label className="form-label">Ghi nhớ mật khẩu</label>
                </div>
                <a className="authen__link">Quên mật khẩu ?</a>
            </div>
        </div>
        <div className="up-top" id="upTop" onclick="goToTop()">
            <i className="fas fa-chevron-up"></i>
        </div>

    </div>
        </>
    )
}

export default book;