const Header = (props) => {
  console.log("Header OK")
  console.log(props.course.name)
  return (
  <>
  <h1>{props.course.name}</h1>
  </>
  )
}

const Part = (props) => {
  console.log("Part OK")
  console.log(props.part.name)
  return (
    <>
    <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log("Content OK")
  console.log(props.course.parts[0])
  return (
  <>
   <Part part = {props.course.parts[0]}/>
   <Part part = {props.course.parts[1]}/> 
   <Part part = {props.course.parts[2]}/>
  </>
  )
}

const Total = (props) => {
  console.log("Total OK")
  return (
  <>
  <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  </>
  )
}


const App = () => { 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log("App OK")
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App