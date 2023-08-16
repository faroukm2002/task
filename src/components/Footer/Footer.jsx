import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer class="bg-dark text-center text-white p-4 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4 class="mb-3">Get in Touch</h4>
          <p>
            <i class="fas fa-envelope mr-2"></i> farouk@gmail.com
          </p>
          <p>
            <i class="fab fa-whatsapp mr-2"></i> +0129362200
          </p>
        </div>
        <div class="col-md-4">
          <h4 class="mb-3">Sign up for free</h4>
          <button type="button" class="btn btn-outline-light">Sign up</button>
        </div>
        <div class="col-md-4">
          <h4 class="mb-3">Social Media</h4>
          <a href="https://twitter.com" target="_blank">
            <i class="fab fa-twitter fa-lg m-3"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <i class="fab fa-facebook-f fa-lg m-3"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <i class="fab fa-linkedin-in fa-lg m-3"></i>
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <p class="m-2">
          &copy; 2023 All rights reserved
        </p>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;
