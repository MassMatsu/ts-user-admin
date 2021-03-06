import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { User } from '../types/api/user';
import { useMessage } from '../hooks/useMessage';
import { useLoginUser } from '../hooks/useLoginUser';

const rootUrl = 'https://jsonplaceholder.typicode.com/users';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`${rootUrl}/${id}`)
        .then((response) => {
          if (response.data) {
            //console.log(response.data)
            const isAdmin = response.data.id === 10 ? true : false;
            setLoginUser({...response.data, isAdmin}); // set a login user (User + isAdmin) on context within the whole app
            showMessage({ title: 'login successfully', status: 'success' });
            setLoading(false);
            history.push('/home');
          } else {
            console.log('hello');
            showMessage({ title: 'no users matching', status: 'error' });
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          showMessage({ title: 'cannot login', status: 'error' });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );

  return { login, loading };
};
