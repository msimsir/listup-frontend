import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";
import TaskDetails from "../../Task/TaskDetails.js/TaskDetails";
import TaskForm from "../../Task/TaskForm/TaskForm";
import LabelField from "../../UI/LabelField/LabelField";
import {
  DetailsContainer,
  DetailsHeader,
  DetailsSectionOne,
  DetailsSectionTwo,
  DetailsHeaderElement,
} from "./styles";
import { deleteTaskRequest } from "../../../store/actions/taskActions";
import {
  setDetailsEditTask,
  setDetailsViewTask,
  setModal,
} from "../../../store/actions/uiBehaviorActions";

const Details = () => {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.app.selectedTask);
  const viewTaskState = useSelector(
    (state) => state.uiBehavior.detailsViewTask
  );
  const addTaskState = useSelector((state) => state.uiBehavior.detailsAddTask);
  const editTaskState = useSelector(
    (state) => state.uiBehavior.detailsEditTask
  );
  const onAddingTask = useSelector((state) => state.uiBehavior.onAddingTask);
  const { timeTag } = !selectedTask || selectedTask;
  return (
    <DetailsContainer>
      <DetailsHeader>
        {viewTaskState && (
          <>
            <DetailsHeaderElement>
              <LabelField>{timeTag}</LabelField>
            </DetailsHeaderElement>
            <DetailsHeaderElement>
              <IoPencilOutline />
              <IoTrashOutline
                onClick={() => {
                  dispatch(
                    setModal(
                      true,
                      [
                        setDetailsViewTask(false),
                        deleteTaskRequest(selectedTask._id),
                      ],
                      "delete"
                    )
                  );
                }}
              />
            </DetailsHeaderElement>
          </>
        )}
      </DetailsHeader>
      <DetailsSectionOne>
        {addTaskState && <TaskForm />}
        {viewTaskState && !onAddingTask && <TaskDetails task={selectedTask} />}
      </DetailsSectionOne>
      <DetailsSectionTwo></DetailsSectionTwo>
    </DetailsContainer>
  );
};

export default Details;
