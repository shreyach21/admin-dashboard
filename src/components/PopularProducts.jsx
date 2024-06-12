import React from "react";
import { Link } from "react-router-dom";

const popularProducts = [
  {
    id: "3432",
    product_name: 'Macbook M1 Pro 14"',
    product_thumbnail:
      "https://images.unsplash.com/photo-1518118014377-ce94f3eae7af?q=80&w=2588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    product_price: "$1499.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy Buds 2",
    product_thumbnail:
      "https://media.istockphoto.com/id/1506271064/photo/bluetooth-wireless-headphones-black-color-with-box-and-charger-on-white-background-box-with.jpg?s=1024x1024&w=is&k=20&c=Glq5ccYngKnpdY0jI7R_fSiIhtpy1OLBhyY6pQ65fGU=",
    product_price: "$399.00",
    product_stock: 24,
  },
  {
    id: "6534",
    product_name: "Asus Zenbook Pro",
    product_thumbnail:
      "https://www.cnet.com/a/img/resize/5b18ae907916a009ed3d54facbc1653bb668814b/hub/2019/09/06/2306e1ad-a1a8-47ce-afb5-3d1cdd59d27c/31-asus-zenbook-pro-duo.jpg?auto=webp&fit=crop&height=900&width=1200",
    product_price: "$899.00",
    product_stock: 56,
  },
  {
    id: "9234",
    product_name: "LG Flex Canvas",
    product_thumbnail:
      "https://www.financialexpress.com/wp-content/uploads/2015/01/2lg.jpg",
    product_price: "$499.00",
    product_stock: 98,
  },
  {
    id: "4314",
    product_name: "Apple Magic Touchpad",
    product_thumbnail:
      "https://media.cnn.com/api/v1/images/stellar/prod/210524162545-magic-trackpad-2-review-lead.jpg?q=w_4032,h_2268,x_0,y_0,c_fill",
    product_price: "$699.00",
    product_stock: 0,
  },
  {
    id: "4342",
    product_name: "Nothing Earbuds One",
    product_thumbnail:
      "https://5.imimg.com/data5/SELLER/Default/2022/7/SY/HG/RU/47719589/b181-nothing-original-imag6g8q8cdkkb9z.jpeg",
    product_price: "$399.00",
    product_stock: 453,
  },
];

const PopularProducts = () => {
  return (
    <div className="bg-white  rounded-sm shadow-md border border-black/10 px-4 py-3">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="flex flex-col mt-4 gap-3">
        {popularProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="flex hover:no-underline"
          >
            <div className="w-10 h-10 rounded-sm bg-gray-200 min-w-10 overflow-hidden">
              <img
                className="w-full h-full object-cover "
                src={product.product_thumbnail}
                alt={product.product_name}
              ></img>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span
                className={`text-sm font-medium ${
                  product.product_stock === 0
                    ? "text-orange-500"
                    : "text-green-500"
                }`}
              >
                {product.product_stock === 0
                  ? "out of stock"
                  : `${product.product_stock} in stock`}
              </span>
            </div>
            <div className="pl-2 text-xs text-gray-400 ">
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
