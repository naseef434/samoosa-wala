import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import { addProductOrDistributorFun, fetchAllProduct, saleOrReturnFunction, } from '../config/services/apis';

export default function SaleOrReturn({ setSaleOrReturmModal, saleOrReturnModal }) {


    const [category, setCategory] = useState({ checked: null, name: null })
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState('');



    const notify = (message, type = 'success') => {
        if (type === 'success') {
            toast.success(message);
        } else if (type === 'error') {
            toast.error(message);
        }
    };

    const handleCheckBox = (event) => {

        // // setCategory(value)
        if (event.target.value === "Return") {
            setCategory({ checked: true, name: "Return" })
            setpayLoadData({ ...payLoadData, type: "return" });


        }
        else {
            setCategory({ checked: true, name: "sale" })
            setpayLoadData({ ...payLoadData, type: "sale" });
        }
    }


    const handleInput = (e) => {
        setName(e.target.value)
    }

    const addSaleOrReturnFunction = (data) => {
        return new Promise((resolve, reject) => {
            saleOrReturnFunction(data)
                .then((res) => {
                    // If the inner saleOrReturnFunction resolves, pass the result to the outer promise
                    resolve(res);
                })
                .catch((error) => {
                    // If the inner saleOrReturnFunction rejects, pass the error to the outer promise
                    reject(error);
                });
        });
    };

    const handleSubmit = () => {
        addSaleOrReturnFunction(payLoadData)
            .then((res) => {
                // Handle success
                alert()
                setQuantity('');
                console.log({ res });
                setName(null);
                setCategory({ checked: null, name: null });
                notify('Added Successfully', 'success');
            })
            .catch((error) => {
                // Handle error
                notify('An error occurred', 'error');
            });
    };


    // const handleSubmit = () => {
    //     addSaleOrReturnFunction(payLoadData).then((res) => {
    //         // Handle success
    //         console.log({ res });
    //         setName("");
    //         setCategory({ checked: null, name: null });
    //         notify('Added Successfully', 'success');
    //     })
    //         .catch((error) => {
    //             // Handle error
    //             notify('An error occurred', 'error');
    //         });
    // }


    // const addSaleOrReturnFunction = () => {
    //     saleOrReturnFunction(payLoadData)

    // }

    const [distributors, setDistributors] = useState([])
    const [products, setProducts] = useState([])

    const fetchAll = async () => {
        try {
            const result = await fetchAllProduct(category.name, "naseef");

            setDistributors(result?.distributors)
            setProducts(result?.products)
        } catch (error) {
            console.error("Error fetching data for tab 0:", error);
        }
    };

    const [selected, setSelected] = useState();
    const handleChangeDropDown = event => {
        const selectedProduct = products?.find(product => product.itemId === event.target.value);

        // Get the selected product's name
        const selectedProductName = selectedProduct?.itemName;
        setSelected(event.target.value);
        if (event.target.name === "distibutor") {
            setpayLoadData({ ...payLoadData, distId: event.target.value ,prdName: selectedProductName });

        } else {
            setpayLoadData({ ...payLoadData, prdId: event.target.value,prdName: selectedProductName  });

        }
    };

    const [payLoadData, setpayLoadData] = useState({
        prdId: null,
        distId: null,
        quantity: 0,
        timeStamp: new Date().toJSON(),
        type: null
    })


    const handleQuantity = (e) => {
        setQuantity(e.target.value);
        setpayLoadData({ ...payLoadData, quantity: Number(e.target.value) });
    }

    useEffect(() => {
        fetchAll()
    }, [])

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
                            Sale/Return
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => { setSaleOrReturmModal(!setSaleOrReturmModal) }}
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
                                        name="Sale"
                                        value="sale"
                                        id="Sale"
                                        checked={category.name === "sale"}
                                        onClick={handleCheckBox}
                                    />
                                    <label className="form-check-label" htmlFor="Primary">
                                        &nbsp; Sale
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-check form-check-primary">
                                    <input
                                        // className="form-check-input"
                                        type="radio"
                                        name="Return"
                                        value="Return"
                                        id="Return"
                                        checked={category.name === "Return"}
                                        onClick={handleCheckBox}

                                    />
                                    <label className="form-check-label" htmlFor="Primary">
                                        &nbsp;Return
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div className="row">

                            <div className="col-md-4">
                                {/* <label>Name</label> */}
                            </div>
                            <div className="col-md-12 ">
                                <label htmlFor="">Select Distributor</label>
                                <select className="form-select" id="basicSelect" name="distibutor" value={selected} onChange={handleChangeDropDown}>
                                    {distributors?.map((dist) => {
                                        return <option key={dist.itemId} value={dist.itemId}>{dist?.itemName}</option>
                                    }
                                    )}
                                </select>
                            </div>
                            <br /><br />

                            <div className="col-md-12 ">
                                <label htmlFor="">Select Product</label>
                                <select className="form-select" name="product" id="basicSelect" value={selected} onChange={handleChangeDropDown}>
                                    {products?.map((product) => (
                                        <option key={product.itemId} value={product.itemId}>{product?.itemName}</option>
                                    ))}
                                </select>

                            </div>
                            <br /><br />         <br />
                            <div className="col-md-12 ">
                                <input
                                    type="number"
                                    id="first-name"
                                    className="form-control"
                                    name="fname"
                                    placeholder="Quantity"
                                    value={quantity}
                                    onChange={handleQuantity}
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
