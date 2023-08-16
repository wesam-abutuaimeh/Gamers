import React, { useEffect, Suspense, lazy, useState } from 'react';
import useAPI from '../../hooks/useAPI';
import { API_URL } from "../../config/api"
import USERS_COLUMNS from "../../constants/usersColumns";
import Nav from "../../components/Nav";
import "./style.css";
import CustomAlert from '../../components/CustomAlert';
const Table = lazy(() => import("../../components/Table"));

export default function Setting() {
    const { data, get, getQuery, isLoading, deleteItem } = useAPI(API_URL);
    const [value, setValue] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const adminToken = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${adminToken}`
        }
    }

    const loadData = () => {
        get(config);
    }

    const handleDelete = (id) => {
        setShowAlert(true);
        setIdToDelete(id)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        getQuery(value, config)
    }

    const handleReset = () => {
        loadData();
    }

    useEffect(() => {
        loadData();
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
                    <form className='search' onSubmit={handleSubmit}>
                        <input type='text' onChange={(e) => setValue(e.target.value)} />
                        <button type='submit' className='search__btn'>Search</button>
                        <button type='reset' className='reset__btn' onClick={handleReset}>Reset</button>
                    </form>
                    <Suspense fallback={"Loading Table Data ..."}>
                        <Table columns={USERS_COLUMNS(data, handleDelete)} data={data.users || []} />
                    </Suspense>
                    {data.error && <span className="error__message">{data.error}</span>}
                    {showAlert && (
                        <CustomAlert
                            message="Are you sure you want to delete this item?"
                            onConfirm={() => {
                                if (idToDelete) {
                                    deleteItem(idToDelete, config);
                                    setIdToDelete(null);
                                }
                                setShowAlert(false);
                            }}
                            onCancel={() => {
                                setIdToDelete(null);
                                setShowAlert(false);
                            }}
                        />
                    )}
                </div>
            )}
        </div>
    );
}
