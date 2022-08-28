import {useState, useEffect} from 'react'
import './index.css'
import {GrSearch} from 'react-icons/gr'
import {AiOutlinePlus} from 'react-icons/ai'
import CheckboxItem from '../CheckboxItem'

const Todo = () => {
  const [item, addItem] = useState()
  const [result, setResult] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('result')
    console.log(data, 'helloo')
    if (data !== null) setResult(JSON.parse(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('result', JSON.stringify(result))
  }, [result])

  const onAdding = event => {
    addItem(event.target.value)
  }
  const onAddItems = () => {
    setResult([...result, item])
    addItem('')
  }
  console.log(result)
  return (
    <div className="container">
      <div className="todo-container">
        <h1 className="h12">THINGS TO DO</h1>
        <input
          type="text"
          placeholder="Add New"
          className="input"
          onChange={onAdding}
          value={item}
        />
        <div className="mid-container">
          <div className="item-row">
            <ul>
              {result.map(each => (
                <CheckboxItem details={each} />
              ))}
            </ul>
          </div>
        </div>
        <hr className="line" />
        <div className="bottom-part">
          <div className="icons-container">
            <AiOutlinePlus className="icon" onClick={onAddItems} />
            <GrSearch className="icon" />
          </div>
          <div className="con">
            <span className="vl" />
          </div>
          <div className="headings">
            <h5 className="heading">7 items left</h5>
            <div className="sub-headings">
              <button type="button">All</button>
              <h5 className="heading">Completed</h5>
              <h5 className="heading">Active</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Todo
