import React, { Component } from 'react'
import ReactHowler from 'react-howler'
import fightForThisLove from '../../assets/sounds/Cheryl_Cole_Fight_For_This_Love_Ringtone_(by Fringster.com).mp3';
 
class Music extends Component {
  // This sound file may not work due to cross-origin setting
  render () {
    return (
      <ReactHowler
        src={fightForThisLove}
        playing={true}
      />
    )
  }
}
export default Music;