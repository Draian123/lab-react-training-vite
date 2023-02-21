import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import './App.css'

function App() {


  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={`${new Date("1992-07-14")}`}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Random min={1} max={6}/>
      <BoxColor r={255} g={0} b={0} />
    </div>
  )
}

export default App
