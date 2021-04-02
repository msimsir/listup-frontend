import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoRocketOutline, IoSquareOutline, IoSquare } from "react-icons/io5";
import LabelField from "../../UI/LabelField/LabelField";
import {
  TaskDetailsTitleSection,
  TaskDetailsTag,
  TaskDetailsWrapper,
  TaskDetailsTagSection,
  TaskDetailsElement,
  TaskDetailsElementGroup,
} from "./styles";
import {
  updateSubTaskRequest,
  updateTaskRequest,
} from "../../../store/actions/taskActions";
import { setDetailsViewTask } from "../../../store/actions/uiBehaviorActions";
import Popup from "../../UI/Popup/Popup";

const TaskDetails = () => {
  const [taskDetail, setTaskDetail] = useState("");
  const [showTaskDonePopup, setShowTaskDonePopup] = useState(false);
  const [showTaskUndonePopup, setShowTaskUndonePopup] = useState(false);
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.tags);
  const selectedTask = useSelector((state) => state.app.selectedTask);
  const { title, timeTag, status, subtasks, tags: selectedTags } = taskDetail;

  const handleSelectedTag = (selectedTag) => {
    const { title } = tags.find((t) => t._id === selectedTag);
    return title;
  };

  const handleListedSubTask = (subTask) => {
    const { title } = subtasks.find((st) => st._id === subTask);
    return title;
  };

  const handleSubTaskStatus = (subTask) => {
    const { status } = subtasks.find((st) => st._id === subTask);
    return status;
  };

  const handleTaskDone = () => {
    if (subtasks && subtasks.length > 0) {
      if (
        subtasks.filter((st) => handleSubTaskStatus(st._id) !== true).length ===
        0
      ) {
        dispatch(
          updateTaskRequest(taskDetail._id, { ...taskDetail, status: true })
        );
        dispatch(setDetailsViewTask(false));
      } else {
        setShowTaskDonePopup(true);
      }
    } else {
      dispatch(
        updateTaskRequest(taskDetail._id, { ...taskDetail, status: true })
      );
      dispatch(setDetailsViewTask(false));
    }
  };

  const handleSubTaskDone = (item) => {
    dispatch(
      updateSubTaskRequest(taskDetail._id, {
        ...taskDetail,
        subtasks: taskDetail.subtasks.map((subtask) =>
          subtask._id === item ? { ...subtask, status: true } : subtask
        ),
      })
    );
  };

  const handleSubTaskUndone = (item) => {
    dispatch(
      updateSubTaskRequest(taskDetail._id, {
        ...taskDetail,
        subtasks: taskDetail.subtasks.map((subtask) =>
          subtask._id === item ? { ...subtask, status: false } : subtask
        ),
      })
    );
  };

  useEffect(() => {
    if (selectedTask) {
      setTaskDetail(selectedTask);
    }
  }, [selectedTask]);

  return (
    <TaskDetailsWrapper>
      <TaskDetailsTitleSection done={status}>
        {status === false ? (
          <IoSquareOutline onClick={() => handleTaskDone()} />
        ) : (
          <IoSquare
            onMouseEnter={() => setShowTaskUndonePopup(true)}
            onMouseLeave={() => setShowTaskUndonePopup(false)}
          />
        )}
        <LabelField>{title}</LabelField>
      </TaskDetailsTitleSection>

      {showTaskDonePopup && (
        <Popup
          text="Firstly subtask(s) should be done."
          onClose={setShowTaskDonePopup}
        />
      )}

      {showTaskUndonePopup && (
        <Popup text="It cannot be undone." onClose={setShowTaskUndonePopup} />
      )}

      {subtasks && subtasks.length > 0 ? (
        subtasks.map((subtask) => (
          <TaskDetailsElementGroup
            key={subtask._id}
            doneSubTask={
              handleSubTaskStatus(subtask._id) === true ? true : false
            }
          >
            <IoRocketOutline
              onClick={
                handleSubTaskStatus(subtask._id) === true
                  ? () => handleSubTaskUndone(subtask._id)
                  : () => handleSubTaskDone(subtask._id)
              }
            />
            <TaskDetailsElement>
              {handleListedSubTask(subtask._id)}
            </TaskDetailsElement>
          </TaskDetailsElementGroup>
        ))
      ) : (
        <TaskDetailsElementGroup>
          <TaskDetailsElement>There is no sub tasks.</TaskDetailsElement>
        </TaskDetailsElementGroup>
      )}

      <TaskDetailsTagSection>
        {selectedTags &&
          selectedTags.length > 0 &&
          selectedTags.map((selectedTag) => (
            <TaskDetailsTag key={selectedTag}>
              {handleSelectedTag(selectedTag)}
            </TaskDetailsTag>
          ))}
      </TaskDetailsTagSection>
    </TaskDetailsWrapper>
  );
};

export default TaskDetails;
