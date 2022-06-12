import { useSelector } from "react-redux"
import { useEffect } from "react"

// styles
import { MainStyles } from "./Main.styles"

// components
import UserSearch from "../UserSearch/UserSearch"
import UserDetails from "../UserDetails/UserDetails"

// state


const Main = () => {
    const user = useSelector(state => state.user.value)
    const loading = useSelector(state => state.loading.value)


    console.log("user: ", user)
    console.log("is loading? ", loading)

    return (
        <MainStyles>
            <div className="main-page-contents-container">
                <div className="user-search-container">
                    <div className="user-search-label">User Search</div>
                <UserSearch />
                </div>
                {user && user.map((user, i ) => 
                <div className="search-result-container">
                    <UserDetails key={i} user={user}/>
                </div>)}
                {loading ? <div>Loading...</div> : ""}
            </div>
        </MainStyles>
    )
}

export default Main