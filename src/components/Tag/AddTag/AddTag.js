import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { createTagRequest } from "../../../store/actions/tagActions";
import LabelField from "../../UI/LabelField/LabelField";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";
import ListField from "../../UI/ListField/ListField";
import { priorityLevels } from "../../../constants/ui-elements";
import { AddTagWrapper, AddTagHeader, AddTagRow } from "./styles";

const initialTag = {
  title: "",
  priorityLevel: "",
};

const AddTag = ({ setShowAddTag }) => {
  const [tagData, setTagData] = useState(initialTag);
  const dispatch = useDispatch();
  return (
    <AddTagWrapper>
      <IoCloseOutline onClick={() => setShowAddTag(false)} />
      <AddTagHeader>Add Tag</AddTagHeader>
      <AddTagRow>
        <LabelField width="column">Title:</LabelField>
        <InputField
          onChange={(e) => setTagData({ ...tagData, title: e.target.value })}
        />
      </AddTagRow>
      <AddTagRow>
        <LabelField width="column">Priority:</LabelField>
        <ListField
          onChange={(e) =>
            setTagData({ ...tagData, priorityLevel: e.target.value })
          }
        >
          {priorityLevels.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </ListField>
      </AddTagRow>
      <AddTagRow flexRight bottom>
        <Button
          size="small"
          primary
          onClick={() => {
            dispatch(createTagRequest(tagData));
            setShowAddTag(false);
          }}
        >
          Add
        </Button>
        <Button size="small " onClick={() => setShowAddTag(false)} cancelButton>
          Cancel
        </Button>
      </AddTagRow>
    </AddTagWrapper>
  );
};

export default AddTag;
