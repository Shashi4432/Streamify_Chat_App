import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <button
      onClick={handleVideoCall}
      className="
        fixed z-50
        bottom-24 right-4
        md:top-4 md:bottom-auto
        btn btn-success btn-sm text-white
      "
    >
      <VideoIcon className="size-6" />
    </button>
  );
}

export default CallButton;
