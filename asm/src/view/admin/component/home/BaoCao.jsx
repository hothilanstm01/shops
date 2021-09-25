import React from 'react'
import styled from 'styled-components';

 const BoxContent = styled.div`
    text-align: left;
    width: 50%;
    margin: 0 auto;
    .baocao{
        padding: 20px;
        border: 1px solid #151515;
        font-size: 1rem;
        ol{
            padding: 10px;
        }
        h2{
            text-align: center;font-size:2rem
        }
    }
 `
function BaoCao() {
    return (
        <BoxContent>
            <div className="baocao">
                <h2>Báo Cáo</h2>
                <ol>
                    <li>Đỗ dữ liệu vào trang request api</li>
                    <li>Sử dụng router để nhúng các trang chức năng vào layout: chi tiết sp, form đăng nhập, giỏ hàng.</li>
                    <li>Hiển thị sản phẩm theo loại</li>
                    <li>Giỏ hàng xóa tổng tiền</li>
                    <li>Đăng nhập bằng google </li>
                    <li>Chức năng bình luận</li>
                    <li>Thích sản phẩm</li>
                    <li>Lọc sản phẩm nổi bật, sản phâm mới</li>
                    <li>Redux toolkit</li>
                    <li>Api thời tiết, hình đẹp</li>
                </ol>
            </div>
        </BoxContent>
    )
}

export default BaoCao
