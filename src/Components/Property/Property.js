import React from "react";
import { useDispatch } from "react-redux";
import {
  DeleteBtn,
  PropertyContainer,
  PropertyDescription,
  PropertyDetailContainer,
  PropertyImage,
  PropertyName,
  PropertySize,
} from "./Property.element";
import { deleteProperty } from "../../Store/propertySlice";
const Property = ({ property }) => {
  const dispatch = useDispatch();
  const DeleteProperty = (id) => {
    dispatch(deleteProperty({ id: id }));
  };
  return (
    <PropertyContainer>
      <PropertyImage src={property.image} />
      <PropertyDetailContainer>
        <PropertyName>{property.name}</PropertyName>
        <PropertySize>{property.size} sq.ft</PropertySize>
        <PropertyDescription>{property.description}</PropertyDescription>
        <DeleteBtn onClick={() => DeleteProperty(property.id)}>
          Delete
        </DeleteBtn>
      </PropertyDetailContainer>
    </PropertyContainer>
  );
};

export default Property;
