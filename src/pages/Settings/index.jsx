import React, { useEffect, Suspense, lazy } from 'react';
import useAPI from '../../hooks/useAPI';
import { API_URL } from "../../config/api"
import USERS_COLUMNS from "../../constants/usersColumns";
import Nav from "../../components/Nav";
import "./style.css";
const Table = lazy(() => import("../../components/Table"));

export default function Setting() {
    const { data, get, isLoading, deleteItem } = useAPI(API_URL);
    const adminToken = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${adminToken}`
        }
    }

    const handleDelete = (id) => {
        deleteItem(id, config);
    };

    useEffect(() => {
        get(config);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='settings__container' >
            <Nav />
            {isLoading ? (
                <h1 className="loader">Loading...</h1>
            ) : (
                <div className='data'>
                    <h1 className="welcom__msg">Welcome To Admin Page</h1>
                    <div className="info">
                        <p>Total users: {data?.total}</p>
                        <p>Total Pages: {data?.pages}</p>
                    </div>
                    <Suspense fallback={"Loading Table Data ..."}>
                        <Table columns={USERS_COLUMNS(data, handleDelete)} data={data.users || []} />
                    </Suspense>
                    {data.error && <span className="error__message">{data.error}</span>}
                </div>
            )}
        </div>
    );
}
