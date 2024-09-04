import React from 'react';

const TopProducts = () => {
  const products = [
    { id: 1, name: 'Home Decor Range', popularity: 45, sales: 45, color: '#3182CE' },
    { id: 2, name: "Disney Princess Pink Bag 18'", popularity: 29, sales: 29, color: '#38A169' },
    { id: 3, name: 'Bathroom Essentials', popularity: 18, sales: 18, color: '#805AD5' },
    { id: 4, name: 'Apple Smartwatches', popularity: 25, sales: 25, color: '#ED8936' },
  ];

  return (
    <div className="top-products">
      <h2 className="title">Top Products</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{`0${product.id}`}</td>
              <td>{product.name}</td>
              <td>
                <div className="progress-bar" style={{ backgroundColor: `${product.color}33` }}>
                  <div
                    className="progress"
                    style={{
                      width: `${product.popularity}%`,
                      backgroundColor: product.color,
                    }}
                  ></div>
                </div>
              </td>
              <td>
                <span className="sales-badge" style={{ color: product.color }}>
                  {`${product.sales}%`}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;
