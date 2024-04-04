import React from "react";
import { Autocomplete, Button, Container, Grid, Icon, styled } from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px"
}));

const InvoiceUpload = () => {
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

  const { invoiceid, productName, quantity, startdate, duedate, price, description } = state;

  const suggestions = [
    { label: "Car Parts" },
    { label: "Bike Parts" },
    { label: "Auto Parts" },
    { label: "Van Parts" }
  ];

  return (
    <Container>
      <br /> <br />
      <div>
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="number"
                name="invoiceid"
                id="standard-basic"
                value={invoiceid || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Invoice Id"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
              />

              <Autocomplete
                options={suggestions}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Categories" variant="outlined" fullWidth />
                )}
                sx={{ mb: 1 }}
              />
              <h3>Product Detail</h3>
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
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="date"
                name="startDate"
                value={startdate || ""}
                label="Start Date"
                onChange={handleChange}
                errorMessages={["this field is required"]}
              />
              <TextField
                name="dueDate"
                type="date"
                label="Due Date"
                value={duedate || ""}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <br /> <br /> <br />
              <TextField
                type="number"
                name="quantity"
                onChange={handleChange}
                label="Quantity"
                value={quantity || ""}
                validators={["required", "isPasswordMatch"]}
                errorMessages={["this field is required", "password didn't match"]}
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

          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Invoice Upload</Span>
          </Button>
        </ValidatorForm>
      </div>
    </Container>
  );
};

export default InvoiceUpload;
