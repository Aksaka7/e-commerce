const products = [
  {  name: 'Product 1', price: 100 },
  {  name: 'Product 2', price: 200 },
  {  name: 'Product 3', price: 300 },
  {  name: 'Product 4', price: 400 },
  {  name: 'Product 5', price: 500 },
  {  name: 'Product 6', price: 600 },
]

function App() {

  return (
    <>
    <Header />
    <ProductList />
    </>
      
    
  )
}

function Header(){
  return(
    <h1>Header </h1>
  )
}

function ProductList(){
  return(
    <div>
      <h2>Product List</h2>
      <Product product={products[0]}/>
      <Product product={products[1]}/>
      <Product product={products[2]}/>
      <Product product={products[3]}/>
      <Product product={products[4]}/>
      <Product product={products[5]}/>

      
    </div>
    
  )
}

function Product(props: any){
  return(
    <h3>{props.product.name} --- {props.product.price}</h3>
  )
}



export default App
