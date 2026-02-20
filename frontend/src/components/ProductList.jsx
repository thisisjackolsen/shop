import React, { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);














}  );    </div>      ))}        </div>          <strong>${p.price}</strong>          <p>{p.description}</p>          <h3>{p.name}</h3>        <div key={p._id} className="product">      {products.map(p => (    <div className="product-list">
n  return (n  if (loading) return <p>Loading...</p>;