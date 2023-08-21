import React, { useEffect, Suspense, lazy, useState } from 'react';
import useAPI from '../../hooks/useAPI';
import { API_URL } from "../../config/api";
import USERS_COLUMNS from "../../constants/usersColumns";
import Nav from "../../components/Nav";
import "./style.css";
import CustomAlert from '../../components/CustomAlert';
const Table = lazy(() => import("../../components/Table"));

function Setting() {
    const [value, setValue] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const { data, get, getQuery, isLoading, deleteItem } = useAPI(API_URL);
    const adminToken = localStorage.getItem("token");
    const PER_PAGE = 10;
    const config = {
        headers: {
            Authorization: `Bearer ${adminToken}`
        }
    };

    const loadData = () => {
        get({ ...config, params: { page: currentPage, limit: PER_PAGE } });
    };

    const handleDelete = (id) => {
        setShowAlert(true);
        setIdToDelete(id);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        getQuery(value, config);
    };

    const handleReset = () => {
        loadData();
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, PER_PAGE]);
    document.title = 'Admin Page'
    return (
        <div className='settings__container'>
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
                        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
                        <button type='submit' className='search__btn'>Search</button>
                        <button type='reset' className='reset__btn' onClick={handleReset}>Reset</button>
                    </form>
                    <Suspense fallback={"Loading Table Data ..."}>
                        <Table columns={USERS_COLUMNS(data, handleDelete)} data={data.users || []} />
                    </Suspense>
                    <div className="pagination">
                        <button className="pagination-button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span className="pagination-info">
                            Page {currentPage} of {data?.pages || 1}
                        </span>
                        <button className="pagination-button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === (data?.pages || 1)}>
                            Next
                        </button>
                    </div>
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
export default Setting;
