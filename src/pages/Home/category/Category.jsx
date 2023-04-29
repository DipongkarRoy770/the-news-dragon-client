import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from './../newsCart/NewsCart';

const Category = () => {
  const {id}=useParams()
  const categoryNews = useLoaderData()
  return (
    <div>
      <p>this category news  :{categoryNews.length}</p>
      {
        categoryNews.map(category => <NewsCart
        key={category.id}
        category={category}
        ></NewsCart>)
      }
    </div>
  );
};

export default Category;