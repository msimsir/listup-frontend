import React, { useState, useEffect } from "react";
import { IoAddCircleOutline, IoPricetagOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import LabelField from "../../UI/LabelField/LabelField";
import Loader from "../../UI/Loader/Loader";
import Panel from "../../UI/Panel/Panel";
import TextButton from "../../UI/TextButton/TextButton";
import AddTag from "../AddTag/AddTag";

import { initTag } from "../../../store/actions/appActions";

const TagPanel = ({ title }) => {
  const [showAddTag, setShowAddTag] = useState(false);
  const tagInitialize = useSelector(
    (state) => state.uiBehavior.sidebarTagInitialize
  );
  const sidebarInit = useSelector((state) => state.uiBehavior.sidebarInit);
  const tags = useSelector((state) => state.tag.tags);
  const loading = useSelector((state) => state.tag.loading);
  const error = useSelector((state) => state.tag.error);
  const dispatch = useDispatch();

  useEffect(() => sidebarInit && !tagInitialize && dispatch(initTag()), [
    dispatch,
  ]);
  return (
    <Panel>
      <Panel height="200" overflow="true">
        {loading && <Loader />}
        {!loading && error && <h1>error</h1>}
        {tags &&
          tags.length > 0 &&
          tags.map((list) => (
            <TextButton key={list.title} size="small" margin="medium">
              <IoPricetagOutline />
              <span>{list.title}</span>
            </TextButton>
          ))}
        {!error && tagInitialize && !loading && tags.length === 0 && (
          <LabelField padding size="small">
            There is no tag item in here...
          </LabelField>
        )}
      </Panel>
      {showAddTag && <AddTag title="Add Tag" setShowAddTag={setShowAddTag} />}
      <TextButton
        size="medium"
        margin="small"
        onClick={() => setShowAddTag(!showAddTag)}
        clicked={showAddTag}
      >
        <IoAddCircleOutline />
        <span>Add {title}</span>
      </TextButton>
    </Panel>
  );
};

export default TagPanel;
