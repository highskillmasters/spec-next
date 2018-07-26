// @flow
import * as React from "react";
import { api } from '../../config'
import Page, { SectionHeading, Heading, Subheading } from '../../components/Page'
import type { SimplecastPodcast, SimplecastEpisode, GetInitialProps } from '../../types'
import PodcastView from '../../components/PodcastView'
import PodcastsGrid from '../../components/PodcastsGrid'

type Props = {
  podcast: ?SimplecastPodcast,
  episodes: ?Array<SimplecastEpisode>,
  podcasts: ?Array<SimplecastPodcast>
}

class Podcast extends React.Component<Props> {
  static async getInitialProps({ query }: GetInitialProps) {
    let podcast, episodes, podcasts

    if (query.slug) {
      // match a slug to a podcast record in our config
      const configPodcast = api.getConfigPodcastFromSlug(query.slug)

      if (configPodcast) {
        // as long as the slug returns a valid config podcast, fetch the 
        // show from the api
        [
          podcast,
          episodes
        ] = await Promise.all([
          api.getPodcast(configPodcast.simplecastId),
          api.getEpisodes(configPodcast.simplecastId)
        ])
      }

      podcasts = await api.getPodcasts()
    }

    return { podcast, episodes, podcasts };
  }

  render() {
    const { podcast, episodes, podcasts } = this.props

    if (podcast) {
      const configPodcast = api.getConfigPodcastFromId(podcast.id)
      
      if (configPodcast) {
        return (
          <Page>
            <PodcastView podcast={configPodcast} episodes={episodes} />
          </Page>
        )
      }

      return null
    } 

    return (
      <Page>
        <SectionHeading>
          <Heading>Podcasts</Heading>
          <Subheading>Level up by listening to podcasts from the best in the industry</Subheading>
        </SectionHeading>

        {
          podcasts &&
          <PodcastsGrid podcasts={podcasts} />
        }
      </Page>
    )
  }
}

export default Podcast;
