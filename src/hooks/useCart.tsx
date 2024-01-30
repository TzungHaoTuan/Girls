import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
  cartTotalQuantity: number;
  cartTotalPrice: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleQuantityIncrease: (product: CartProductType) => void;
  handleQuantityDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
};
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [isProductRemoved, setIsProductRemoved] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  useEffect(() => {
    const localCartProductsString: any =
      localStorage.getItem("girlsCartProducts");
    const localCartProducts: CartProductType[] | null = JSON.parse(
      localCartProductsString
    );
    setCartProducts(localCartProducts);
  }, []);
  useEffect(() => {
    if (isProductAdded) {
      toast.success("Added product to cart!");
      setIsProductAdded(false);
    }
  }, [isProductAdded]);
  useEffect(() => {
    if (isProductRemoved) {
      toast.success("Removed product from cart!");
      setIsProductAdded(false);
    }
  }, [isProductRemoved]);
  useEffect(() => {
    if (isCartEmpty) {
      toast("Continue Shopping!", {
        icon: "🛒",
      });
      setIsCartEmpty(false);
    }
  }, [isCartEmpty]);

  useEffect(() => {
    const getTotal = () => {
      if (cartProducts) {
        const { totalQuantity, totalPrice } = cartProducts.reduce(
          (acc, item) => {
            const itemPrice = item.price * item.quantity;
            acc.totalQuantity += item.quantity;
            acc.totalPrice += itemPrice;
            return acc;
          },
          {
            totalQuantity: 0,
            totalPrice: 0,
          }
        );
        setCartTotalQuantity(totalQuantity);
        setCartTotalPrice(totalPrice);
      }
    };
    getTotal();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCartProducts;

      if (prev) {
        updatedCartProducts = [...prev, product];
      } else {
        updatedCartProducts = [product];
      }
      setIsProductAdded(true);
      localStorage.setItem(
        "girlsCartProducts",
        JSON.stringify(updatedCartProducts)
      );
      return updatedCartProducts;
    });
  }, []);
  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filterCartProducts = cartProducts.filter(
          (item) => item.id !== product.id
        );
        setCartProducts(filterCartProducts);
        setIsProductRemoved(true);
        localStorage.setItem(
          "girlsCartProducts",
          JSON.stringify(filterCartProducts)
        );
      }
    },
    [cartProducts]
  );

  const handleQuantityIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCartProducts;

      if (cartProducts) {
        updatedCartProducts = [...cartProducts];
        const productIndex = cartProducts.findIndex(
          (cartProduct: CartProductType) => cartProduct.id === product.id
        );

        if (productIndex > -1) {
          updatedCartProducts[productIndex].quantity = ++updatedCartProducts[
            productIndex
          ].quantity;
        }
        setCartProducts(updatedCartProducts);
        localStorage.setItem(
          "girlsCartProducts",
          JSON.stringify(updatedCartProducts)
        );
      }
    },
    [cartProducts]
  );
  const handleQuantityDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCartProducts;

      if (cartProducts) {
        updatedCartProducts = [...cartProducts];
        const productIndex = cartProducts.findIndex(
          (cartProduct: CartProductType) => cartProduct.id === product.id
        );

        if (productIndex > -1) {
          updatedCartProducts[productIndex].quantity = --updatedCartProducts[
            productIndex
          ].quantity;
          if (updatedCartProducts[productIndex].quantity === 0) {
            handleRemoveProductFromCart(product);
            return;
          }
        }
        setCartProducts(updatedCartProducts);
        localStorage.setItem(
          "girlsCartProducts",
          JSON.stringify(updatedCartProducts)
        );
      }
    },
    [cartProducts, handleRemoveProductFromCart]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQuantity(0);
    setIsCartEmpty(true);
    localStorage.removeItem("girlsCartProducts");
  }, []);

  const value = {
    cartTotalQuantity,
    cartTotalPrice,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleQuantityIncrease,
    handleQuantityDecrease,
    handleClearCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
