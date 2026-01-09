import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <div
      className="
        fixed z-50
        bottom-20 right-4
        md:top-3 md:right-4 md:bottom-auto
      "
    >
      <button
        onClick={handleVideoCall}
        className="btn btn-success btn-sm text-white shadow-lg"
        aria-label="Start video call"
      >
        <VideoIcon className="size-6" />
      </button>
    </div>
  );
}

export default CallButton;
