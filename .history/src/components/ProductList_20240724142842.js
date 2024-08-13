// src/components/ProductList.js
import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const products = [
    {
        id: 1,
        name: 'Dog Food',
        price: '50,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 2,
        name: 'Cat Toy',
        price: '30,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 3,
        name: 'Bird Cage',
        price: '200,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 4,
        name: 'Fish Tank',
        price: '500,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 1,
        name: 'Dog Food',
        price: '50,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 2,
        name: 'Cat Toy',
        price: '30,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 3,
        name: 'Bird Cage',
        price: '200,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 4,
        name: 'Fish Tank',
        price: '500,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
];

const ProductList = () => {
    return (
        <div>
            <div className="product-list container">
                <h2>Our Products</h2>
                <div className="product-list-inner">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="product-card-body">
                                <h5 className="product-card-title">{product.name}</h5>
                                <p className="product-card-text">{product.price}</p>
                                <button className="product-card-button">Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
            <ul className="social-toolbar">
  <li className="social-toolbar__item" data-type="zalo">
    <a
      className="social-toolbar__link"
      href="https://zalo.me/1468374330755950828"
      target="_blank"
    >
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
    </a>
  </li>
  <!-- New Item -->
  <li className="social-toolbar__item" data-type="new-type">
    <a
      className="social-toolbar__link"
      href="https://example.com"
      target="_blank"
    >
      <span className="social-toolbar__title">New Item</span>
      <span className="social-toolbar__icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <!-- Add SVG path here -->
        </svg>
      </span>
    </a>
  </li>
</ul>

            </div>
        </div>
    );
};

export default ProductList;
