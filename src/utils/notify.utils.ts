import { toast } from "sonner";

export default function notifySuccess(message?: string) {
  toast.success(message ?? "successfull operation", {
    style: {
      background: "#067502FF",
      border: "none",
      color: "#fff",
    },
    position: "top-center",
  });
}
export function notifyError(message?: string, e?: unknown) {
  toast.error(message ?? "an error occured", {
    style: { background: "#BE1818FF", color: "#FFFDFDFF" , border: "none"},
    position: "top-center",
  });
}
export function  notifyInfo(message?: string){
  toast.info(message ?? "Successful Operation", {
    style:{
      background:"#E9EDF1FF",
      border:"none",
      color:"#fff"
    },
    position: "top-center",
  });
}
export function notifyWarning(message?:string){
  toast.warning(message?? "Warning", {
    style:{
      background:"#F2994A",
      border:"none",
      color:"#fff"
    },
    position: "top-center",
  });
}