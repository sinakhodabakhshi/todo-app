import { useDispatch, useSelector } from "react-redux";
import { removeCompleted } from "./Redux/reducers/todos";
import { compeletedTodosIds } from "./selectors/todosSelector";



//custom hooks

export const useClearCompeleted = () => {
  const dispatch = useDispatch();
  const compeletedIds = useSelector(compeletedTodosIds);
  return () => {
    dispatch(removeCompleted(compeletedIds));
  };
};