import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'

// styles
import { UserSearchStyles } from "./UserSearch.styles"

// state and query management
import { setUser, resetUser } from '../../slices/userSlice'
import { isLoading, resetLoading } from '../../slices/loadingSlice'

const UserSearch = (props) => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading.value)
    const [parseId, setParseId] = useState("")
    const [email, setEmail] = useState("")
    
    const HandleClick = () => {
      if (parseId) {
        dispatch(isLoading(true))
        axios
          .get("http://localhost:8000/users/", {
            params: {
              parse_id: parseId,
              email: "",
              "x-retool-api-key": "f30a5668-2b68-4fdf-852c-723594c9e69c",
            },
          })
          .then((res) => dispatch(setUser(res.data)))
          .then(dispatch(resetLoading()))
      } else if (email) {
        dispatch(isLoading(true))
        axios
          .get("http://localhost:8000/users/", {
            params: {
              parse_id: "",
              email: email,
              "x-retool-api-key": "f30a5668-2b68-4fdf-852c-723594c9e69c",
            },
          })
          .then((res) => dispatch(setUser(res.data)))
          .then(dispatch(resetLoading()))
      }
    };

    const clearUser = () => {
        setEmail("")
        setParseId("")
        dispatch(resetUser())
        dispatch(resetLoading())
    }

    return (
        <UserSearchStyles>
            <div className="input-container">
                <input className="userSearch-input" type="text" placeholder="Enter Parse ID" value={parseId} onChange={(e) => setParseId(e.target.value)}/>
                <input className="userSearch-input" type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button className="userSearch-btn">
                    <div className="btn-text" onClick={HandleClick}>Submit</div>
                </button>
                <button className='userSearch-btn' onClick={clearUser}>
                    <div className="btn-text">Clear</div>
                </button>
            </div>
        </UserSearchStyles>
    )
}

export default UserSearch