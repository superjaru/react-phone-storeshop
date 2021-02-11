import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({ products: tempProducts });
  };
  getItem = (id) => {
    const product = this.state.products.filter((item) => item.id === id);
    return product[0];
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        detailProduct: product,
      };
    });
  };
  addToCart = (id) => {
    const updatedProducts = this.state.products.map((item) => {
      if (item.id === id) {
        item.inCart = true;
        item.count = 1;
        item.total = item.price;
        return item;
      } else {
        return item;
      }
    });
    const thatProduct = this.getItem(id);
    this.setState(
      () => {
        return {
          products: updatedProducts,
          cart: [...this.state.cart, thatProduct],
        };
      },
      () => this.addTotals()
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true,
      };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false,
      };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.total = item.count * item.price;
        return item;
      } else {
        return item;
      }
    });

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index];
    product.count--;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    tempProducts = tempProducts.map((item) => {
      if (item.id === id) {
        item.inCart = false;
        item.count = 0;
        item.total = 0;
        return item;
      } else {
        return item;
      }
    });

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProduct();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.07;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subtotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
