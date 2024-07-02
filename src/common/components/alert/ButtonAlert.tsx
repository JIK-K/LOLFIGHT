import React from "react";
import Swal from "sweetalert2";

interface Props {
  title: string;
  text: string;
  onConfirm: () => void;
}

const ButtonAlert = ({ title, text, onConfirm }: Props) => {
  Swal.fire({
    title,
    text,
    showCancelButton: true,
    confirmButtonText: "삭제",
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire(
        "게시글 삭제",
        "성공적으로 게시글을 삭제하였습니다.",
        "success"
      );
    }
  });
};

const showAlert = (title: string, text: string, onConfirm: () => void) => {
  ButtonAlert({ title, text, onConfirm });
};

export default showAlert;
