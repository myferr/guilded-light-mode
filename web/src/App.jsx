import { useState } from 'react'
import './App.css';

// ********************************
// SVG imports                   **
// ********************************

import developerBadge from './assets/badges/developer_badge.svg';
import builtWithBadge from './assets/badges/builtWith_badge.svg';
import releaseBadge from './assets/badges/release_badge.svg';

import sparkles from './assets/sparkles.svg';
import reguildedLogo from './assets/reguilded.svg';

// ********************************

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
        <div id='wrapper'>
          <h1>Guilded Light Mode.</h1>
          <img src={sparkles} />
          <div className='badges-container bottom-spacing'>
            <a href="https://github.com/myferr/guilded-light-mode/releases/latest/" target='_blank'>
              <img src={releaseBadge} className='badge' />
            </a>
            <a href="https://github.com/myferr/" target='_blank'>
              <img src={developerBadge} className='badge' />
            </a>
            <a href="https://github.com/myferr/guilded-light-mode/" target='_blank'>
              <img src={builtWithBadge} className='badge' />
            </a>
          </div>

          <a href="https://github.com/myferr/guilded-light-mode/" target='_blank'>
            <button className='github-button'>
              GitHub
              <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </button>
          </a>
          <a href="https://www.guilded.gg/ReGuilded/groups/RdK6o7jD/channels/d9b8d0c4-c213-4e65-b82b-c4a81facba79/forums/1088706986" target='_blank'>
            <button className='reguilded-button'>
              <span className='reguildedText'>ReGuilded</span>
              <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default App;
