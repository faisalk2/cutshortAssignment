import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Box, Image } from "@chakra-ui/react";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import logo from "../logo/logo.png";
import Page1 from "./Page1";
import "./component.css";

const Stepper = () => {
  const { nextStep, activeStep } = useSteps({
    initialStep: 1,
  });

  return (
    <Box className="stepperContainer">
      <Box width={"20%"} margin="auto">
        <Image
          src={logo}
          display="inline-block"
          width={"100px"}
          height="100px"
          textAlign={"center"}
        />
      </Box>
      <Steps activeStep={activeStep} colorScheme="blue">
        <Step key={1}>
          <Page1
            onClick={() => {
              nextStep(1);
            }}
          />
        </Step>
        <Step key={2}>
          <Page1
            onClick={() => {
              nextStep(1);
            }}
          />
        </Step>
        <Step key={3}>
          <Page2
            onClick={() => {
              nextStep(1);
            }}
          />
        </Step>
        <Step key={4}>
          <Page3
            onClick={() => {
              nextStep(1);
            }}
          />
        </Step>
      </Steps>
      {activeStep === 4 && <Page4 />}
    </Box>
  );
};

export default Stepper;
