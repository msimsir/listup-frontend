import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import {
  AddListWrapper,
  AddListHeader,
  AddListLabel,
  AddListInput,
  AddListButton,
  AddListRow,
} from "./styles";
import { createListRequest } from "../../../store/actions/listActions";

const initialList = {
  title: "",
  owner: "",
};

const AddList = ({ setShowAddList }) => {
  const [listData, setListData] = useState(initialList);

  const dispatch = useDispatch();
  return (
    <AddListWrapper>
      <IoCloseOutline onClick={() => setShowAddList(false)} />
      <AddListHeader>Add List</AddListHeader>
      <AddListRow>
        <AddListLabel>Title :</AddListLabel>
        <AddListInput
          onChange={(e) => setListData({ ...listData, title: e.target.value })}
        />
      </AddListRow>
      <AddListRow>
        <AddListLabel>Owner :</AddListLabel>
        <AddListInput
          onChange={(e) => setListData({ ...listData, owner: e.target.value })}
        />
      </AddListRow>
      <AddListRow flexRight>
        <AddListButton
          onClick={() => {
            dispatch(createListRequest(listData));
            setShowAddList(false);
          }}
        >
          Add
        </AddListButton>
        <AddListButton onClick={() => setShowAddList(false)} cancelButton>
          Cancel
        </AddListButton>
      </AddListRow>
    </AddListWrapper>
  );
};

export default AddList;
