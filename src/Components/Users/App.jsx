/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/order */
import styles from './Users.module.css';
import { Success } from './Success';
import { Users } from './index';
import { useEffect, useState } from 'react';

// Тут список пользователей: https://reqres.in/api/users

function AppUsers() {
  const [users, setUsers] = useState([]);
  const [invites, setInvaites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Ошибка при получении пользователя.');
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvaites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvaites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };
  return (
    <div className={styles.App}>
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default AppUsers;
