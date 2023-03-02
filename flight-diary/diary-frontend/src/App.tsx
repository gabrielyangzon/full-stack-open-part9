import React, { useEffect, useState } from "react";
import { getAll, addNewDiary } from "./service/diaryService";
import "./App.css";
import DiaryList from "./components/DiaryList/DiaryList";
import AddDiary from "./components/AddDiary/AddDiary";
import { NewDiaryEntry, Visibility, Weather } from "./models/Diary";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const initialState = {
  date: "",
  visibility: Visibility.Great,
  weather: Weather.Sunny,
  comment: "",
};
function App() {
  const [diaries, setDiaries] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [newEntry, setNewEntry] = useState<NewDiaryEntry>(initialState);

  const [showSuccess, setShowSuccess] = useState(false);
  useEffect(() => {
    getAll().then((res) => setDiaries(res));
  }, [refresh]);

  async function addDiary() {
    if (newEntry !== undefined) {
      const result = await addNewDiary(newEntry);

      if (result === 200) {
        setRefresh(!refresh);
        setNewEntry(initialState);
        showNotification();
      }
    }
  }

  function showNotification() {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }

  function setNewDiaryState(value: any, name: string) {
    setNewEntry((current: NewDiaryEntry) => {
      return { ...current, [name]: value };
    });
  }

  const alertComponent = showSuccess ? (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      New Entry added
    </Alert>
  ) : (
    <></>
  );
  return (
    <>
      {alertComponent}
      <AddDiary
        add={addDiary}
        newEntryState={newEntry}
        setNewEntryState={setNewDiaryState}
      />
      <DiaryList diaries={diaries} />
    </>
  );
}

export default App;
