import Header from "../Header";
import ProductList from "../ProductList";
import FabModal from "../Cart/FabModal";
import { useEffect, useState } from "react";
import Api from "../../Api";
import { Box, Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Alert, Skeleton, Snackbar } from "@mui/material";
import useAlert from "../../hooks/useAlert";

function Home(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filtroOn, setFiltroOn] = useState(false);

  const { activeAlert, open, contentAlert, typeAlert, durationAlert } =
    useAlert();

  useEffect(() => {
    setLoading(true);
    Api.get(`products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const calcTotal = (array) => {
    const total = array.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);
    const roundTotal = Math.round(total);
    setCartTotal(roundTotal);
  };

  function addItemList(item) {
    if (validaItem(item) === undefined) {
      const newList = [...currentSale, item];
      setCurrentSale([...newList]);
      calcTotal(newList);
      activeAlert({
        type: "success",
        text: "Item adicionado ao carrinho !",
        duration: 1000,
      });
    } else {
      activeAlert({
        type: "error",
        text: "Item já foi adicionado ao carrinho !",
        duration: 3000,
      });
    }
  }
  function validaItem(item) {
    const find = currentSale.find((elem) => elem.id === item.id);
    return find;
  }
  function handleList(item) {
    const filteredList = currentSale.filter((elem) => elem !== item);
    setCurrentSale(filteredList);
    calcTotal(filteredList);
    activeAlert({
      type: "warning",
      text: "O Item foi removido do carrinho !",
      duration: 1500,
    });
  }

  function showFilteredItems(event) {
    const busca = event.target.value;
    const lowerBusca = busca.toLowerCase();
    const filtro = products.filter((produto) => {
      const lowerName = produto.name.toLowerCase();
      const lowerCategory = produto.category.toLowerCase();
      return (
        lowerName.includes(lowerBusca) | lowerCategory.includes(lowerBusca)
      );
    });
    setFilteredProducts(filtro);
    setFiltroOn(true);
  }

  return (
    <Container>
      <Grid container spacing={0}>
        <Header showFilteredItems={showFilteredItems}>{props.children}</Header>
        <Grid container spacing={3} columns={24}>
          <Grid item xs={24} md={16}>
            {loading ? (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            ) : (
              <>
                <ProductList
                  loading={loading}
                  products={products}
                  filtroOn={filtroOn}
                  filteredProducts={filteredProducts}
                  addItemList={addItemList}
                >
                  {props.children}
                </ProductList>
                <Snackbar open={open} autoHideDuration={durationAlert}>
                  <Alert
                    severity={typeAlert}
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    {contentAlert}
                  </Alert>
                </Snackbar>
              </>
            )}
          </Grid>
          <Grid item xs={24} md={8}></Grid>
          <FabModal
            currentSale={currentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            setCurrentSale={setCurrentSale}
            handleList={handleList}
            activeAlert={activeAlert}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
