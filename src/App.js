import { Routes, Route, Link }  from 'react-router-dom'
import './App.css';
import Singers from './components/Singers'
import ListBox from './components/ListBox';
import TextBox from './components/TextBox';
import { useState } from 'react'
import { Stack } from '@mui/material';

function App() {

  //vars
  const [listContent, setListContent] = useState([{}])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentColor, setCurrentColor] = useState('')

  //debugging
  console.log(listContent)
  console.log(currentIndex)

  //recievers
  ///get input data on change and update list
  const sendInputToMain = (data) => {
    const updatedListContent = listContent.map(currObj => {
      if (currObj.id === currentIndex) {
        return {...currObj, text: data, colorCode: currentColor}
      }
      return currObj
    })
    setListContent(updatedListContent)
  }
  ///get singer choice data and some logic
  const sendColorCodeToMain = (colorCode) =>{
    //add check if selected current singer is selected again then cancel
    if (colorCode !== currentColor){

      if (listContent[currentIndex].text === '') {
        setCurrentColor(colorCode)
        console.log('No input, new singer')
      } else {
        const newIndex = currentIndex + 1

        const newObj = {
          'id': newIndex,
          'text': '',
          'colorCode': ''
        }
        setListContent(prev => [...prev, newObj])
        setCurrentIndex(newIndex)
        setCurrentColor(colorCode)
      }
    } else {
      console.log('Same color lil\' bro')
    }
  }

  return (
    <div className='main'>
      <Stack>
        <h1>Complete the Lyrics</h1>
        <div>
          <Singers colorCode={'color1'} route={'first'} name={'First Singer'} sendColorCodeToMain={sendColorCodeToMain}></Singers>
          <Singers colorCode={'color2'} route={'second'} name={'Second Singer'} sendColorCodeToMain={sendColorCodeToMain}></Singers>
          <Singers colorCode={'color3'} route={'third'} name={'Third Singer'} sendColorCodeToMain={sendColorCodeToMain}></Singers>
          <Singers colorCode={'color4'} route={'fourth'} name={'Fourth Singer'} sendColorCodeToMain={sendColorCodeToMain}></Singers>
        </div>
        <div>
          <Routes>
            <Route path='' element={<div className='text-box-placeholder'>Select singer </div>}></Route>
            <Route path='/first' element={<TextBox handler={sendInputToMain} Singer='First Singer'></TextBox>}></Route>
            <Route path='/second' element={<TextBox handler={sendInputToMain} Singer='Second Singer'></TextBox>}></Route>
            <Route path='/third' element={<TextBox handler={sendInputToMain} Singer='Third Singer'></TextBox>}></Route>
            <Route path='/fourth' element={<TextBox handler={sendInputToMain} Singer='Fourth Singer'></TextBox>}></Route>
          </Routes>
        </div>
        <div>
          <ListBox listContent={listContent}></ListBox>
        </div>
      </Stack>
    </div>
  )
}

export default App;