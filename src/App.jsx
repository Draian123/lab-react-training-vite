import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
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
      <Rating checkValue={checkValue}>0</Rating>
      <Rating checkValue={checkValue}>1.49</Rating>
      <Rating checkValue={checkValue}>1.5</Rating>
      <Rating checkValue={checkValue}>3</Rating>
      <Rating checkValue={checkValue}>4</Rating>
      <Rating checkValue={checkValue}>5</Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
    </div>
  )
}

export default App
