import React from 'react'
import Typewriter from 'typewriter-effect';

export default function TypeWriterText({ text, pauseFor }: { text: string, pauseFor: number }) {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text)
          .callFunction(() => {

          })
          .pauseFor(pauseFor)
          .deleteAll()
          .callFunction(() => {
          })
          .start();
      }}
      options={{
        loop: false,
        autoStart: true,
      }}
    />
  )
}
