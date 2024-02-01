import React from 'react'
import { ReactSVG } from 'react-svg'

import discord from '../svg/discord.svg'

export default function Button() {
  return (
    <a 
      href="https://discord.gg/fireflydex"
      target="_blank" 
      className="discord-button"
    >
      <div className="button-content">
        <ReactSVG src={discord} className='discord-logo' />
        <span className='join-discord'>Join Our Discord</span>
      </div>
    </a>
  )
}
