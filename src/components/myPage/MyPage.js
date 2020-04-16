import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import './MyPage.css';

const propTypes = {
};
const defaultProps = {
};

@observer
class MyPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="mypage">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="list-group my-4">
                                    <Link className="list-group-item" to="/#">전체 주문 내역</Link>
                                    <Link className="list-group-item" to="/#">개인정보 수정</Link>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <h4 className="title text-center">마이 페이지</h4>
                                <div className="ml-1 mt-5">
                                    <h5>주문내역</h5>
                                </div>
                                <div className="row border-top border-bottom">
                                    <span className="col-lg-2 text-center">날짜</span>
                                    <span className="col-lg-6 text-center">상품정보</span>
                                    <span className="col-lg-2 text-center">상태</span>
                                    <span className="col-lg-2 text-center">배송확인</span>
                                </div>

                                <div>내역</div>

                                <div className="mt-1">* 최근 한달간의 주문내역이 보여집니다</div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

MyPage.propTypes = propTypes;
MyPage.defaultProps = defaultProps;
export default MyPage;
