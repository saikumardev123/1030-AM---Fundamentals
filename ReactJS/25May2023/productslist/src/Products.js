function Products(props) {

    const renderList = () => {
        let newArray = props.data.map(function (product) {

            return <li key={product.id}>{product.id} {product.title}</li>

        })
        return newArray;
    }

    return (
        <div>
            <h1>Products</h1>
            <h1>{props.data.length}</h1>
            <ul>
                {renderList()}
            </ul>
        </div>
    )

}

export default Products;