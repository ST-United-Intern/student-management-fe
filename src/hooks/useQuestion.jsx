import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { getListQuestion } from "../services/getQuestion";
import { useParams } from "react-router-dom";

export const useQuestion = () => {
  const { id } = useParams();
  return useQuery({
    queryKey: [QUERY_KEY.LIST_QUESTION],
    queryFn: async () => {
      const { data } = await getListQuestion(id);
      return data;
    },
  });
};
