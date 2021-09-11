import React, { Component } from 'react';
import PromoService from '../PaymentHandlingServices/PromoService';

class UpdatePromoCodeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            code: '',
            amount: '',
            count: ''
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.updatePromo = this.updatePromo.bind(this);
    }

    componentDidMount(){
        PromoService.getPromocodeById(this.state.id).then( (res) =>{
            let Promo_Code = res.data;
            this.setState({code: Promo_Code.code,
                amount: Promo_Code.amount,
                count : Promo_Code.count
            });
        });
    }

    updatePromo = (e) => {
        e.preventDefault();
        let Promo_Code = {code: this.state.code, amount: this.state.amount, count: this.state.count};
        console.log('Promo_Code => ' + JSON.stringify(Promo_Code));
        console.log('id => ' + JSON.stringify(this.state.id));
         PromoService.updatePromocode(Promo_Code, this.state.id).then( res => {
            this.props.history.push('/promomanage');
        });
    }
    
    changeCodeHandler= (event) => {
        this.setState({code: event.target.value});
    }

    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    changeCountHandler= (event) => {
        this.setState({count: event.target.value});
    }

    cancel(){
        this.props.history.push('/promomanage');
    }

    render() {
        return (
            <div  style={{marginTop: 100, marginBottom:120}}>
                <br></br>
                   <div className = "form">
                        <div className = "row">
                        <div className = "formDiv">
                                <h3 className="text-center">Update Promo Code</h3>
                                <div className = "card-body">
                                    <form id="form1">
                                    <br />
                                        <div className = "form-group">
                                            <label> Promo ID: </label>
                                            <input placeholder="id" name="promoid" className="form-control" 
                                                value={this.state.id} disabled/>
                                        </div>

                                    <br />
                                        <div className = "form-group">
                                            <label> Promo Code: </label>
                                            <input placeholder="Code Name" name="code" className="form-control" 
                                                value={this.state.code} onChange={this.changeCodeHandler}/>
                                        </div>
                                        <br />
                                        <div className = "form-group">
                                            <label> Reduced Amount: </label>
                                            <input placeholder="500" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler}/>
                                        </div>
                                        <br />
                                        <div className = "form-group">
                                            <label> Count: </label>
                                            <input placeholder="10" name="count" className="form-control" 
                                                value={this.state.count} onChange={this.changeCountHandler}/>
                                        </div>
                                        <br />
                                       
                                        <button className="edidelbtn" onClick={this.updatePromo}>Update</button>
                                        <button className="edidelbtn" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   <br /> <br /><br /> <br /><br /> <br />
            </div>
        )
    }
}
export default UpdatePromoCodeComponent;