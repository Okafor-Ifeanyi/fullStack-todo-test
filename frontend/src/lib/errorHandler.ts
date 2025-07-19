// utils/errorHandler.ts
import { toast } from "sonner";

export function handleApiError(error: any) {
  const message = error?.data?.message;
  const message2 = error?.message

  if (message.startsWith("Unauthorized")) {

    toast.error("Network Error: Please check your internet connection.");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return;
  }
  console.log(message)
  if (Array.isArray(message)) {
    message.forEach((msg) => toast.error(msg));
  } else if (typeof message === 'string') {
    toast.error(message);
  } else if (typeof message2 === 'string') {
    toast.error(message);
  }else {
    console.log(error)
    toast.error("An unexpected error occurred.");
  }
}