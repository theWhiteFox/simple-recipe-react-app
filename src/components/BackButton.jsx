import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button class="btn-back" onClick={() => navigate("/")}>
      Back
    </button>
  );
}
