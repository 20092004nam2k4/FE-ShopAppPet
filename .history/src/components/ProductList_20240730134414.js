import React, { useState } from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const tabs = ['Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];

const products = [
  { name: 'Ngao Neapolitan', img: 'https://example.com/ngao-neapolitan.jpg' },
  { name: 'Ngao Brazil', img: 'https://example.com/ngao-brazil.jpg' },
  { name: 'Ngao Dogo Argentino', img: 'https://example.com/ngao-dogo-argentino.jpg' },
  { name: 'Ngao Pháp Bordeaux', img: 'https://example.com/ngao-phap-bordeaux.jpg' },
  { name: 'Ngao Tây Tạng', img: 'https://example.com/ngao-tay-tang.jpg' },
  { name: 'Ngao Ý Cane Corso', img: 'https://example.com/ngao-y-cane-corso.jpg' },
];

function ProductList() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>

    </div>
  );
}

export default ProductList;
