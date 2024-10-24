import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = [
    { name: "Trang chủ", path: '/' }, 
    { name: "Cho thuê phòng trọ", path: '/cho-thue-phong-tro' },
    { name: "Nhà cho thuê", path: '/nha-cho-thue' },
    { name: "Cho thuê căn hộ", path: '/cho-thue-can-ho' },
    { name: "Bảng dịch vụ", path: '/service-page' }
]

const notActive = 'hover:bg-[#fb173d] px-4 h-full flex items-center bg-[#3961fb]'
const active = 'hover:bg-[#fb173d] px-4 h-full flex items-center bg-[#3961fb]'

const Navigator = () => {
    return (
        <div className='w-screen flex justify-center items-center h-[50px] bg-[#3961fb] text-white'>
            <div className='max-w-1100 flex items-center gap-5 text-sm font-medium '>
                {nav.length > 0 && nav.map((item, index) => {

                 return (
                    <div key={index} className='h-[50px] flex justify-center items-center'>
                        <NavLink 
                            to={item.path}
                            className={({ isActive }) => isActive ? active : notActive}
                        >
                            {item.name}
                        </NavLink>
                    </div>
                 )
                })}
            </div>
        </div>
    )
}

export default Navigator;
