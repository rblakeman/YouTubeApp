import React from 'react';

import { Video } from '../typings';

type Props = {
    video: Video | null;
}

export const VideoDetail = (props: Props) => {
    const { video } = props;

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={title} className="embed-responsive-item" src={url} />
            </div>

            <div className="details">
                <div className="video-title">{video.snippet.title}</div>
                <div className="video-author">by: {video.snippet.channelTitle}</div>
                <div className="video-description">{video.snippet.description}</div>
            </div>
        </div>
    );
};
