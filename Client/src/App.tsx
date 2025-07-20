import { useEffect, useState } from "react";
import { IProduct } from "./model/IProduct";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5291/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: `Ürün ${products.length + 1}`,
        price: (products.length + 1) * 100,
        isActive: true,
      },
    ]);
  }

  return (
    <>
      <Header products={products} />
      <ProductList products={products} addProduct={addProduct} />
    </>
  );
}

function Header(props: any) {
  return <>{newFunction(props)}</>;
}

function newFunction(props: any) {
  return <h1>Toplam Ürün sayısı: {props.products.length} </h1>;
}

function ProductList(props: any) {
  return (
    <div>
      <h2>Product List</h2>
      {props.products.map((p: IProduct) => (
        <Product key={p.id} product={p} />
      ))}

      <button onClick={props.addProduct}> Ürünü Ekle</button>
    </div>
  );
}

function Product(props: any) {
  return (
    <>
      {props.product.isActive ? (
        <div>
          <h3>{props.product.name}</h3>
          <p>Price: {props.product.price} TL</p>
        </div>
      ) : (
        <p>Bu ürün Aktif Değil.</p>
      )}
    </>
  );
}
/* Yukardaki Listede Oyuncu Aktif degil ise ekrana müşteri aktif degildir  yazacak*/

export default App;
