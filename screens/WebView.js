import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import { deviceHeight } from '../Dimen';

export class WebViewComponent extends Component {
    render() {
        return (
            <WebView source={{ uri: `${this.props.route.params.url}` }} style={{ height: deviceHeight }} />
        );
    }
}

export default WebViewComponent;
