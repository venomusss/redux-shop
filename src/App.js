import {useEffect, useState} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Header from "./Components/Header";
import List from "./Components/List";
import ItemPage from "./Components/ItemPage";
import CategoryList from "./Components/CategoryList";
import {useSelector} from "react-redux";

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    const items = useSelector(state => state.items.items);

    async function getAllProducts() {
        const data = await fetch('https://fakestoreapi.com/products')
            .then(r => {
                return r.json()
            })
        setAllProducts(data);
    }
    async function getCategories(){
        const data = await fetch('https://fakestoreapi.com/products/categories')
            .then(r => {
                return r.json()
            })
        setCategories(data);
    }
    async function getCategoryList(category){
        const data = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(r => {
                return r.json()
            })
        setCategoryList(data);
    }
    useEffect(() => {
        getAllProducts().then();
        getCategories().then();
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Header categories={categories}/>}>
                    <Route path={'/'} index element={<List name='All products' items={allProducts}/>}/>
                    <Route path={'/item/:id'} element={<ItemPage/>}/>
                    <Route path={'/category/:category'} element={<CategoryList items={categoryList} getCategoryList={getCategoryList}/>}/>
                    <Route path={'/cart'} element={<List name='Cart' items={items}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
