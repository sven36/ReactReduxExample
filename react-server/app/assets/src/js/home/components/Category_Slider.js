import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Img from '../../common/Img.js';
const slider='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAABQAAAAUAKM7KtEAAADISURBVCjPjdI9T8JQFIDhp6cKTRz4mFpmFwz+//9hgk4YJ0sMJiKSlKVxwFo/Au07ndz7TPeeRFvI5SYytcrW2lrdXCbfLHfjyu/2HpTHMf3ic7cG/jYwk3pt4dy1U02FzREWFs41tfMRooPBQoRC1gkzs1B0MsjDuBcch2EvOIz27c8XDr3cIbz3gm/R/GVH61CqOlnlOdSWnXCpTrFzYXqGrTw227NxaXKCPbmngbzYGf3byL07q+OY/DgOhcJIhspWqWy/4xO4VSw4B3jzAwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wOS0zMFQxNjowMTo1NyswODowMCbyI8YAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDktMzBUMTY6MDE6NTcrMDg6MDBXr5t6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==';
class Category_Slider extends Component{
    render(){
        let count=this.props.count;
        let imgs=[];
      if(count>0){
          for(let key=0;key<count;key++){
              imgs.push(<Img id={key+'Img'} key={key +'Category_Slider'} src={slider} style={this.props.index==key ?'hover':''} onHover={this.props.SliderChange} onOut={this.props.change} />)
          }
        }
        return(
            <div  id={this.props.id} className={this.props.style}>
                {imgs}
            </div>
        );
    }
}
export default Category_Slider;