"use client";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import Container from "@/components/Container";

import { json } from "./json";

const Start = () => {
  const model = new Model(json);
  return (
    <div className="mt-4">
      <Container>
        <div className=" rounded-xl overflow-hidden">
          <Survey model={model}></Survey>
        </div>
      </Container>
    </div>
  );
};

export default Start;
