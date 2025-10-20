export type Video = {
    id: { videoId: string };
    snippet: {
        title: string;
        channelTitle: string;
        description: string;
        thumbnails: { default: { url: string } };
    };
    etag: string;
};
