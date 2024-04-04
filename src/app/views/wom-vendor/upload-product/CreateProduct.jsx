import { Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  Table,
  styled,
  TableRow,
  useTheme,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  Container
} from "@mui/material";
import { Paragraph } from "app/components/Typography";
import { Link } from "react-router-dom";

// STYLED COMPONENTS
const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between"
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize"
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" }
}));

const Small = styled("small")(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
}));

export default function CreateProduct() {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Container style={{ marginTop: "20px" }}>
      <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
        <Box overflow="auto">
          <ProductTable>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} sx={{ px: 3 }}>
                  Name
                </TableCell>

                <TableCell colSpan={6} sx={{ px: 0 }}>
                  Description
                </TableCell>

                <TableCell colSpan={2} sx={{ px: 0 }}>
                  Category
                </TableCell>

                {/* <TableCell colSpan={1} sx={{ px: 0 }}>
                Qty
              </TableCell> */}

                <TableCell colSpan={2} sx={{ px: 0 }}>
                  Stock
                </TableCell>

                <TableCell colSpan={2} sx={{ px: 0 }}>
                  Price
                </TableCell>

                <TableCell colSpan={1} sx={{ px: 0 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {productList.map((product, index) => (
                <TableRow key={index} hover>
                  <TableCell colSpan={2} align="left" sx={{ px: 3, textTransform: "capitalize" }}>
                    <Box display="flex" alignItems="center" gap={4}>
                      {/* <Avatar src={product.imgUrl} /> */}
                      <Paragraph>{product.name}</Paragraph>
                    </Box>
                  </TableCell>
                  <TableCell colSpan={6} align="left" sx={{ px: 0, textTransform: "capitalize" }}>
                    <Box display="flex" alignItems="center" gap={4}>
                      <Paragraph>{product.description}</Paragraph>
                    </Box>
                  </TableCell>

                  <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                    <Paragraph>{product.category}</Paragraph>
                  </TableCell>
                  {/* <TableCell align="left" colSpan={1} sx={{ px: 0, textTransform: "capitalize" }}>
                  <Paragraph>{product.qty}</Paragraph>
                </TableCell> */}
                  <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                    {product.available ? (
                      product.available < 20 ? (
                        <Small bgcolor={bgSecondary}>{product.available} available</Small>
                      ) : (
                        <Small bgcolor={bgPrimary}>in stock</Small>
                      )
                    ) : (
                      <Small bgcolor={bgError}>out of stock</Small>
                    )}
                  </TableCell>
                  <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                    ₹{" "}
                    {product.price > 999 ? (product.price / 1000).toFixed(1) + "k" : product.price}
                  </TableCell>

                  <TableCell sx={{ px: 0 }} colSpan={1}>
                    <IconButton>
                      <Link to="/dashboard/vendor/edit">
                        <Edit color="primary" />
                      </Link>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ProductTable>
        </Box>
      </Card>
    </Container>
  );
}

const productList = [
  {
    // imgUrl: "/assets/images/products/headphone-2.jpg",
    name: "Honda",
    description: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    category: "Petrol",
    qty: "5",
    stock: "instock",
    price: 100,
    available: 30
  },
  {
    name: "Honda",
    description: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    category: "Petrol",
    qty: "5",
    stock: "instock",
    price: 100,
    available: 30
  },
  {
    name: "Honda",
    description: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    category: "Petrol",
    qty: "5",
    stock: "instock",
    price: 100,
    available: 0
  },
  {
    name: "Honda",
    description: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    category: "Petrol",
    qty: "5",
    stock: "instock",
    price: 100,
    available: 30
  },
  {
    name: "Honda",
    description: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    category: "Petrol",
    qty: "5",
    stock: "instock",
    price: 100,
    available: 0
  },
  {
    name: "Honda",
    description: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    category: "Petrol",
    qty: "5",
    stock: "instock",
    price: 100,
    available: 0
  },
  {
    name: "Honda",
    description: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    category: "Petrol",
    qty: "5",
    stock: "instock",
    price: 100,
    available: 0
  },
  {
    name: "Honda",
    description: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    category: "Petrol",
    qty: "5",
    stock: "instock",
    price: 100,
    available: 30
  }
];
