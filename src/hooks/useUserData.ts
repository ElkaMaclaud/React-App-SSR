import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserData, meRequestAsync } from "../store/me/actions";
import { RootState } from "../store/reducer";

// interface IUserData {
//     name?: string;
//     iconImg?: string;
//   }

export function useUserData() {
  //const [data, setData] = useState<IUserData>({});
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading);

  const token = useSelector<RootState>(state => state.token);
  const dispatch = useDispatch();

  useEffect (() => {
    if (!token) return;
      dispatch(meRequestAsync());
    }, [token]) 
 
    return {
      data,
      loading,
    }

}


// useEffect(() => {
//   const sendPostRequest = async () => {
//       const resp = await axios.get('https://oauth.reddit.com/api/v1/me', {
//         headers: { Authorization: `bearer ${token}` }
//       })
//       .then((resp) => {
//         const userData = resp.data;
//         setData({ name: userData.name, iconImg: userData.icon_img });
//       })
//      }
//       }, [token])