import React, { useEffect , useState} from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products"; 

const ProductList = () => {
	const [products, setProducts]= useState([]);

	useEffect(() => {
		async function fetchData() {
		const response = await axios(API);
		setProducts(response.data);
		}
		fetchData();
	}, []);

	// Esta es una manera menos oficial y no recomendada por la documention
	// useEffect(async ()=>{
	// 	const response = await axios(API);
	// 	setProducts(response.data);
	// }, []);

	return (
		<section className="main-container">
			<div className="ProductList">
			{products.map(product =>(
				<ProductItem />
			))}
			</div>
		</section>
	);
}

export default ProductList;