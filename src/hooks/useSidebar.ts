import { useAppDispatch, useAppSelector } from "@/store/state";
import { open_drawer, uiSelector } from "@/store/ui";

export default function useSidebar() {
  const { drawerOpen } = useAppSelector(uiSelector);
  const dispatch = useAppDispatch();
  const toggleSidebar = () => dispatch(open_drawer(!drawerOpen));
  return { open: drawerOpen, toggleSidebar };
}
