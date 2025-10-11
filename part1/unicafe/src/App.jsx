import { useState } from 'react'


const Display = (props) => {
  console.log("Display OK")
  return (
  <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  console.log(props)
  return (
    <button onClick ={props.onClick}>{props.text}</button>
  )
}

const Count = (props) => {
  console.log("Count OK")
  console.log(props)
  return (
    <p>{props.text} {props.count}</p>
  )

}

const Statistics = (props) => {
  const totalScore = props.props[0] - props.props[2]
  const sum = props.props[0] + props.props[1] + props.props[2]
  const avgScore = totalScore/sum
  const percentPos = props.props[0]/sum
  if (sum == 0) return (<p>No feedback given</p>)
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.props[0]}/>
          <StatisticLine text="neutral" value={props.props[1]}/>
          <StatisticLine text="bad" value={props.props[2]}/>
          <StatisticLine text="all" value={sum}/>
          <StatisticLine text="average" value={avgScore}/>
          <StatisticLine text="positive" value={`${percentPos} %`}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return ( 
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
)
}  


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display text="give feedback"/>
      <Button onClick={() => setGood(good+1)} text="good"/>
      <Button onClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={() => setBad(bad+1)} text="bad"/>
      <Display text="statistics"/>
      <Statistics props={[good, neutral, bad]}/>

    </div>
  )
}

export default App