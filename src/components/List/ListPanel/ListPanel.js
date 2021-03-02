import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoListOutline, IoAddCircleOutline } from "react-icons/io5";
import {
  SidebarSelectorWrapper,
  SidebarSelectorList,
  SidebarListItem,
  ButtonWrapper,
  InfoHeader,
} from "./styles";

import { Loader } from "../../UI/Loader/Loader";
import AddList from "../AddList/AddList";

import { initList } from "../../../store/actions/appActions";
import { getListRequest } from "../../../store/actions/listActions";

const initialList = {
  title: "",
  owner: "",
};

const ListPanel = ({ title, data }) => {
  const [listData, setListData] = useState(initialList);

  const [showAddList, setShowAddList] = useState(false);
  const listInitialize = useSelector(
    (state) => state.uiBehavior.sidebarListInitialize
  );
  const sidebarInit = useSelector((state) => state.uiBehavior.sidebarInit);
  const lists = useSelector((state) => state.list.lists);
  const loading = useSelector((state) => state.list.loading);
  const error = useSelector((state) => state.list.error);
  const dispatch = useDispatch();

  useEffect(() => sidebarInit && !listInitialize && dispatch(initList()), [
    dispatch,
  ]);

  return (
    <SidebarSelectorWrapper>
      <SidebarSelectorList
        loaderActive={loading === "true" ? loading : undefined}
      >
        {loading && <Loader />}
        {!loading && error && <h1>error</h1>}
        {lists.length > 0 &&
          lists.map((list) => (
            <SidebarListItem key={list._id}>
              <IoListOutline />
              <span>{list.title}</span>
            </SidebarListItem>
          ))}
        {!loading && lists.length === 0 && (
          <InfoHeader>There is no list item in here...</InfoHeader>
        )}

        {/*List */}
      </SidebarSelectorList>
      {showAddList && <AddList setShowAddList={setShowAddList} />}
      <ButtonWrapper
        onClick={() => setShowAddList(!showAddList)}
        clicked={showAddList}
      >
        <IoAddCircleOutline />
        <span>Add {title}</span>
      </ButtonWrapper>
    </SidebarSelectorWrapper>
  );
};

export default ListPanel;
