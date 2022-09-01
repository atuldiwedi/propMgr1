import React from "react";
import Property from "../Property/Property";
import PropertyForm from "../PropteryForm/PropertyForm";
import { PropertiesContainer } from "./Properties.element";
import { useSelector } from "react-redux";

const Properties = () => {
  const prop = useSelector((state) => state.property.propertyList);

  return (
    <>
      <PropertyForm />
      <PropertiesContainer>
        {prop.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </PropertiesContainer>
    </>
  );
};

export default Properties;
