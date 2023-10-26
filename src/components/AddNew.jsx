import React, { useState } from 'react'
import { addProductOrDistributorFun, } from '../config/services/apis';
import toast, { Toaster } from 'react-hot-toast';
export default function AddNew({ setAddModal, addModal }) {


    const [category, setCategory] = useState({ checked: null, name: null })
    const [name, setName] = useState()
    const notify = () => toast.success('Added Successfully!')
    const handleCheckBox = (e) => {
        const { value, checked } = e.target;
        // setCategory(value)
        if (value === "distName") {
            setCategory({ checked: true, name: "distName" })


        }
        else {
            setCategory({ checked: true, name: "prdName" })
        }
    }


    const handleInput = (e) => {
        setName(e.target.value)
    }


    const handleSubmit = () => {
        postProductOrDistributor().then((res) => {
            setName("")
            setCategory({ checked: null, name: null })
        })
        notify()
    }

    const postProductOrDistributor = async () => {
        try {
            const result = await addProductOrDistributorFun(category.name, name);

        } catch (error) {
            console.error("Error fetching data for tab 0:", error);
        }
    };

    return (
        <div
            className="modal fade show"
            id="exampleModalCenter"
            tabIndex={-1}
            aria-labelledby="exampleModalCenterTitle"
            style={{ display: "block" }}
            aria-modal="true"
            role="dialog"
        >

            <div
                className="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable"
                role="document"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">
                            Add New
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => { setAddModal(!addModal) }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                            >
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </button>
                    </div>
                    <div className="modal-body">


                        <div className="row">

                            <div className="col-md-4">
                                {/* <label>First Name</label> */}
                            </div>
                            <div className="col-md-4">
                                <div className="form-check form-check-primary">
                                    <input
                                        // className="form-check-input"
                                        type="radio"
                                        name="distributor"
                                        value="distName"
                                        id="Primary"
                                        checked={category.name === "distName"}
                                        onClick={handleCheckBox}
                                    />
                                    <label className="form-check-label" htmlFor="Primary">
                                        &nbsp; Distinutor
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-check form-check-primary">
                                    <input
                                        // className="form-check-input"
                                        type="radio"
                                        name="product"
                                        value="prdName"
                                        id="Primary"
                                        required="required"
                                        checked={category.name === "prdName"}
                                        onClick={handleCheckBox}

                                    />
                                    <label className="form-check-label" htmlFor="Primary">
                                        &nbsp;Product
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div className="row">

                            <div className="col-md-4">
                                {/* <label>Name</label> */}
                            </div>
                            <div className="col-md-8 ">
                                <input
                                    type="text"
                                    id="first-name"
                                    className="form-control"
                                    name="fname"
                                    value={name}
                                    required="required"
                                    placeholder="Name"
                                    onChange={handleInput}
                                />
                            </div>

                        </div>


                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-light-secondary"
                            data-bs-dismiss="modal"
                        >
                            <i className="bx bx-x d-block d-sm-none" />
                            <span className="d-none d-sm-block">Close</span>
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary ml-1"
                            data-bs-dismiss="modal"
                            onClick={handleSubmit}
                        >
                            <i className="bx bx-check d-block d-sm-none" />
                            <span className="d-none d-sm-block" >Submit</span>
                        </button>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"
                reverseOrder={false} />
        </div>

    )
}
