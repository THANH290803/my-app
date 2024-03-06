import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'
import Header from "../Component/header"
import Footer from "../Component/footer"
import FromLogin from "../Component/dialog"
import { Link } from "react-router-dom";

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
            <Header />
            <div className="main" style={{ backgroundColor: 'pink', paddingTop: "0px", paddingLeft: "0px", paddingRight: "0px" }}>
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
                                            <Link to={'/Book-Detail'} className="viewDetail">Xem chi tiết</Link>
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
                    <div className="row" style={{ display: "flex", flexWrap: "nowrap" }}>
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
            <Footer />
            {/* <!-- Modal Form --> */}
            <FromLogin />

        </>
    );
}



export default Home;