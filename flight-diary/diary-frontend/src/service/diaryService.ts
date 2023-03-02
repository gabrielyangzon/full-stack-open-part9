import axios from "axios";
import { NewDiaryEntry } from "../models/Diary";

const apiUrl = "http://localhost:3000/api/diaries";

const getAll = async () => {
  const result = await axios.get<any>(`${apiUrl}`);

  if (result.status === 200) {
    return result.data;
  }
};

const addNewDiary = async (newEntry: NewDiaryEntry): Promise<number> => {
  console.log(newEntry);
  const result = await axios.post(`${apiUrl}`, newEntry);

  return result.status;
};

export { getAll, addNewDiary };
