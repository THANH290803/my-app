import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'

function Home() {
    const [slides, setSlides] = useState([]);
    const [index, setIndex] = useState(0);

    // Simulating fetching slides from an API
    useEffect(() => {
        // Fetch slides from an API or set them directly
        const fetchedSlides = [
            { image: "assets/img/slider/slide-1.png", text: "Giảm giá 30%", description: "Giảm giá cực sốc trong tháng 6!" },
            { image: "assets/img/slider/slide-2.png", text: "Giảm giá 30%", description: "Giảm giá cực sốc trong tháng 6!" },
            { image: "assets/img/slider/slide-3.jpg", text: "Giảm giá 30%", description: "Giảm giá cực sốc trong tháng 6!" }
        ];
        setSlides(fetchedSlides);
    }, []);

    const prevSlide = () => {
        setIndex(index === 0 ? slides.length - 1 : index - 1);
    };

    const nextSlide = () => {
        setIndex(index === slides.length - 1 ? 0 : index + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, [index]);

    const headerStyle = {
        backgroundColor: 'transparent',
    };

    const navItemStyle = {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        // Other styles as needed
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <button type="button" role="presentation" className="owl-next" onClick={onClick}>
                <span aria-label="Next" className="arrow">›</span>
            </button>
        );
    };

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
                <span aria-label="Previous" className="arrow">‹</span>
            </button>
        );
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };



    return (
        <>
            <div className="header">
                <div className="grid wide">
                    <div className="header__top">
                        <div className="navbar-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="index.html" className="header__logo">
                            <img src="assets/logo.png" alt="" width="150px" height="100px" />
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
                                                <img src="assets/img/product/product1.jpg" alt="" />
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
                                                <img src="assets/img/product/product1.jpg" alt="" />
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
                                                <img src="assets/img/product/product1.jpg" alt="" />
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
                                {/* <!-- norcart --> */}
                                {/* <!-- <img className="header__cart-img-nocart" src="http://www.giaybinhduong.com/images/empty-cart.png" alt=""> --> */}
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
                            <a href="index.html" className="header__nav-link">
                                <i className="fa fa-home"></i> Trang chủ
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">
                                <i className="fa fa-box-open"></i> Sách
                            </a>
                            <div className="sub-nav-wrap grid wide" style={{ borderRadius: "15px", paddingLeft: "15px" }}>
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
                            <a href="#" className="header__nav-link">
                                <i className="fas fa-info-circle"></i> Giới Thiệu
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="news.html" className="header__nav-link">
                                <i className="fas fa-newspaper"></i> Tin Tức
                            </a>
                        </li>
                        {/* <!-- <li className="header__nav-item">
                    <a href="contact.html" className="header__nav-link">Liên Hệ</a>
                </li> --> */}
                    </ul>
                </div>
            </div >
            <div className="main" style={{ backgroundColor: 'pink' }}>
                {/* <!-- Slider --> */}
                <div className="main__slice">
                    <div className="slider">
                        {slides.map((slide, i) => (
                            <div key={i} className={`slide ${i === index ? 'active' : ''}`} style={{ backgroundImage: `url(${slide.image})` }}>
                                <div className="container">
                                    <div className="caption">
                                        <h1>{slide.text}</h1>
                                        <p>{slide.description}</p>
                                        <a href="listProduct.html" className="btn btn--default">Xem ngay</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="controls">
                        <div className="prev" onClick={prevSlide}>
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        <div className="next" onClick={nextSlide}>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div className="indicator">
                        {slides.map((_, i) => (
                            <div key={i} className={`indicator-dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)}>
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
                {/* <!--Product Category --> */}
                <div className="main__tabnine">
                    <div className="grid wide">
                        {/* <!-- Tab items --> */}
                        {/* <div className="">
                            <div className=""> */}
                        <h3 className="category__title">BlackPink</h3>
                        <h3 className="category__heading">SÁCH MỚI</h3>
                        {/* </div>
                            <div className="line"></div>
                        </div> */}
                        {/* <!-- Tab content --> */}
                        <div className="tab-content">
                            <div className="tab-pane active">
                                <div className="row">
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
                                            </div>
                                            <div className="product__info" >
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price" style={{ textAlign: "center" }}>
                                                    <div className="price__new">700.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product5.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product2.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product3.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product6.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product4.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product2.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product4.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    <div className="price__old">
                                                        700.000 đ
                                                    </div>
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product3.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product6.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div className="col l-2 m-4 s-6">
                                        <div className="product">
                                            <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product5.jpg)" }}>
                                            </div>
                                            <div className="product__info">
                                                <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                                                <div className="product__price">
                                                    
                                                    <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                                                </div>
                                            </div>
                                            <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                            <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- HightLight  --> */}
                <div className="main__frame">
                    <div className="grid wide">
                        <h3 className="category__title">BlackPink</h3>
                        <h3 className="category__heading">SÁCH NỔI BẬT</h3>
                        <div className="slider-wrapper">
                            <Slider {...settings}>
                                <div className="product" style={{ width: '60%' }}>
                                    <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
                                    </div>
                                    <div className="product__info">
                                        <h3 className="product__name">Son môi cao cấp</h3>
                                        <div className="product__price">

                                            <div className="price__new"> 70.000<span className="price__unit">đ</span></div>
                                        </div>
                                    </div>
                                    <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                    <a href="cart.html" className="addToCart">Thêm vào giỏ</a>

                                </div>
                                <div className="product">
                                    <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product2.jpg)" }}>
                                    </div>
                                    <div className="product__info">
                                        <h3 className="product__name">Son môi cao cấp</h3>
                                        <div className="product__price">

                                            <div className="price__new"> 70.000<span className="price__unit">đ</span></div>
                                        </div>
                                    </div>
                                    <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                    <a href="cart.html" className="addToCart">Thêm vào giỏ</a>

                                </div>
                                <div className="product">
                                    <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product3.jpg)" }}>
                                    </div>
                                    <div className="product__info">
                                        <h3 className="product__name">Son môi cao cấp</h3>
                                        <div className="product__price">

                                            <div className="price__new"> 70.000<span className="price__unit">đ</span></div>
                                        </div>
                                    </div>
                                    <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                    <a href="cart.html" className="addToCart">Thêm vào giỏ</a>

                                </div>
                                <div className="product">
                                    <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product4.jpg)" }}>
                                    </div>
                                    <div className="product__info">
                                        <h3 className="product__name">Son môi cao cấp</h3>
                                        <div className="product__price">

                                            <div className="price__new"> 70.000<span className="price__unit">đ</span></div>
                                        </div>
                                    </div>
                                    <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                    <a href="cart.html" className="addToCart">Thêm vào giỏ</a>

                                </div>
                                <div className="product">
                                    <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product5.jpg)" }}>
                                    </div>
                                    <div className="product__info">
                                        <h3 className="product__name">Son môi cao cấp</h3>
                                        <div className="product__price">

                                            <div className="price__new"> 70.000<span className="price__unit">đ</span></div>
                                        </div>
                                    </div>
                                    <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                    <a href="cart.html" className="addToCart">Thêm vào giỏ</a>

                                </div>
                                <div className="product">
                                    <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product6.jpg)" }}>
                                    </div>
                                    <div className="product__info">
                                        <h3 className="product__name">Son môi cao cấp</h3>
                                        <div className="product__price">

                                            <div className="price__new"> 70.000<span className="price__unit">đ</span></div>
                                        </div>
                                    </div>
                                    <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                    <a href="cart.html" className="addToCart">Thêm vào giỏ</a>

                                </div>
                                <div className="product">
                                    <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product7.jpg)" }}>
                                    </div>
                                    <div className="product__info">
                                        <h3 className="product__name">Son môi cao cấp</h3>
                                        <div className="product__price">
                                            <div className="price__new"> 70.000<span className="price__unit">đ</span></div>
                                        </div>
                                    </div>
                                    <a href="product.html" className="viewDetail">Xem chi tiết</a>
                                    <a href="cart.html" className="addToCart">Thêm vào giỏ</a>

                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* <!-- Sales Policy --> */}
                <div className="main__policy">
                    <div className="row">
                        <div className="col l-3 m-6">
                            <div className="policy bg-1">
                                <img src="assets/img/policy/policy1.png" className="policy__img"></img>
                                <div className="policy__info">
                                    <h3 className="policy__title">GIAO HÀNG MIỄN PHÍ</h3>
                                    <p className="policy__description">Cho đơn hàng từ 300K</p>
                                </div>
                            </div>
                        </div>
                        <div className="col l-3 m-6">
                            <div className="policy bg-2">
                                <img src="assets/img/policy/policy2.png" className="policy__img"></img>
                                <div className="policy__info">
                                    <h3 className="policy__title">ĐỔI TRẢ HÀNG</h3>
                                    <p className="policy__description">Trong 3 ngày đầu tiên</p>
                                </div>
                            </div>
                        </div>
                        <div className="col l-3 m-6">
                            <div className="policy bg-1">
                                <img src="assets/img/policy/policy3.png" className="policy__img"></img>
                                <div className="policy__info">
                                    <h3 className="policy__title">HÀNG CHÍNH HÃNG</h3>
                                    <p className="policy__description">Cam kết chất lượng</p>
                                </div>
                            </div>
                        </div>
                        <div className="col l-3 m-6">
                            <div className="policy bg-2">
                                <img src="assets/img/policy/policy4.png" className="policy__img"></img>
                                <div className="policy__info">
                                    <h3 className="policy__title">TƯ VẤN 24/24</h3>
                                    <p className="policy__description">Giải đáp mọi thắc mắc</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <br />
                <br />
                <br />
                <br /> */}

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
                                        <input className="send-email__input" type="email" placeholder="Nhập Email..." />
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
                    <span className="footer__text"> &copy Bản quyền thuộc về <a className="footer__link" href="#"> Phương Giang</a></span>
                </div>
            </div>
            {/* <!-- Modal Form --> */}
            <div className="ModalForm">
                <div className="modal" id="my-Register">
                    <a href="#" className="overlay-close"></a>
                    <div className="authen-modal register">
                        <h3 className="authen-modal__title">Đăng Kí</h3>
                        <div className="form-group">
                            <label htmlFor="account" className="form-label">Họ Tên</label>
                            <input id="account" name="account" type="text" className="form-control" />
                            <span className="form-message">Không hợp lệ !</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Tài khoản Email *</label>
                            <input id="password" name="password" type="text" className="form-control" />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Mật khẩu *</label>
                            <input id="password" name="password" type="text" className="form-control" />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Nhập lại mật khẩu *</label>
                            <input id="password" name="password" type="text" className="form-control" />
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
                            <label htmlFor="account" className="form-label">Địa chỉ email *</label>
                            <input id="account" name="account" type="text" className="form-control" />
                            <span className="form-message">Tài khoản không chính xác !</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Mật khẩu *</label>
                            <input id="password" name="password" type="text" className="form-control" />
                            <span className="form-message"></span>
                        </div>
                        <div className="authen__btns">
                            <div className="btn btn--default">Đăng Nhập</div>
                            <input type="checkbox" className="authen-checkbox" />
                            <label className="form-label">Ghi nhớ mật khẩu</label>
                        </div>
                        <a className="authen__link">Quên mật khẩu ?</a>
                    </div>
                </div>
                <div className="up-top" id="upTop">
                    <i className="fas fa-chevron-up"></i>
                </div>

            </div>

        </>
    );
}



export default Home;