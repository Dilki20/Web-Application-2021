import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Mainpage from './mainpage/Mainpage'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Cart from './cart/Cart'
import Login from './owner/Login'
import Register from './owner/Register'
import NotFound from './service/notFound/NotFound'
import CreateProduct from './createProduct/CreateProduct'
import Categories from './categories/Categories'
import {GlobalState} from '../../GlobalState'





function  Home(){

    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return(
       <Switch>
           <Route path="/" exact component={Mainpage} />
            <Route path="/head" exact component={Products}/>
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/cart" exact component={Cart} />
            <Route path="*" exact component={NotFound} />

       </Switch>

          
     
        
    )
}

export default Home