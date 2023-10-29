import React, { useEffect, useState } from 'react'
import AddNew from '../../components/AddNew'
import SaleOrReturns from '../../components/SaleOrReturn'
import { Link, useMatch } from 'react-router-dom'
export default function SaleOrReturn() {
    const [addModal, setAddModal] = useState(false)
    const [saleOrReturnModal, setSaleOrReturmModal] = useState(false)
    const match = useMatch('/saleOrReturn');
    return (

        <div id="app">
            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active">
                    <div className="sidebar-header">
                        <img src="assets/images/logo.svg" alt="" srcSet="" />
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">
                            <li className="sidebar-title">Main Menu</li>
                            <li className="sidebar-item  ">
                                <Link to="/Dashboard" className="sidebar-link">
                                    <i data-feather="home" width={20} />
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            <li className={`sidebar-item ${match ? 'active' : ''}`}>
                                <Link to="/saleOrReturn" className="sidebar-link">
                                    <i data-feather="home" width={20} />
                                    <span>SaleOrReturn</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <button className="sidebar-toggler btn x">
                        <i data-feather="x" />
                    </button>
                </div>
            </div>
            <div id="main">
                <nav className="navbar navbar-header navbar-expand navbar-light">
                    <a className="sidebar-toggler" href="#">
                        <span className="navbar-toggler-icon" />
                    </a>
                    <button
                        className="btn navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-center navbar-light ms-auto">
                            <li className="dropdown nav-icon">
                                <a
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    className="nav-link  dropdown-toggle nav-link-lg nav-link-user"
                                >
                                    <div className="d-lg-inline-block">
                                        <i data-feather="bell" />
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-large">
                                    <h6 className="py-2 px-4">Notifications</h6>
                                    <ul className="list-group rounded-none">
                                        <li className="list-group-item border-0 align-items-start">
                                            <div className="avatar bg-success me-3">
                                                <span className="avatar-content">
                                                    <i data-feather="shopping-cart" />
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="text-bold">New Order</h6>
                                                <p className="text-xs">
                                                    An order made by Ahmad Saugi for product Samsung Galaxy
                                                    S69
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown nav-icon me-2">
                                <a
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                                >
                                    <div className="d-lg-inline-block">
                                        <i data-feather="mail" />
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                        <i data-feather="user" /> Account
                                    </a>
                                    <a className="dropdown-item active" href="#">
                                        <i data-feather="mail" /> Messages
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i data-feather="settings" /> Settings
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <i data-feather="log-out" /> Logout
                                    </a>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                                >
                                    <div className="avatar me-1">
                                        <img
                                            src="assets/images/avatar/avatar-s-1.png"
                                            alt=""
                                            srcSet=""
                                        />
                                    </div>
                                    <div className="d-none d-md-block d-lg-inline-block">
                                        Hi, Saugi
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                        <i data-feather="user" /> Account
                                    </a>
                                    <a className="dropdown-item active" href="#">
                                        <i data-feather="mail" /> Messages
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i data-feather="settings" /> Settings
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <i data-feather="log-out" /> Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="row mb-2">
                    <div className="col-12 col-md-3" onClick={() => { setAddModal(!addModal) }}>
                        <div className="card card-statistic">
                            <div className="card-body p-0">
                                <div className="d-flex flex-column">
                                    <div className="px-3 py-3 d-flex justify-content-between">
                                        <h3 className="card-title">Add New</h3>
                                        <div className="card-right d-flex align-items-center">
                                            <p>+ </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3" onClick={() => { setSaleOrReturmModal(!saleOrReturnModal) }}>
                        <div className="card card-statistic">
                            <div className="card-body p-0" >
                                <div className="d-flex flex-column" >
                                    <div className="px-3 py-3 d-flex justify-content-between">
                                        <h3 className="card-title">Sale</h3>
                                        <div className="card-right d-flex align-items-center">
                                            <p>+ </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* &nbsp;&nbsp;&nbsp;  <a href="#" class="btn btn-primary" onClick={() => { setAddModal(!addModal) }}>Add New</a>
                &nbsp;&nbsp;&nbsp; <a href="#" class="btn btn-primary" onClick={() => { setSaleOrReturmModal(!saleOrReturnModal) }}>Add Sale</a>
              */}
                {addModal && <AddNew setAddModal={setAddModal} addModal={addModal} />}
                {saleOrReturnModal &&
                    <SaleOrReturns setSaleOrReturmModal={setSaleOrReturmModal}
                        saleOrReturnModal={saleOrReturnModal} />
                }

            </div>
        </div>
    )
}
