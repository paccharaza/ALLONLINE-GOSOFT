import React from "react"
import { FiUser , FiShoppingCart } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
           <a href="/">AllOnline <BsShop /></a>
          </div>
          <div className='search-box f_flex'> 
            <i className='fa fa-search'></i>
            <input type='text' placeholder='ค้นหาสินค้า' />
            <span><a href=""> <ImSearch /></a>
            </span>
          </div>

          <div className='icon f_flex width'>
          <a href='/register'>สมัครสมาชิก</a>
          <FiUser />
          <a href='/login'> เข้าสู่ระบบ</a>
            <div className='cart'>
              <Link to='/cart'>
              <a href='#'><FiShoppingCart /></a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Search
