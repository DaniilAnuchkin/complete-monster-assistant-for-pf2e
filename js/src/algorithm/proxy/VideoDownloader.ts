import IVideoDownloader from "./types/IVideoDownloader";

class VideoDownloader implements IVideoDownloader {
  download(videoId: string): void {
    console.log(`Downloading video with ID: ${videoId}`);
  }
}

export default VideoDownloader;
