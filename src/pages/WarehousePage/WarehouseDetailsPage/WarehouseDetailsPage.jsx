// Dependancies
// import { Route, useRouteMatch } from "react-router-dom";

// Components
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import WarehouseDetails from "../../../components/WarehouseDetails/WarehouseDetails";

// Pages
// import EditWarehousePage from "./EditWarehousePage";
// import InventoryItemPage from "./InventoryItemPage";
// import EditInventoryItemPage from "./EditInventoryItemPage";
// import DeleteWarehousePage from "./DeleteWarehousePage";

export default function WarehouseDetailsPage() {
//   const { path } = useRouteMatch();

  return (
    <>
      <Header />
      <WarehouseDetails />
      <Footer />
    </>
  );
}
