
import React, {Component, PropTypes} from 'react';
import Slider from '../libs/slider';
export default class LayoutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visitedIndex: null};
    }

    action(id,title) {
        if(title === "Add"){
            this.props.actions.addTitle(id, this.props.type);
        }else{
            this.props.actions.deleteTitle(id, this.props.type);
        }
    }




    onMouseEnterHandler(i){
         this.setState({
         visitedIndex: i
         });
    }

    handleHoverHandler(){
        this.setState({
            visitedIndex: null
        });
    }

    render() {
        const that = this;
        let tableRow;
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            draggable: false,
            arrows: true,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipe: false,
            touchMove: false
        };
        let items = this.props.data.length>0? <Slider {...settings}>{this.props.data.map((row, i) => {
                        return (
                                <div key={i} className="list" onMouseOver={this.onMouseEnterHandler.bind(this, row.id)} onMouseLeave={this.handleHoverHandler.bind(this)}>
                                <img className="img-responsive" src={row.img} />
                                <h5>{row.title}</h5>
                                {(this.state.visitedIndex == row.id) ? <button className="btn btn-default removeBtn" onClick={that.action.bind(this, row.id,this.props.butonTitle)} >{this.props.butonTitle}</button> : null }
                                </div>)
                                })}</Slider>: null;



        return (
                    <div>
            {items}
                        <div className="table data-table">
                                <div className="table-row">
                                {this.props.data.length==0?<span className="n_title">No Titles in this List</span> : null}
                                </div>

                        </div>
                    </div>
                )
    }
}
