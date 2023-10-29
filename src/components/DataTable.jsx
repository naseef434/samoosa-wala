import React, { useState } from 'react'

export default function DataTable({
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange }) {


    const dummy = {
        "tableHeaders": [
            "distName",
            "checkensamoosa",
            "veg smsa",
            "cccccccccccccc",
            "Nas",
            "naseef",
            "chicken samooosa",
            "Paneer buttor masala",
            "yummy",
            "smsa"
        ],
        "Items": [
            {
                "distName": "Naseef",
                "checkensamoosa": 550,
                "veg smsa": 150,
                "cccccccccccccc": 0,
                "Nas": 0,
                "naseef": 0,
                "chicken samooosa": -100,
                "Paneer buttor masala": 0,
                "yummy": 0,
                "smsa": 0
            },
            {
                "distName": "shamil",
                "checkensamoosa": 275,
                "veg smsa": 770,
                "cccccccccccccc": 0,
                "Nas": 800,
                "naseef": 0,
                "chicken samooosa": 0,
                "Paneer buttor masala": 0,
                "yummy": 0,
                "smsa": 800
            }
        ]
    }

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
                            value={startDate}
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
                            value={endDate}
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
                            <tr>

                                {dummy?.tableHeaders?.map(product => (
                                    <th key={product}>{product}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {dummy.Items.map((item, index) => (
                                <tr key={index}>
                                {dummy.tableHeaders.map(header => (
                                  <td key={header}>{item[header]}</td>
                                ))}
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


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
