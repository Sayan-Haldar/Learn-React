import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Normal React Component
function MyApp() {
  const username="yxgbdu"
  return (
    <div>
      <h1>Custom App</h1>
      <p>This is my custom React component {username}.</p>
    </div>
  )
}

// React Element using JSX
const AnotherElement = (
  <a
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Visit Google
  </a>
)

const anotherUser = 'New User';

// React Element using React.createElement()
const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  'Visit Google',
  anotherUser
)

// Render
createRoot(document.getElementById('root')).render(
  ReactElement
)