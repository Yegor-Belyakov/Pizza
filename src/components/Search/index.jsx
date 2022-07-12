import React, { useCallback,  useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import styles from './Search.module.scss'


import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/slices/filterSlice'

const Search = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  
  const inputRef = useRef()



  const onClickClear = () => {
    dispatch(setSearchValue(''))
   
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = useCallback(debounce((str) => {
    dispatch(setSearchValue(str))
  }, 300),[]) 

  const onChangeInput = event => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
    
  }

  return (
    <div className={styles.root}>

<svg className={styles.icon} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
<input ref={inputRef}
       value={value}
       onChange={onChangeInput} 
       className={styles.input} 
       placeholder="Поиск пиццы..."
       />

      {value && (
        <svg onClick={onClickClear} className={styles.clearIcon} data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>

      )}
     
    </div>
   
  )
}


export default Search