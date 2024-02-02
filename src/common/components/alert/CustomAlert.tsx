import React from "react";
import Swal from "sweetalert2";

interface Props {
  icon: string; //success, error, warning, info, question
  title: string;
  text: string;
}

const CustomAlert = (props: Props) => {
  Swal.fire({
    icon: "success",
    title: props.title,
    text: props.text,
    customClass: {
      container: "swal-container",
    },
  });
};

export default CustomAlert;
