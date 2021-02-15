import React, { useState } from 'react';
import './table.css';
import './Table-Dynamic'

function Table(props) {
    const {headers, data} = props;
    const columnHeader = [];
    const nestedColumnHeader = [];

    const displayHeader = (headersToDisplay) => headersToDisplay.map((header,i) => 
    {
        columnHeader.push(Object.keys(header)[0]);
        console.log(columnHeader);
        return <div className="text">{header[Object.keys(header)[0]]}</div>
    });

    const displayData = (dataToDisplay) => dataToDisplay.map((d,i) => {
        return (<div className="wrapper text-2 table-row wrapper">
            {columnHeader.map(h => {
                    return <div className="text">{d[h]}</div>
                })}
                {d.hasNestedTable && renderTable(d.nestedData.headers, d.nestedData.data)}
            </div>)
        }
    );
    
    const renderTable = (headersToDisplay, dataToDisplay) => (
        <div className="container-fluid">
                <div className="table-row wrapper header">
                    <div className="wrapper text-4">
                    <div className="wrapper text-2">
                        {displayHeader(headersToDisplay)}
                    </div>
                    </div>
                    </div>
                    <div className="wrapper text-4">
                        {displayData(dataToDisplay)}
                    </div>
                </div>
    )

    return (
        <div>{renderTable(headers, data)}</div>
    );
  }
  export default Table;