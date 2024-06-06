import React from "react";

const DownloadButton: React.FC = () => {
  const handleDownload = async () => {
    const response = await fetch("/api/download-setup-file", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "lolfight-desktop-0.0.1 Setup.exe";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } else {
      console.error("File download failed");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="rounded-sm bg-brandcolor px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
    >
      🔥 태어나기
    </button>
  );
};

export default DownloadButton;
