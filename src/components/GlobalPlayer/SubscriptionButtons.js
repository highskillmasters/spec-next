// @flow
import * as React from 'react';
import type { ConfigPodcast } from '../../../types';
import { SubscriptionAvatar } from './style';

type Props = {
  podcast: ConfigPodcast,
};

class SubscriptionButtons extends React.Component<Props> {
  render() {
    const { podcast } = this.props;

    return (
      <React.Fragment>
        {podcast.iTunesUrl && (
          <a
            href={podcast.iTunesUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cy="subscription-apple-podcasts"
          >
            <SubscriptionAvatar
              src="/static/img/subscription_icons/podcasts.png"
              alt="Apple Podcasts"
            />
          </a>
        )}

        {podcast.overcastUrl && (
          <a
            href={podcast.overcastUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cy="subscription-overcast"
          >
            <SubscriptionAvatar
              src="/static/img/subscription_icons/overcast.png"
              alt="Overcast"
            />
          </a>
        )}

        {podcast.pocketCastsUrl && (
          <a
            href={podcast.pocketCastsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cy="subscription-pocketcasts"
          >
            <SubscriptionAvatar
              src="/static/img/subscription_icons/pocketcasts.png"
              alt="Pocketcasts"
            />
          </a>
        )}

        {podcast.googlePodcastsUrl && (
          <a
            href={podcast.googlePodcastsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cy="subscription-google-podcasts"
          >
            <SubscriptionAvatar
              src="/static/img/subscription_icons/google-podcasts.png"
              alt="Google Podcasts"
            />
          </a>
        )}

        {podcast.castroUrl && (
          <a
            href={podcast.castroUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cy="subscription-castro"
          >
            <SubscriptionAvatar
              src="/static/img/subscription_icons/castro.png"
              alt="Castro"
            />
          </a>
        )}

        {podcast.breakerUrl && (
          <a
            href={podcast.breakerUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cy="subscription-breaker"
          >
            <SubscriptionAvatar
              src="/static/img/subscription_icons/breaker.png"
              alt="Breakrer"
            />
          </a>
        )}

        {podcast.rssFeedUrl && (
          <a
            href={podcast.rssFeedUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cy="subscription-rss"
          >
            <SubscriptionAvatar
              src="/static/img/subscription_icons/rss.png"
              alt="RSS Feed"
            />
          </a>
        )}
      </React.Fragment>
    );
  }
}

export default SubscriptionButtons;
