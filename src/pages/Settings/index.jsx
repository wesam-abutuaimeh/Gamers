import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAPI from '../../hooks/useAPI';
import { API_URL } from "../../config/api"
import { PATHS } from '../../router/PATHS';
import Table from "../../components/Table";
import USERS_COLUMNS from "../../constant/usersColumns";
import "./style.css";

export default function Setting() {
    const { data, get, isLoading, deleteItem } = useAPI(API_URL);
    const adminToken = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${adminToken}`
        }
    }
    useEffect(() => {
        get(config);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = (id) => {
        deleteItem(id, config);
    };

    return (
        <>
            <h1 className="welcom__msg">Welcome To Admin Page</h1>
            <div className="info">
                <p>Total users: {data.total}</p>
                <p>Total Pages: {data.pages}</p>
            </div>
            {isLoading ? (
                <h1 className="loader">Loading...</h1>
            ) : (
                <>
                    <Table columns={USERS_COLUMNS(data, handleDelete)} data={data.users || []} />
                    {data.error && <span className="error__message">{data.error}</span>}
                </>
            )}
            <Link to={PATHS.Home} className="back__button">Back to Home</Link>
        </>
    );
}
