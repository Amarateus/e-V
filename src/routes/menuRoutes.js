import { CartContainer } from "../components/pages/cart/CartContainer";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";
import { Form } from "../components/pages/form/Form";
import { ProductDetailContainer } from "../components/pages/productDetail/ProductDetailContainer";
import { ProductsListContainer } from "../components/pages/productsList/ProductsListContainer";


export const menuRoutes = [
    {
        id: "home", 
        path: "/",
        Element: ProductsListContainer
    },
    {
        id: "categories", 
        path: "/category/:categoryName",
        Element: ProductsListContainer
    },
    {
        id: "itemDetail", 
        path: "/productDetail/:id",
        Element: ProductDetailContainer
    },
    {
        id: "cart", 
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "form", 
        path: "/form",
        Element: Form
    },
    {
        id: "checkout", 
        path: "/checkout",
        Element: CheckoutContainer
    }  
]