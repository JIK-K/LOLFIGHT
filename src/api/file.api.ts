import constant from "../common/constant/constant";

const baseUrl = `${constant.SERVER_URL}`;

/*
 * 파일 다운로드
 * @param
 * @returns
 */
export const downloadFile = async () => {
  const response = await fetch(baseUrl + "/api/download-setup-file", {
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
    a.download = "lolfight-desktop-1.0.0.Setup.exe";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } else {
    console.error("File download failed");
  }
};
