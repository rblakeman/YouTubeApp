import React, { Component } from 'react';
// @ts-expect-error IGNORe
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import { SearchBar } from './components/search_bar';
import { VideoList } from './components/video_list';
import { VideoDetail } from './components/video_detail';
import { Video } from './typings';

const API_KEY = process.env.REACT_APP_apiAccessKey;

type Props = {};
type State = {
    videos: Video[];
    selectedVideo: Video | null;
};

// Create a new component. This component will produce some HTML
class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('sea otter');

        console.log('last updated: Aug 7, 2022');
    }

    videoSearch(term: string) {
        YTSearch({ key: API_KEY, term: term }, (videos: Video[]) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={(selectedVideo: Video) => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
