import { useState } from "react";

export default function useAlert() {
  const [open, setOpen] = useState(false);
  const [typeAlert, setTypeAlert] = useState("success");
  const [contentAlert, setContentAlert] = useState("");
  const [durationAlert, setDurationAlert] = useState(3000);

  const activeAlert = ({ type, text, duration }) => {
    if (!open) {
      setOpen(true);
      setContentAlert(text);
      setTypeAlert(type);
      setDurationAlert(duration);

      setTimeout(() => {
        setOpen(false);
        setTypeAlert("info");
        setContentAlert("");
      }, durationAlert);
    }
  };

  return {
    open,
    contentAlert,
    typeAlert,
    activeAlert,
    durationAlert,
  };
}
