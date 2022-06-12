import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../slices/userSlice";

const useFetchUser = (props) => {
  const dispatch = useDispatch();
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    let APICall = true;
    if (props.parseId || props.email) {
      axios
        .get("http://localhost:8000/", {
          params: {
            parse_id: props.parseId,
            email: props.email,
            "x-retool-api-key": "30a5668-2b68-4fdf-852c-723594c9e69c",
          },
        })
        .then((res) => dispatch(setUser(setUserState(res.data))));
    }
    return () => {
      APICall = false;
    };
  }, [props.parseId, props.email, dispatch]);

  return userState;
};

export default useFetchUser;
