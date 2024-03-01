import React, { useState, useEffect } from "react";
import "./product.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "../../Component/header"
import Footer from "../../Component/footer"
import FromLogin from "../../Component/dialog"

function BookDeatail() {
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
            <div className="main" style={{ backgroundColor: "pink" }}>
                <div className="grid wide">
                    <div className="productInfo">
                        <div className="row">
                            <div className="col l-5 m-12 s-12">
                                <a href="#">
                                    <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
                                    </div>
                                </a>
                                {/* <!-- <div className="owl-carousel owl-theme" id="sync2">
                            <a href="#" className="product">
                                <div className="product__avt" style="backgroundImage: url(assets/img/product/product1.jpg)">
                                </div>
                            </a>
                            <a href="#" className="product">
                                <div className="product__avt" style="backgroundImage: url(assets/img/product/product1.jpg)">
                                </div>
                            </a>
                            <a href="#" className="product">
                                <div className="product__avt" style="backgroundImage: url(assets/img/product/product2.jpg)">
                                </div>
                            </a>
                            <a href="#" className="product">
                                <div className="product__avt" style="backgroundImage: url(assets/img/product/product3.jpg)">
                                </div>
                            </a>
                        </div> --> */}

                            </div>
                            <div className="col l-7 m-12s s-12 pl">
                                <div className="main__breadcrumb">
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
                                <h3 className="productInfo__name">
                                    Azrouel dress variable
                                </h3>
                                <div className="productInfo__price">
                                    330.000 <span className="priceInfo__unit">đ</span>
                                </div>
                                <div className="productInfo__description">
                                    <p className="productIndfo__category-text"> Danh mục : <a href="# " className="productIndfo__category-link ">Nail</a></p>
                                    <p className="productIndfo__category-text"> Nhà sản xuất : <a href="# " className="productIndfo__category-link ">The Face Shop</a></p>
                                    <p className="productIndfo__category-text"> Tác giả : 322</p>
                                    <p className="productIndfo__category-text"> Năm xuất bản : 322</p>
                                </div>

                                <div className="productInfo__addToCart">
                                    <div className="buttons_added">
                                        <input className="minus is-form" type="button" value="-" onclick="minusProduct()" />
                                        <input aria-label="quantity" className="input-qty" max="10" min="1" name="" type="number" value="1" />
                                        <input className="plus is-form" type="button" value="+" onclick="plusProduct()" />
                                    </div>
                                    <div className=" btn btn--default orange ">Thêm vào giỏ hàng</div>
                                </div>
                                <div className="productIndfo__policy ">
                                    <div className="policy bg-1 ">
                                        <img src="./assets/img/policy/policy1.png " className="productIndfo__policy-img "></img>
                                        <div className="productIndfo__policy-info ">
                                            <h3 className="productIndfo__policy-title ">Giao hàng miễn phí</h3>
                                            <p className="productIndfo__policy-description ">Cho đơn hàng từ 300K</p>
                                        </div>
                                    </div>
                                    <div className="policy bg-2 ">
                                        <img src="./assets/img/policy/policy2.png " className="productIndfo__policy-img "></img>
                                        <div className="productIndfo__policy-info ">
                                            <h3 className="productIndfo__policy-title ">Giao hàng miễn phí</h3>
                                            <p className="productIndfo__policy-description ">Cho đơn hàng từ 300K</p>
                                        </div>
                                    </div>
                                    <div className="policy bg-1 ">
                                        <img src="./assets/img/policy/policy3.png " className="productIndfo__policy-img "></img>
                                        <div className="productIndfo__policy-info ">
                                            <h3 className="productIndfo__policy-title ">Giao hàng miễn phí</h3>
                                            <p className="productIndfo__policy-description ">Cho đơn hàng từ 300K</p>
                                        </div>
                                    </div>
                                    <div className="policy bg-2 ">
                                        <img src="./assets/img/policy/policy4.png " className="productIndfo__policy-img "></img>
                                        <div className="productIndfo__policy-info ">
                                            <h3 className="productIndfo__policy-title ">Giao hàng miễn phí</h3>
                                            <p className="productIndfo__policy-description ">Cho đơn hàng từ 300K</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="productIndfo__category ">
                                    <p className="productIndfo__category-text"> Danh mục : <a href="# " className="productIndfo__category-link ">Nail</a></p>
                                    <p className="productIndfo__category-text"> Nhà sản xuất : <a href="# " className="productIndfo__category-link ">The Face Shop</a></p>
                                    <p className="productIndfo__category-text"> Tác giả : 322</p>
                                    <p className="productIndfo__category-text"> Năm xuất bản : 322</p>

                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="productDetail ">
                        <div className="main__tabnine ">
                            <div className="grid wide ">
                                {/* <!-- Tab items --> */}
                                <div className="tabs ">
                                    <div className="tab-item active">
                                        Mô tả
                                    </div>
                                    {/* <div className="tab-item ">
                                        Đánh giá
                                    </div> */}
                                    <div className="line "></div>
                                </div>
                                {/* <!-- Tab content --> */}
                                <div className="tab-content ">
                                    <div className="tab-pane active ">
                                        <div className="productDes ">
                                            <div className="productDes__title ">Lorem Ipsum là gì?</div>
                                            <p className="productDes__text "> <a href="# " className="productDes__link ">Lorem Ipsum </a> chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành
                                                công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học
                                                văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang,
                                                như Aldus PageMaker.
                                            </p>
                                            <div className="productDes__title ">Lorem Ipsum là gì?</div>
                                            <p className="productDes__text "> <a href="# " className="productDes__link ">Lorem Ipsum </a> chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành
                                                công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học
                                                văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang,
                                                như Aldus PageMaker.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane ">
                                        <div className="productDes__ratting ">
                                            <div className="productDes__ratting-title ">Đánh giá của bạn</div>
                                            <div className="productDes__ratting-wrap">
                                                <div id="rating">
                                                    <input type="radio" id="star5" name="rating" value="5" />
                                                    <label className="full" for="star5" title="Awesome - 5 stars"></label>

                                                    <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                                    <label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>

                                                    <input type="radio" id="star4" name="rating" value="4" />
                                                    <label className="full" for="star4" title="Pretty good - 4 stars"></label>

                                                    <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                                    <label className="half" for="star3half" title="Meh - 3.5 stars"></label>

                                                    <input type="radio" id="star3" name="rating" value="3" />
                                                    <label className="full" for="star3" title="Meh - 3 stars"></label>

                                                    <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                                    <label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>

                                                    <input type="radio" id="star2" name="rating" value="2" />
                                                    <label className="full" for="star2" title="Kinda bad - 2 stars"></label>

                                                    <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                                    <label className="half" for="star1half" title="Meh - 1.5 stars"></label>

                                                    <input type="radio" id="star1" name="rating" value="1" />
                                                    <label className="full" for="star1" title="Sucks big time - 1 star"></label>

                                                    <input type="radio" id="starhalf" name="rating" value="half" />
                                                    <label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                                </div>
                                                <textarea className="ratecomment" name=" " id=" " cols="30 " rows="1" placeholder="Vui lòng viết đánh giá của bạn "></textarea>
                                            </div>
                                            <input type="submit " className="btn btn--default" value="Đánh giá" />
                                        </div>
                                        <ul className="rate__list">
                                            <li className="rate__item">
                                                <div className="rate__info">
                                                    <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9PFgn_rHIm9i3eIlVr5RwzwY2w8EystHF213wj=s32-c-mo" alt="" />
                                                    <h3 className="rate__user">Giang Tuấn Phương</h3>
                                                    <div className="rate__star">
                                                        <div className="group-star">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rate__comment">Sản phẩm chất lượng rất tốt thật tuyệt vời</div>
                                            </li>
                                            <li className="rate__item">
                                                <div className="rate__info">
                                                    <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9PFgn_rHIm9i3eIlVr5RwzwY2w8EystHF213wj=s32-c-mo" alt="" />
                                                    <h3 className="rate__user">Giang Tuấn Phương</h3>
                                                    <div className="rate__star">

                                                    </div>
                                                </div>
                                                <div className="rate__comment">Sản phẩm chất lượng rất tốt</div>
                                            </li>
                                            <li className="rate__item">
                                                <div className="rate__info">
                                                    <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9PFgn_rHIm9i3eIlVr5RwzwY2w8EystHF213wj=s32-c-mo" alt="" />
                                                    <h3 className="rate__user">Giang Tuấn Phương</h3>
                                                    <div className="rate__star">

                                                    </div>
                                                </div>
                                                <div className="rate__comment">Sản phẩm chất lượng rất tốt</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__frame ">
                        <div className="grid wide ">
                            <h3 className="category__title ">Ngọc Ánh Cometics</h3>
                            <h3 className="category__heading ">Sản Phẩm Tương tự</h3>
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
                </div >
            </div >
            <Footer />
            {/* <!-- Modal Form --> */}
            <FromLogin />
        </>

    );
}

export default BookDeatail;