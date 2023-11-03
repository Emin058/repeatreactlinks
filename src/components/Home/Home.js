import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./Home.module.scss"

const Home = () => {

const[products,setProducts] = useState([]);

// const[other,setOther]=useState([]);
const[selectedCategory,setSelectedCategory]=useState('');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
     /*eger sehife acilan kimi butun produktlari gormek istiyirsense bos qoy usestate */
const getAllProducts=async()=>{
  const response = await axios.get("https://fakestoreapi.com/products");
  setProducts(response.data)
};


useEffect(()=>{
  getAllProducts();
},[]);

const categories =[

  {
    id: "men's clothing",
    name:"kisi geyim",
  },

  {
    id: "jewelery",
    name:"zinyet",
  },

  {
    id: "women's clothing",
    name:"qadin geyim",
  },

  {
    id: "electronics",
    name:"elektronika",
  }
];



const handleChangeCategory = (e)=>{
  // const result = products.filter((item) =>item.category===e.target.value);
//  setProducts(result)

// setOther(result)

setSelectedCategory(e.target.value)
};

const newProducts = products.filter((item)=>selectedCategory=== ""? products :selectedCategory===item.category);
console.log(newProducts);


// const handleSearch =() => {
// const result = products.filter(item =>item.category===selectedCategory );
// setProducts(result)
// };



const showNeedProduct= (e)=>{

const res=products.filter((item)=>item.price===+e.target.value );
console.log(res);
setProducts(res)
};




return(

      <div>
        <div>
      <select onChange={handleChangeCategory}>
      {
        categories.map((item)=>(
         <option value={item.id}>{item.name}</option>
        ))}
       </select>
       {/* <button onClick={handleSearch}>Search</button> */}
       <input onChange={showNeedProduct}/>
        </div>
  <div className={styles.flex}>
  {newProducts.map ((product)=>(
<>
 <div>{product.category}</div>
 
  <div>
    <img className={styles.img} src={product.image }/>
    <div>{product.price}</div>
  </div>
  
  </>
))}
</div>
</div>
);
};

export default Home



{/* <option value={"mens clothing"}>kisi geyim</option>
      <option value={"jewelery"}>Ziynet</option>
      <option value={"womens clothing"}>qadin geyim</option>
      <option value={"electronics"}>electronika</option> */}