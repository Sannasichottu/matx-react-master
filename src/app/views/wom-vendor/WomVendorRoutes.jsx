import AddProduct from "./add-product/AddProduct";
import InvoiceHistory from "./history-detail/InvoiceHistory";
import PaymentHistory from "./history-detail/PaymentHistory";
import InvoiceUpload from "./invoice-upload/InvoiceUpload";
import CreateProduct from "./upload-product/CreateProduct";
import EditProduct from "./upload-product/EditProduct";
import VendorRegister from "./vendor-register/VendorRegister";

const WomVendorRoutes = [
  { path: "/dashboard/vendor/add-product", element: <AddProduct /> },
  { path: "/dashboard/vendor/invoice/upload", element: <InvoiceUpload /> },
  { path: "/dashboard/vendor/create", element: <CreateProduct /> },
  { path: "/dashboard/vendor/edit", element: <EditProduct /> },
  { path: "/dashboard/vendor/register", element: <VendorRegister /> },

  { path: "/dashboard/vendor/payment-history", element: <PaymentHistory /> },
  { path: "/dashboard/vendor/invoice-history", element: <InvoiceHistory /> }
];

export default WomVendorRoutes;
