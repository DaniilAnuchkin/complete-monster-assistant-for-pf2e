export interface VideoDownloader {
  download(videoId: string): void;
}

export default VideoDownloader;
