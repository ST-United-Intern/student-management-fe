import axios from "axios";
import { API_URL } from "../constants/url";

export const getQuestion = (data) => axios.post(API_URL.LIST_QUESTION, data);

export const getListQuestion = () =>
  axios.get(API_URL.LIST_QUESTION, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5ZTE1OTE1LTc5MTEtNDhkZC1iNjg3LTg5YWNiMDM5ZTZjMSIsInVzZXJuYW1lIjoic3Rhcm5oYW4iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY5MTU2NjQ5OH0.ZtzEBR6OEpfPUTfJEHqpwaeRDo6OuscKrCDuY2t8Rcc",
    },
  });
