import React, { useEffect, useRef, useState } from "react";
import { AddButton, FormContainer, Input } from "./PropertyForm.element";
import { useDispatch } from "react-redux";
import { addProperty } from "../../Store/propertySlice";

const PropertyForm = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const sizeRef = useRef();
  const imageRef = useRef();
  const dispatch = useDispatch();

  const AddProperty = () => {
    dispatch(
      addProperty({
        id: new Date().getTime().toString(),
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        size: sizeRef.current.value,
        image: imageRef.current.value,
      })
    );
  };
  return (
    <>
      <FormContainer>
        <Input type="text" placeholder="Name" ref={nameRef} />
        <Input type="text" placeholder="Image Url" ref={imageRef} />
        <Input
          type="text"
          placeholder="Description"
          ref={descriptionRef}
          width="2"
        />
        <Input type="number" placeholder="Size" ref={sizeRef} />
        <AddButton onClick={AddProperty}>Add Property</AddButton>
      </FormContainer>
    </>
  );
};

export default PropertyForm;
