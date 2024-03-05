import Toast from "react-native-root-toast";

const showToast = () => {
  Toast.show("Dowloaded data successfully", {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};

const DownloadData = (setDownloading, setDownloadSuccess) => {
  setDownloading(true);

  // Simulates 5 seconds of downloading
  setTimeout(() => {
    setDownloading(false);
    setDownloadSuccess(true);
    showToast();
  }, 5000);
};

export default DownloadData;
