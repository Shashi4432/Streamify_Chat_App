import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <button
      onClick={handleVideoCall}
      className="
        fixed z-50
        bottom-28 right-4
        bg-emerald-500 text-white
        p-3 rounded-full
        shadow-md
        active:scale-95
      "
      aria-label="Start video call"
    >
      <VideoIcon className="h-5 w-5" />
    </button>
  );
}

export default CallButton;
