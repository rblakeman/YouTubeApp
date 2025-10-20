import type { Video } from '../typings';

type Props = {
    video: Video;
    onVideoSelect: (value: Video) => void;
};

const VideoListItem = (props: Props) => {
    const { video, onVideoSelect } = props;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li
            onClick={() => onVideoSelect(video)}
            className='list-group-item bg-inverse'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img
                        className='media-object'
                        src={imageUrl}
                        alt='youtube thumbnail'
                    />
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
