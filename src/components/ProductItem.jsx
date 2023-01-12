import React from 'react';
import '../styles/ProductItem.scss';
import addIcon from "@icons/bt_add_to_cart.svg"

const ProductItem = ({product}) => {

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>{product.price} Euros</p>
					<p>{product.title}</p>
				</div>
				<figure>
					<img src={addIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;