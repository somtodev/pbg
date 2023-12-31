import { toast } from "react-toastify";
import CustomException from "./CustomException";

export function onError(error: Error) {
  toast(
    error.name == CustomException.errorName || error instanceof CustomException
      ? error.message
      : "Error Occurred",
    {
      type: "error",
    },
  );
}
