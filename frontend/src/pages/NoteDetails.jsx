import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DeleteCard";

export default function NoteDetails() {
  const { id } = useParams();
  const [note, setNote] = useState({
    id: "",
    title: "",
    details: "",
  });
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/noteDetails/${id}`)
      .then((res) => {
        setNote(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="container">
      <DetailCard note={note} />
    </div>
  );
}
