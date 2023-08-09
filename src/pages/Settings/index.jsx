import React, { useEffect } from 'react'
import Table from '../../components/Table'
import USERS_COLUMNS from '../../constant/usersColumns'
import useAPI from '../../hooks/useAPI'
import { AUTH_API_URL } from '../../config/api'
import "./style.css"

const Settings = () => {
    const { data, get } = useAPI(AUTH_API_URL);

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    };

    useEffect(() => {
        get(config);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1>Settings</h1>
            <div>
                <span>Total Users : {data.total}</span>
                <span>Pages : {data.pages}</span>
            </div>
            <Table columns={USERS_COLUMNS(data)} data={data.users} />
            {data.error && <span className="error__message">{data.error}</span>}
        </div>
    )
}

export default Settings;
