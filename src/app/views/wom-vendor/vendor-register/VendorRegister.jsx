import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled
} from "@mui/material";
import { SimpleCard } from "app/components";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px"
}));

const VendorRegister = () => {
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

  const {
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    email
  } = state;

  return (
    <Container style={{ marginTop: "50px" }}>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <SimpleCard title="Company Contact Information">
          <Grid container spacing={6}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="username"
                id="standard-basic"
                value={username || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Organization/Business Name"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
              />
            </Grid>
          </Grid>
        </SimpleCard>

        <SimpleCard title="Company Address">
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="username"
                id="standard-basic"
                value={username || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Street Address"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
              />

              <TextField
                type="text"
                name="firstName"
                label="Street Address Line 2"
                onChange={handleChange}
                value={firstName || ""}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

              <TextField
                type="email"
                name="email"
                label="City"
                value={email || ""}
                onChange={handleChange}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="mobile"
                value={mobile || ""}
                label="Postal Code"
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextField
                name="password"
                type="password"
                label="State"
                value={password || ""}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
          </Grid>
        </SimpleCard>

        <SimpleCard title="Point of Contact">
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="username"
                id="standard-basic"
                value={username || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="First Name"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
              />

              <TextField
                type="text"
                name="firstName"
                label="Last Name"
                onChange={handleChange}
                value={firstName || ""}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="number"
                name="mobile"
                value={mobile || ""}
                label="Phone Number"
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextField
                name="email"
                type="email"
                label="Email Address"
                value={email || ""}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
          </Grid>
        </SimpleCard>

        <SimpleCard title="Banking Information">
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="username"
                id="standard-basic"
                value={username || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Bank Name"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
              />

              <TextField
                type="text"
                name="firstName"
                label="Branch Name"
                onChange={handleChange}
                value={firstName || ""}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextField
                type="text"
                name="firstName"
                label="Accounter Name"
                onChange={handleChange}
                value={firstName || ""}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="number"
                name="mobile"
                value={mobile || ""}
                label="Account Number"
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextField
                name="email"
                type="email"
                label="Ifsc Code"
                value={email || ""}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextField
                name="email"
                type="number"
                label="Upi id (optional)"
                value={email || ""}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
          </Grid>

          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
          </Button>
        </SimpleCard>
      </ValidatorForm>
    </Container>
  );
};

export default VendorRegister;
