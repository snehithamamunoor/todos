import './index.css'
import {useState, useEffect} from 'react'

const CheckboxItem = props => {
  const [isChecked, setCheck] = useState(false)
  const {details} = props
  console.log(details)

  const checking = event => {
    setCheck(event.target.checked)
    console.log(isChecked)
  }

  useEffect(() => {
    const datas = localStorage.getItem('check')
    if (datas !== null) setCheck(JSON.parse(datas))
  }, [])

  console.log(localStorage.getItem('check'), 'storing')
  useEffect(() => {
    localStorage.setItem('check', isChecked)
  }, [isChecked])
  return (
    <div>
      <div className="item-row">
        <input
          type="checkbox"
          className="heading-sub"
          htmlFor="check"
          checked={isChecked}
          onChange={checking}
          value={isChecked}
        />
        <label id="check" className="label">
          {details}
        </label>
      </div>
      <hr className="line" />
    </div>
  )
}
export default CheckboxItem
