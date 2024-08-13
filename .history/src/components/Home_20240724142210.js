import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner.js';
import ProductList from './ProductList.js';
import Footer from './Footer';
import './CSS/Home.css'

const Home = () => {
    return (
        <div className="home-css">
            <Navbar />
            <Banner />
            <ProductList />
            <ul className="social-toolbar">
  <li className="social-toolbar__item" data-type="zalo">
    <a
      className="social-toolbar__link"
      href="https://zalo.me/1468374330755950828"
      target="_blank"
    >
      {" "}
      <span className="social-toolbar__title">zalo</span>
      <span className="social-toolbar__icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          version="1.1"
        >
          <path d="M630.352013 835.800687c-56.625672 0-113.251344-9.980305-163.216315-29.942963-23.312962-6.653537-39.969317-16.635889-59.94937-16.635889-19.98824 0-39.969317 13.31219-56.624648 23.292496-33.311687 16.635889-69.949118 23.286356-109.918435 19.962657-23.316032-3.326768-26.646893-16.638959-9.992585-29.942963 6.661723-6.658653 19.983123-13.31219 23.316032-19.963681 13.323447-6.658653 19.98517-19.965727 26.64587-29.946033 16.656355-26.621311 23.313985-46.582945 3.332908-69.873394C227.32082 619.536178 194.012204 539.684526 194.012204 449.848475c0-153.050792 106.585527-286.139949 256.472256-349.35469l-159.88136 0c-96.590895 0-179.862437 83.178421-179.862437 182.996824l0 449.172069c0 99.81431 83.271542 182.994778 179.862437 182.994778l443.004603 0c93.28357 0 174.113503-77.579913 179.551352-172.793438C836.590168 799.295262 736.793254 835.800687 630.352013 835.800687zM790.228257 546.338063c43.301202-3.328815 69.947072-26.616194 73.281003-76.525907-6.661723-49.907667-29.979802-73.199139-73.281003-79.852676-46.63104 6.652514-69.945025 29.945009-73.27691 79.852676C720.284255 519.721869 743.597217 543.009248 790.228257 546.338063zM790.228257 429.885817c19.984147 0 29.979802 13.308097 29.979802 39.926338s-9.995655 39.925315-29.979802 39.925315c-19.98517 0-29.975708-13.307074-33.307593-39.925315C760.252549 443.193915 770.243087 429.885817 790.228257 429.885817zM567.063595 546.338063c16.656355 0 29.978778-6.653537 39.97034-16.634866 3.332908 9.981329 9.994632 16.634866 19.984147 16.634866 13.323447 0 19.98517-9.982352 19.98517-26.616194l0-99.81738c0-19.962657-6.662747-26.618241-19.98517-26.618241-9.990538 0-16.651238 6.655584-19.984147 16.636912-6.661723-13.310144-19.98517-19.962657-39.97034-19.962657-39.969317 6.652514-63.282279 33.271778-66.615187 79.852676C503.78234 519.721869 527.095301 543.009248 567.063595 546.338063zM573.726342 429.885817c19.983123 0 29.978778 13.308097 33.307593 39.926338-3.328815 26.618241-13.32447 39.925315-33.307593 39.925315-19.98517 0-29.979802-13.307074-33.30964-39.925315C543.74654 443.193915 553.741171 429.885817 573.726342 429.885817zM683.643754 546.338063c13.322423 0 19.98517-6.653537 19.98517-23.291472L703.628924 350.034165c0-13.310144-6.66377-23.291472-19.98517-23.291472-13.32447 0-19.984147 9.981329-19.984147 23.291472l0 173.012426C663.659607 539.684526 670.320307 546.338063 683.643754 546.338063zM340.571141 363.342262c3.328815 9.981329 6.65763 16.635889 19.980054 16.635889l73.281003 0-89.933265 129.759319c-3.328815 3.326768-3.328815 9.984399-3.328815 16.636912 0 9.980305 6.65763 16.633842 23.312962 19.962657l109.918435 0c13.322423-3.328815 19.983123-9.982352 19.983123-19.962657 0-13.310144-6.6607-16.636912-19.983123-19.962657L393.863904 506.411725l86.600357-123.106806c6.661723-6.655584 6.661723-13.308097 6.661723-19.962657 0-13.308097-6.661723-19.963681-23.317055-19.963681L360.551194 343.378581C347.228771 343.378581 343.899956 350.034165 340.571141 363.342262z" />
        </svg>
      </span>
    </a>{" "}
  </li>
  <li className="social-toolbar__item" data-type="messenger">
    <a
      className="social-toolbar__link"
      href="https://m.me/azpet.com.vn"
      target="_blank"
    >
      {" "}
      <span className="social-toolbar__title">messenger</span>
      <span className="social-toolbar__icon" aria-hidden="true">
        <svg
          height="511pt"
          viewBox="-2 0 511 511.99922"
          width="511pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m95.863281 512c-7.460937 0-14.890625-2.054688-21.507812-6.148438-12.160157-7.511718-19.414063-20.53125-19.414063-34.828124v-60c-42.816406-54.246094-61.320312-121.988282-52.144531-191.503907 14.710937-111.53125 106.378906-202.945312 217.949219-217.347656 78.585937-10.152344 155.726562 15.605469 211.726562 70.628906 56.003906 55.023438 83.101563 131.644531 74.359375 210.226563-12.667969 113.804687-104.566406 207.429687-218.5 222.628906-45.421875 6.023438-91.359375-.265625-133.503906-18.316406l-40.628906 20.300781c-5.820313 2.90625-12.09375 4.359375-18.335938 4.359375zm129.523438-473.832031c-95.539063 12.332031-174.027344 90.597656-186.632813 186.097656-8.121094 61.597656 9.019532 121.527344 48.277344 168.722656 2.707031 3.257813 4.1875 7.367188 4.1875 11.601563v66.433594c0 2.140624 1.207031 3.328124 2.207031 3.96875 1.027344.617187 2.648438 1.148437 4.554688.191406l48.324219-24.144532c4.945312-2.480468 10.789062-2.566406 15.820312-.195312 38.019531 17.839844 79.984375 24.359375 121.402344 18.851562 97.648437-13.023437 176.390625-93.21875 187.25-190.671874 7.503906-67.441407-15.730469-133.183594-63.738282-180.339844-48-47.175782-114.207031-69.25-181.652343-60.515625zm-2.320313-18h.175782zm0 0" />
          <path d="m128.398438 311.34375 83.273437-118.519531c3.46875-6.070313 11.46875-7.722657 17.058594-3.53125l55.785156 41.835937c3.78125 2.835938 8.898437 3.097656 12.949219.667969l67.929687-48.015625c9.96875-5.980469 21.566407 4.761719 16.371094 15.160156l-67.25 116.355469c-3.027344 6.054687-10.566406 8.25-16.371094 4.765625l-74.472656-44.683594c-3.40625-2.042968-7.621094-2.207031-11.175781-.429687l-68.816406 52.546875c-10.277344 5.144531-20.984376-6.171875-15.28125-16.152344zm0 0" />
        </svg>
      </span>
    </a>{" "}
  </li>
  <li className="social-toolbar__item" >
    <a className="social-toolbar__link" href="tel:0983779830" target="_blank">
      {" "}
      <span className="social-toolbar__title">0983779830</span>
      <span className="social-toolbar__icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z" />
        </svg>
      </span>
    </a>{" "}
  </li>
</ul>

            <Footer />
        </div>
    );
};

export default Home;
