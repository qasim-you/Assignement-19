import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer py-5 text-white'>
      <footer class="py-3 my-4 ">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#/" class="nav-link px-2 text-white">Features</a></li>
      <li class="nav-item"><a href="#/" class="nav-link px-2 text-white">Home</a></li>
      <li class="nav-item"><a href="#/" class="nav-link px-2 text-white">Pricing</a></li>
      <li class="nav-item"><a href="#/" class="nav-link px-2 text-white">FAQs</a></li>
      <li class="nav-item"><a href="#/" class="nav-link px-2 text-white">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
  </footer>
    </div>
  )
}

export default Footer
