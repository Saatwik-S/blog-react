import React from 'react'

export default function Header (): JSX.Element {
  return (
        <header className='paddings'>
            <div className='title'>
                <p>
                    The Artifact
                    <br />
                    <em> Culture & Art Blog </em>
                </p>
            </div>
            <nav>
                <a href='index.html'>Blog</a>
                <a href='about.html'>About</a>
                <a href='contact.html'>Contact</a>
            </nav>
        </header>
  )
}
