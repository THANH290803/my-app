import React from 'react'

class dialog extends React.Component{
    render(){
        return(
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
        )
    }
}

export default dialog;