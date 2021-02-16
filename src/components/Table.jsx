import React, { useState } from 'react';
import classNames from "classnames";
import './table.css';
import './Table-Dynamic'

function Table(props) {
    const {headers, data} = props;
    const columnHeader = [];
    const nestedColumnHeader = [];

    const displayHeader = (headersToDisplay, isNestedTable) => headersToDisplay.map((header,i) => 
    {
        if(isNestedTable){
            nestedColumnHeader.push(Object.keys(header)[0]);
        }else{ 
        columnHeader.push(Object.keys(header)[0]);
        }
        return <div className="text">{header[Object.keys(header)[0]]}</div>
    });

    const createDataRow = (columnHeader, row, hasNestedTable) => columnHeader.map(h => {
        if(hasNestedTable) return <button className="toggle-down-button text">{row[h]}</button>
        return <div className="text">{row[h]}</div>
    })

    const displayData = (dataToDisplay, isNestedTable) => dataToDisplay.map((d,i) => {
        return (<div className="wrapper text-2 table-row wrapper">
            {isNestedTable ? createDataRow(nestedColumnHeader,d,false): createDataRow(columnHeader,d,d.hasNestedTable)}
                {d.hasNestedTable && renderTable(d.nestedData.headers, d.nestedData.data,true)}
            </div>)
        }
    );

    
    const renderTable = (headersToDisplay, dataToDisplay,isNestedTable) => {
        const classes = classNames({
            'container-fluid': true,
            'inside-table':isNestedTable
          });

        const headerClasses = classNames({
            'table-row wrapper': true,
            'inside-table-header':isNestedTable,
            'header':!isNestedTable
          });
           
        return(
            <div className={classes}>
                <div className={headerClasses}>
                    <div className="wrapper text-4">
                        <div className="wrapper text-2">
                            {displayHeader(headersToDisplay,isNestedTable)}
                        </div>
                    </div>
                </div>
                <div className="wrapper text-4">
                        {displayData(dataToDisplay,isNestedTable)}
                </div>
            </div>
    )}

    return (
        <div>{renderTable(headers, data,false)}</div>
    );
  }
  export default Table;