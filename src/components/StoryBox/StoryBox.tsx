import React from 'react'
import styled from 'styled-components'
import { Story } from '../../types'

interface StoryBoxProps extends Story {
  className?: string
}

const StoryBox: React.SFC<StoryBoxProps> = ({
  className,
  title,
  url,
  score,
  time,
  by,
  descendants
}) => {
  return <div className={className}>
    <div>{title}</div>
    <div>{score}</div>
  </div>
}

const StyledStoryBox = styled(StoryBox)``

export default StyledStoryBox
