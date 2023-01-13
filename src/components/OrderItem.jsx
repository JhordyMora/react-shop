import React from 'react';
import '../styles/OrderItem.scss';
import closeIcon from "@icons/iconClose.png";

const OrderItem = ({product}) => {
	return (
		<div className="OrderItem">
			<figure>
				{console.log(product[0])}
				<img src={product[0].images[0]} alt={product.title} />
			</figure>
			<p>{product[0].title}</p>
			<p>{product[0].price} Euros</p>
			<img src={closeIcon} alt="close" />
			
		</div>
	);
}

export default OrderItem;