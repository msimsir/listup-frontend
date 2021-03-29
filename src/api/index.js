import axios from "axios";

const taskUrl = "http://localhost:5000/tasks";
export const getTask = () => axios.get(taskUrl);
export const createTask = (newTask) => axios.post(taskUrl, newTask);
export const updateTask = (id, updatedTask) =>
  axios.patch(`${taskUrl}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${taskUrl}/${id}`);

const listUrl = "http://localhost:5000/lists";

export const getList = () => axios.get(listUrl);
export const createList = (newList) => axios.post(listUrl, newList);
export const updateList = (id, updatedList) =>
  axios.patch(`${listUrl}/${id}`, updatedList);
export const deleteList = (id) => axios.delete(`${listUrl}/${id}`);

const tagUrl = "http://localhost:5000/tags";

export const getTag = () => axios.get(tagUrl);
export const createTag = (newTag) => axios.post(tagUrl, newTag);
export const updateTag = (id, updatedTag) =>
  axios.patch(`${tagUrl}/${id}`, updatedTag);
export const deleteTag = (id) => axios.delete(`${tagUrl}/${id}`);

const subTaskUrl = "http://localhost:5000/subtasks";

export const getSubTask = () => axios.get(subTaskUrl);
export const createSubTask = (newSubTask) => axios.post(subTaskUrl, newSubTask);
export const updateSubTask = (id, updatedSubTask) =>
  axios.patch(`${subTaskUrl}/${id}`, updatedSubTask);
export const deleteSubTask = (id) => axios.delete(`${subTaskUrl}/${id}`);
