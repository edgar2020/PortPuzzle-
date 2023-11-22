import React, { Component, useState } from 'react';
// import './tasks.css' 



class RegularGrid extends Component 
{   
    
    state = {
        // Initially, no file is selected
        
        
    };
    
    sendInputDataUp = (event) => {
        this.props.parentToggleButton( {row: 1, col: 1});
    }

    determineTypeOfCell = (row, col) =>
    {
        let gridCell = this.props.grid[row-1][col-1];
        if(gridCell.container === null && gridCell.deadSpace === 1)
        {
            // console.log(0);
            return (
                <>
                    <div id={'Cell_['+row+','+col+']'} className='gridCell  unusable'> </div>
                </>
            );
        }
        else if(gridCell.container === null && gridCell.deadSpace === 0)
        {
            console.log(1);
            return (
                <>
                    <div id={'Cell_['+row+','+col+']'} className= 'gridCell empty'></div>
                </>
            );
        }
        else if(gridCell.container !== null)
        {
            return (
                <>
                <div className='gridCell   containerPresent' id={'Cell_['+row+','+col+']'} ></div>
                </>
            );
        }

    }
 
    render() {
 
        return (
            <div id="containersToUnloadInput">
                <h3 id="containersToUnloadInput_header">Select fgh to Unload</h3>
                <div id="cargoGridDisplayContainer">
                    <div id='gridRow_9' className="gridRow">
                        <span className='rowNumber'>9</span>
                        {this.determineTypeOfCell(9,1)}
                        {this.determineTypeOfCell(9,2)}
                        {this.determineTypeOfCell(9,3)}
                        {this.determineTypeOfCell(9,4)}
                        {this.determineTypeOfCell(9,5)}
                        {this.determineTypeOfCell(9,6)}
                        {this.determineTypeOfCell(9,7)}
                        {this.determineTypeOfCell(9,8)}
                        {this.determineTypeOfCell(9,9)}
                        {this.determineTypeOfCell(9,10)}
                        {this.determineTypeOfCell(9,11)}
                        {this.determineTypeOfCell(9,12)}
                    </div>
                    <div id='gridRow_8' className="gridRow">
                        <span className='rowNumber'>8</span>
                        {this.determineTypeOfCell(8,1)}
                        {this.determineTypeOfCell(8,2)}
                        {this.determineTypeOfCell(8,3)}
                        {this.determineTypeOfCell(8,4)}
                        {this.determineTypeOfCell(8,5)}
                        {this.determineTypeOfCell(8,6)}
                        {this.determineTypeOfCell(8,7)}
                        {this.determineTypeOfCell(8,8)}
                        {this.determineTypeOfCell(8,9)}
                        {this.determineTypeOfCell(8,10)}
                        {this.determineTypeOfCell(8,11)}
                        {this.determineTypeOfCell(8,12)}
                    </div>
                    <div id='gridRow_7' className="gridRow">
                        <span className='rowNumber'>7</span>
                        {this.determineTypeOfCell(7,1)}
                        {this.determineTypeOfCell(7,2)}
                        {this.determineTypeOfCell(7,3)}
                        {this.determineTypeOfCell(7,4)}
                        {this.determineTypeOfCell(7,5)}
                        {this.determineTypeOfCell(7,6)}
                        {this.determineTypeOfCell(7,7)}
                        {this.determineTypeOfCell(7,8)}
                        {this.determineTypeOfCell(7,9)}
                        {this.determineTypeOfCell(7,10)}
                        {this.determineTypeOfCell(7,11)}
                        {this.determineTypeOfCell(7,12)}
                    </div>
                    <div id='gridRow_6' className="gridRow">
                        <span className='rowNumber'>6</span>
                        {this.determineTypeOfCell(6,1)}
                        {this.determineTypeOfCell(6,2)}
                        {this.determineTypeOfCell(6,3)}
                        {this.determineTypeOfCell(6,4)}
                        {this.determineTypeOfCell(6,5)}
                        {this.determineTypeOfCell(6,6)}
                        {this.determineTypeOfCell(6,7)}
                        {this.determineTypeOfCell(6,8)}
                        {this.determineTypeOfCell(6,9)}
                        {this.determineTypeOfCell(6,10)}
                        {this.determineTypeOfCell(6,11)}
                        {this.determineTypeOfCell(6,12)}

                    </div>
                    <div id='gridRow_5' className="gridRow">
                        <span className='rowNumber'>5</span>
                        {this.determineTypeOfCell(5,1)}
                        {this.determineTypeOfCell(5,2)}
                        {this.determineTypeOfCell(5,3)}
                        {this.determineTypeOfCell(5,4)}
                        {this.determineTypeOfCell(5,5)}
                        {this.determineTypeOfCell(5,6)}
                        {this.determineTypeOfCell(5,7)}
                        {this.determineTypeOfCell(5,8)}
                        {this.determineTypeOfCell(5,9)}
                        {this.determineTypeOfCell(5,10)}
                        {this.determineTypeOfCell(5,11)}
                        {this.determineTypeOfCell(5,12)}
                    </div>
                    <div id='gridRow_4' className="gridRow">
                        <span className='rowNumber'>4</span>
                        {this.determineTypeOfCell(4,1)}
                        {this.determineTypeOfCell(4,2)}
                        {this.determineTypeOfCell(4,3)}
                        {this.determineTypeOfCell(4,4)}
                        {this.determineTypeOfCell(4,5)}
                        {this.determineTypeOfCell(4,6)}
                        {this.determineTypeOfCell(4,7)}
                        {this.determineTypeOfCell(4,8)}
                        {this.determineTypeOfCell(4,9)}
                        {this.determineTypeOfCell(4,10)}
                        {this.determineTypeOfCell(4,11)}
                        {this.determineTypeOfCell(4,12)}
                    </div>
                    <div id='gridRow_3' className="gridRow">
                        <span className='rowNumber'>3</span>
                        {this.determineTypeOfCell(3,1)}
                        {this.determineTypeOfCell(3,2)}
                        {this.determineTypeOfCell(3,3)}
                        {this.determineTypeOfCell(3,4)}
                        {this.determineTypeOfCell(3,5)}
                        {this.determineTypeOfCell(3,6)}
                        {this.determineTypeOfCell(3,7)}
                        {this.determineTypeOfCell(3,8)}
                        {this.determineTypeOfCell(3,9)}
                        {this.determineTypeOfCell(3,10)}
                        {this.determineTypeOfCell(3,11)}
                        {this.determineTypeOfCell(3,12)}
                    </div>
                    <div id='gridRow_2' className="gridRow">
                        <span className='rowNumber'>2</span>
                        {this.determineTypeOfCell(2,1)}
                        {this.determineTypeOfCell(2,2)}
                        {this.determineTypeOfCell(2,3)}
                        {this.determineTypeOfCell(2,4)}
                        {this.determineTypeOfCell(2,5)}
                        {this.determineTypeOfCell(2,6)}
                        {this.determineTypeOfCell(2,7)}
                        {this.determineTypeOfCell(2,8)}
                        {this.determineTypeOfCell(2,9)}
                        {this.determineTypeOfCell(2,10)}
                        {this.determineTypeOfCell(2,11)}
                        {this.determineTypeOfCell(2,12)}
                    </div>
                    <div id='gridRow_1' className="gridRow">
                        <span className='rowNumber'>1</span>
                        {/* <button id='[01,01]' className={this.determineTypeOfCell(1,1)}></button> */}
                        {this.determineTypeOfCell(1,1)}
                        {this.determineTypeOfCell(1,2)}
                        {this.determineTypeOfCell(1,3)}
                        {this.determineTypeOfCell(1,4)}
                        {this.determineTypeOfCell(1,5)}
                        {this.determineTypeOfCell(1,6)}
                        {this.determineTypeOfCell(1,7)}
                        {this.determineTypeOfCell(1,8)}
                        {this.determineTypeOfCell(1,9)}
                        {this.determineTypeOfCell(1,10)}
                        {this.determineTypeOfCell(1,11)}
                        {this.determineTypeOfCell(1,12)}
                    </div>
                    

                </div>
                <div id='selectedButtonInfo'>

                </div>
            </div>
        );
    }
}
 
export default RegularGrid;