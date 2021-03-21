import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Background, ModalWrapper, Column, Row, Header } from "./styles";
import { IoAlertCircleOutline } from "react-icons/io5";
import Button from "../Button/Button";
import LabelField from "../LabelField/LabelField";
import { setModal } from "../../../store/actions/uiBehaviorActions";

const Modal = () => {
  const dispatch = useDispatch();
  const modalView = useSelector((state) => state.uiBehavior.modalView);
  const modalActions = useSelector((state) => state.uiBehavior.modalActions);
  const modalActionName = useSelector(
    (state) => state.uiBehavior.modalActionName
  );

  return (
    <>
      {modalView && (
        <Background>
          <ModalWrapper>
            <Column>
              <Row>
                <IoAlertCircleOutline />
                <Header>Are you sure you want to {modalActionName} ?</Header>
              </Row>
              <Row>
                <LabelField size="small">Unsaved work will be lost.</LabelField>
              </Row>
              <Row>
                <Button
                  primary
                  size="medium"
                  onClick={() => {
                    modalActions.map((action) => {
                      return dispatch(action);
                    });
                    dispatch(setModal(false, null));
                  }}
                >
                  {modalActionName.charAt(0).toUpperCase() +
                    modalActionName.slice(1)}
                </Button>
                <Button
                  size="medium"
                  onClick={() =>
                    dispatch(setModal(false, modalActions, modalActionName))
                  }
                >
                  Cancel
                </Button>
              </Row>
            </Column>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default Modal;
