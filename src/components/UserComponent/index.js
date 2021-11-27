import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions/users';
import Card from '../CardComponent';
const User = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    return (
        <div>
            {console.log(state)}
            {loading && <p>Loading...</p>}
            {!loading && users.length > 0 && users.map((user) =>
                <Card user={user} key={user.id} />
            )}
            {error  && !loading && <p>{error}</p>}
            {users.length === 0 && !loading && <p>No users available</p>}
        </div>
    ); 
}

export default User;
