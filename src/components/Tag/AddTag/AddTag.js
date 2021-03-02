import React from "react";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";

import {
  AddTagWrapper,
  AddTagHeader,
  AddTagLabel,
  AddTagInput,
  AddTagButton,
  AddTagRow,
} from "./styles";

const AddTag = ({ setShowAddTag }) => {
  const dispatch = useDispatch();
  return (
    <AddTagWrapper>
      <IoCloseOutline onClick={() => setShowAddTag(false)} />
      <AddTagHeader>Add Tag</AddTagHeader>
      <AddTagRow>
        <AddTagLabel>Priority Level :</AddTagLabel>
        <AddTagInput />
      </AddTagRow>
      <AddTagRow flexRight>
        <AddTagButton>Add</AddTagButton>
        <AddTagButton onClick={() => setShowAddTag(false)} cancelButton>
          Cancel
        </AddTagButton>
      </AddTagRow>
    </AddTagWrapper>
  );
};

export default AddTag;
