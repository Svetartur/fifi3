import React from 'react';
import type { IProductBrief } from '../model/types';

interface ProductCardProps {
  product: IProductBrief;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, title, price, imageUrl, description, discountPrice, rating, isAvailable } = product;

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'left',
    boxSizing: 'border-box',
    width: '260px',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    aspectRatio: '3 / 4',
    overflow: 'hidden',
    backgroundColor: 'var(--social-bg)',
    borderBottom: '1px solid var(--border)',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const idBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'var(--code-bg)',
    color: 'var(--text-h)',
    fontFamily: 'var(--mono)',
    fontSize: '12px',
    padding: '3px 6px',
    borderRadius: '4px',
    border: '1px solid var(--border)',
    zIndex: 2,
  };

  const statusBadgeStyle = (available: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: available ? '#22c55e' : '#ef4444',
    color: '#ffffff',
    fontSize: '10px',
    padding: '3px 6px',
    borderRadius: '4px',
    zIndex: 2,
  });

  const contentStyle: React.CSSProperties = {
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: '6px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 600,
    color: 'var(--text-h)',
    margin: '0',
    lineHeight: '1.3',
  };

  const ratingContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    color: '#fbbf24',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '13px',
    color: 'var(--text)',
    lineHeight: '1.4',
    margin: '4px 0',
  };

  const priceContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    marginTop: 'auto',
    paddingTop: '6px',
  };

  const activePriceStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'var(--text-h)',
  };

  const discountPriceStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'var(--accent)',
  };

  const originalPriceStyle: React.CSSProperties = {
    fontSize: '13px',
    color: '#9ca3af',
    textDecoration: 'line-through',
  };

  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <div style={idBadgeStyle}>{id}</div>
        
        {isAvailable !== undefined && (
          <div style={statusBadgeStyle(isAvailable)}>
            {isAvailable ? 'В наявності' : 'Немає'}
          </div>
        )}
        
        <img 
          src={imageUrl} 
          alt={title} 
          style={imageStyle} 
        />
      </div>

      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>

        {rating !== undefined ? (
          <div style={ratingContainerStyle}>
            <span>{'★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating))}</span>
            <span style={{ color: 'var(--text)' }}>({rating})</span>
          </div>
        ) : (
          <div style={{ ...ratingContainerStyle, color: '#9ca3af' }}>
            <span>☆☆☆☆☆ (немає оцінок)</span>
          </div>
        )}

        {description !== undefined ? (
          <p style={descriptionStyle}>{description}</p>
        ) : (
          <p style={{ ...descriptionStyle, color: '#9ca3af', fontStyle: 'italic' }}>
            Опис відсутній
          </p>
        )}

        <div style={priceContainerStyle}>
          {discountPrice !== undefined ? (
            <>
              <span style={discountPriceStyle}>{discountPrice} ₴</span>
              <span style={originalPriceStyle}>{price} ₴</span>
            </>
          ) : (
            <span style={activePriceStyle}>{price} ₴</span>
          )}
        </div>
      </div>
    </div>
  );
};
