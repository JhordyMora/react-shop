import React, { useContext } from 'react';
import AppContext from "../context/AppContext";
import '../styles/OrderItem.scss';
import closeIcon from "@icons/iconClose.png";

const OrderItem = (props) => {
	const {product, indexValue } = props;
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product)
	}
	return (
		<div className="OrderItem">
			<figure>
				{console.log(product[0])}
				<img src={product[0].images[0]} alt={product.title} />
			</figure>
			<p>{product[0].title}</p>
			<p>{product[0].price} Euros</p>
			<img src={closeIcon} alt="close" onClick={()=> handleRemove(indexValue)} />
			
		</div>
	);
}

export default OrderItem;