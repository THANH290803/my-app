import React from 'react'
import "../BookDetail/product.css"
import Header from "../../Component/header"
import Footer from "../../Component/footer"
import FromLogin from "../../Component/dialog"

function book() {
    return (
        <>
            <Header />
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                                        <div className="product__avt" style={{ backgroundImage: "url(assets/img/product/product1.jpg)" }}>
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
                        <div className="pagination" style={{ paddingBottom: "40px", marginBottom: "0px" }}>
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
            <Footer />
            {/* <!-- Modal Form --> */}
            <FromLogin />
        </>
    )
}


export default book;