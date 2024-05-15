import { SyncLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SyncLoader color="hsla(146, 0%, 0%, 1)" />
    </div>
  );
}
