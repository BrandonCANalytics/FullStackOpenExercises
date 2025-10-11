import { useState } from 'react'

 

const randomSelected = ({anecdotes, setSelected}) => {
  console.log("hi")
  console.log(anecdotes.length)
  setSelected(Math.floor(Math.random() * anecdotes.length))
}

const vote = ({selected, anecdotes, setVotes}) => {
  setVotes(prev => {
    const next = [...prev]
    next[selected] +=1
    return next
  })

  
}

const Display = ({text}) => {
  return (
  <h1>{text}</h1>
  )
}

const MostVotes = ({votes, anecdotes}) => {
  const maxValue = Math.max(...votes)
  const maxIndex = votes.indexOf(maxValue)
  console.log("MostVotes ok")
  return (
    <div>
    <p>{anecdotes[maxIndex]}</p>
    <p>has {maxValue} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <Display text="Anecdote of the day"/>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br/>
      <button onClick={() => vote({selected, anecdotes, setVotes})}>vote</button>
      <button onClick={() => randomSelected({anecdotes, selected, setSelected})}>next anecdote</button>
      <Display text="Anecdote with most votes"/>
      <MostVotes votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App