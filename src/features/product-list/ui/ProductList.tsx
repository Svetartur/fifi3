import React from 'react';
import { ProductCard } from './ProductCard';
import { MOCK_PRODUCTS } from '../model/mockData';

export const ProductList: React.FC = () => {
  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '24px', textAlign: 'center' }}>
        Каталог смартфонів (Група №1)
      </h2>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
