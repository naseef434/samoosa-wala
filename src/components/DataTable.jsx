import React, { useEffect, useState } from 'react'

export default function DataTable({
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    date,
    dateEnd,
    dataS }) {




    console.log({ e: dataS?.tableHeaders });

    return (
        <section className="section">
            <div className="card">
                <div className="card-header">
                    <h3>Over All Sale Report</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="startDate" style={{ fontSize: '16px', marginRight: '10px' }}>
                            Start Date:
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={date}
                            onChange={handleStartDateChange}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                padding: '5px',
                                fontSize: '16px',
                                marginTop: '5px',
                            }}
                        />
                        <label htmlFor="endDate" style={{ fontSize: '16px', marginLeft: '20px', marginRight: '10px' }}>
                            End Date:
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={dateEnd}
                            onChange={handleEndDateChange}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                padding: '5px',
                                fontSize: '16px',
                                marginTop: '5px',
                            }}
                        />
                    </div>

                </div>
                <div className="card-body">
                    <table className="table table-striped" id="table1">
                        <thead>
                            <th colSpan={20}><h3><b>Naseef</b></h3></th>
                            <tr>
                                <th>Date</th>
                                <th>MK</th>
                                <th>Return</th>

                                <th>MKM</th>
                                <th>Return</th>

                                <th>MKC</th>
                                <th>Return</th>

                                <th>AD</th>
                                <th>Return</th>

                                <th>ADM</th>
                                <th>Return</th>

                                <th>ADC</th>
                                <th>Return</th>

                                <th>SPicy</th>
                                <th>Return</th>
                                <th>Cash</th>

                            </tr>
                            {/* <tr>
                                {dataS?.tableHeaders?.map((header) => (
                                    header === "distName" ? (
                                        <th key={header}>Distributor Name</th>
                                    ) : (
                                        <th key={header}>{header}</th>
                                    )
                                ))}

                            </tr> */}
                        </thead>
                        <tbody>
                            <tr>
                                <td>10/31/2023</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>5000</td>

                            </tr>
                            <tr>
                                <td>1/10/2023</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>5000</td>

                            </tr>
                            <tr>
                                <td>02/10/2023</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>20</td>
                                <td>10</td>
                                <td>5000</td>

                            </tr>
                            {/* {dataS?.Items?.map((item, index) => (
                                <tr key={item.distId}>
                                    {dataS.tableHeaders.map((header) => (
                                        <td key={header}>{item[header]}</td>
                                    ))}
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
                {/* 
                <div className="card-body">
                    <table className="table table-striped" id="table1">
                        <thead>
                            <tr>
                    {dataS?.tableHeaders?.map((item)=>(
                        <h1>adss</h1>
                    ))}                       
                                </tr>
                        </thead>
                        <tbody>
                            { dataS?.Items?.map((item, index) => (
                                <tr key={index}>
                                    {dataS?.tableHeaders?.map(header => (
                                        <td key={header}>{item[header]}</td>
                                    ))}
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div> */}


                {/* <div className="card-body">
                    <table className="table table-striped" id="table1">
                        <thead>
                            <tr>
                                <th>Distibutor Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                                <td>076 4820 8838</td>
                                <td>Offenburg</td>
                                <td>
                                    <span className="badge bg-success">Active</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Dale</td>
                                <td>fringilla.euismod.enim@quam.ca</td>
                                <td>0500 527693</td>
                                <td>New Quay</td>
                                <td>
                                    <span className="badge bg-success">Active</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Nathaniel</td>
                                <td>mi.Duis@diam.edu</td>
                                <td>(012165) 76278</td>
                                <td>Grumo Appula</td>
                                <td>
                                    <span className="badge bg-danger">Inactive</span>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div> */}
            </div>
        </section>

    )
}
