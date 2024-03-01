import React from "react";
import "./cart.css"
import Header from "../../Component/header"
import Footer from "../../Component/footer"
import FromLogin from "../../Component/dialog"


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
    }

    product = {
        id: 1,
        img: './assets/img/product/product2.jpg',
        name: 'sp1',
        price: 121211,
    };

    handleIncrease = () => {
        this.setState(prevState => ({
            quantity: Math.min(prevState.quantity + 1, 10)
        }));
    };

    handleDecrease = () => {
        this.setState(prevState => ({
            quantity: Math.max(prevState.quantity - 1, 1)
        }));
    };
    handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            this.setState({ quantity: value });
        }
    };


    render() {
        return (
            <>
                <Header />
                <div className="main">
                    <div className="grid wide">
                        <h3 className="main__notify">
                            <div className="main__notify-icon">
                                <i className="fas fa-check" />
                                {/* <i class="fas fa-times"></i> */}
                            </div>
                            <div className="main__notify-text">Giỏ hàng đã được cập nhật.</div>
                        </h3>
                        <div className="row">
                            <div className="col l-8 m-12 s-12">
                                <div className="main__cart">
                                    <div className="row title">
                                        <div className="col l-1 m-1 s-0">Chọn</div>
                                        <div className="col l-4 m-4 s-8">Sản phẩm</div>
                                        <div className="col l-2 m-2 s-0">Giá</div>
                                        <div className="col l-2 m-2 s-0">Số lượng</div>
                                        <div className="col l-2 m-2 s-4">Tổng</div>
                                        <div className="col l-1 m-1 s-0">Xóa</div>
                                    </div>
                                    <div className="row item">

                                        <div className="col l-1 m-1 s-0">
                                            <input type="checkbox" name="a" />
                                        </div>
                                        <div className="col l-4 m-4 s-8">
                                            <div className="main__cart-product">
                                                <img src={this.product.img} alt="" />
                                                <div className="name">{this.product.name} </div>
                                            </div>
                                        </div>
                                        <div className="col l-2 m-2 s-0">
                                            <div className="main__cart-price">{(this.product.price)} VND</div>
                                        </div>
                                        <div className="col l-2 m-2 s-0">
                                            <div className="buttons_added">
                                                <input className="minus is-form" type="button" defaultValue="-" onClick={this.handleDecrease} />
                                                <input
                                                    aria-label="quantity"
                                                    className="input-qty"
                                                    type="number"
                                                    max={10}
                                                    min={1}
                                                    value={this.state.quantity}
                                                    onChange={this.handleInputChange}
                                                />
                                                <input className="plus is-form" type="button" defaultValue="+" onClick={this.handleIncrease} />
                                            </div>
                                        </div>
                                        <div className="col l-2 m-2 s-4">
                                            <div className="main__cart-price">{(this.product.price) * (this.state.quantity)} VND</div>
                                        </div>
                                        <div className="col l-1 m-1 s-0">
                                            <span className="main__cart-icon">
                                                <i className="far fa-times-circle " />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn btn--default">
                                        Cập nhật giỏ hàng
                                    </div>
                                </div>
                            </div>
                            <div className="col l-4 m-12 s-12">
                                <div className="main__pay">
                                    <div className="main__pay-title">Tổng số lượng</div>

                                    <div className="pay-info">
                                        <div className="main__pay-text">
                                            Tổng thành tiền</div>
                                        <div className="main__pay-price">
                                            {(this.product.price) * (this.state.quantity)} VND
                                        </div>
                                    </div>
                                    <div className="btn btn--default orange">Tiến hành thanh toán</div>

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

}

export default Cart;