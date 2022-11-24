import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { person } from './data'
import DateAction from './components/DateAction';
import DateCount from './components/DateCount';
import DateList from './components/DateList';


function App() {
  const [personData, setPersonData] = useState(person)

  const handleDlete = () => {
    setPersonData([])
  }
  const handleViewData = () => {
    setPersonData(person)
  }

  useEffect(() => {
    setPersonData([])
  }, [])
  return (
      <div className='font color-body'>
        <Container className='py-2'>
          <DateCount person={personData} />
          <DateList person={personData} />
          <DateAction deletData={handleDlete} viewData={handleViewData} />
        </Container>
      </div>
  );
}

export default App;
