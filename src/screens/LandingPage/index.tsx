import React from "react";

import {
  BookACall,
  Blogs,
  WeBuildSolutions,
  WhatWeOffer,
  StepsToSuccess,
  StartUpStories,
  Hero,
} from "./_partials";
import AppWrapper from "@/components/AppWrapper";

const LandingPage = () => {
  return (
    <AppWrapper>
      <Hero />
      <StartUpStories />
      <StepsToSuccess />
      <WhatWeOffer />
      <WeBuildSolutions />
      <Blogs />
      <BookACall />
    </AppWrapper>
  );
};

export default LandingPage;
