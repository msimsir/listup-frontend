import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initTag } from "../../../store/actions/appActions";

const TagPanel = () => {
  const sidebarInit = useSelector((state) => state.uiBehavior.sidebarInit);
  const tagInitialize = useSelector(
    (state) => state.uiBehavior.sidebarTagInitialize
  );
  const dispatch = useDispatch();

  useEffect(() => sidebarInit && !tagInitialize && dispatch(initTag()), [
    (tagInitialize, dispatch),
  ]);
  return <div>TagPanel</div>;
};

export default TagPanel;
