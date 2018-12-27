import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Story } from '../types'
import StoryBox from '../components/StoryBox'

const query = gql`
  query($type: StoryType, $after: Int) {
    stories(type: $type, first: 2, after: $after) {
      id
      title
      url
      score
      time
      by
      descendants
    }
  }
`

interface StoriesData {
  stories: Story[]
}
interface StoriesVariables {
  type: StoryType
  after: number
}
class StoriesQuery extends Query<StoriesData, StoriesVariables> {}

enum StoryType {
  best = 'best',
  top = 'top',
  new = 'new'
}

interface HomeState {
  type: StoryType
  after: number
}

class Home extends Component<{}, HomeState> {
  state = { type: StoryType.best, after: 0 }

  public render = () => {
    const { type, after } = this.state
    return (
      <StoriesQuery query={query} variables={{ type, after }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>
          }
          if (error) {
            return <p>Error :(</p>
          }
          return (
            <div>
              <div>
                <h1>Home!</h1>
                <h2>
                  You are looking at the {this.state.type} stories from Hacker
                  News!
                </h2>
              </div>
              <div>
                {data &&
                  data.stories.map(story => (
                    <StoryBox {...story} key={story.id} />
                  ))}
              </div>
            </div>
          )
        }}
      </StoriesQuery>
    )
  }
}

export default Home
