import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoListOutline, IoAddCircleOutline } from "react-icons/io5";
import Loader from "../../UI/Loader/Loader";
import Panel from "../../UI/Panel/Panel";
import TextButton from "../../UI/TextButton/TextButton";
import LabelField from "../../UI/LabelField/LabelField";
import AddList from "../AddList/AddList";
import { initList } from "../../../store/actions/appActions";

const ListPanel = ({ title }) => {
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
    <Panel>
      <Panel height="200" overflow="true">
        {loading && <Loader />}
        {!loading && error && <h1>error</h1>}
        {lists.length > 0 &&
          lists.map((list) => (
            <TextButton key={list._id} size="small" margin="medium">
              <IoListOutline />
              <span>{list.title}</span>
            </TextButton>
          ))}
        {listInitialize && !loading && lists.length === 0 && (
          <LabelField padding size="small">
            There is no list item in here...
          </LabelField>
        )}

        {/*List */}
      </Panel>
      {showAddList && <AddList setShowAddList={setShowAddList} />}
      <TextButton
        size="medium"
        margin="small"
        onClick={() => setShowAddList(!showAddList)}
        clicked={showAddList}
      >
        <IoAddCircleOutline />
        <span>Add {title}</span>
      </TextButton>
    </Panel>
  );
};

export default ListPanel;
