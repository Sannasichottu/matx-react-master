import React from "react";
import { Autocomplete, Button, Container, Grid, Icon, styled } from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px"
}));

const AddProduct = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const { category, productName, quantity, price, description } = state;

  const status = [{ label: "In stock" }, { label: "Out of Stock" }];

  return (
    <Container>
      <br /> <br />
      <div>
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="productName"
                label="Product Name"
                onChange={handleChange}
                value={productName || ""}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

              <TextField
                type="text"
                name="description"
                label="Description"
                value={description || ""}
                onChange={handleChange}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />
              <TextField
                type="text"
                name="category"
                id="standard-basic"
                value={category || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Category"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="number"
                name="quantity"
                onChange={handleChange}
                label="Quantity"
                value={quantity || ""}
                validators={["required", "isPasswordMatch"]}
                errorMessages={["this field is required", "password didn't match"]}
              />
              <Autocomplete
                options={status}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Status" variant="outlined" fullWidth />
                )}
                sx={{ mb: 1 }}
              />
              <TextField
                type="price"
                name="Price"
                onChange={handleChange}
                label="Price"
                value={price || ""}
                validators={["required", "isPasswordMatch"]}
                errorMessages={["this field is required", "password didn't match"]}
              />
            </Grid>
          </Grid>

          <Button color="primary" variant="contained" type="reset" style={{ marginRight: "20px" }}>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Cancel</Span>
          </Button>
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>
              <Link to="/dashboard/vendor/create">Add Product</Link>
            </Span>
          </Button>
        </ValidatorForm>
      </div>
    </Container>
  );
};

export default AddProduct;
