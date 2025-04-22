import IVideoDownloader from "./types/IVideoDownloader";
import VideoDownloader from "./VideoDownloader";

class VideoDownloaderProxy implements IVideoDownloader {
  private videoDownloader: VideoDownloader | null = null;
  private cache: Set<string> = new Set();

  download(videoId: string): void {
    if (this.cache.has(videoId)) {
      console.log(`This is cached video: ${videoId}`);
    } else {
      if (!this.videoDownloader) {
        this.videoDownloader = new VideoDownloader();
      }
      this.videoDownloader.download(videoId);
      this.cache.add(videoId);
    }
  }
}

export default VideoDownloaderProxy;
