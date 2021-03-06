import { Component } from 'react';
import { Product } from '../../interfaces/Product';
import './ProductCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    product: Product
    removeProduct(product: Product): void
    updateAmount(product: Product, amount: Number): void
}

interface IState {
    product: Product;
}

export default class ProductCard extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            product: this.props.product
        }
    }

    displayEuros = (cents: Number) => {
        return "€" + cents.toString().slice(0, -2) + "," + cents.toString().slice(-2)
    }

    render() {
        return (
            <tr>
                <td className="w-25">
                    <img
                        alt=''
                        src={this.props.product.image}
                        className="img-fluid img-thumbnail" />
                </td>
                <td>{this.props.product.name}</td>
                <td>{this.displayEuros(this.props.product.price)}</td>
                <input type="number" className="form-control input-lg" id="input1" onChange={e => { this.props.updateAmount(this.props.product, parseInt(e.target.value)) }} value={this.props.product.amount}></input>
                <td>{this.displayEuros(this.props.product.amount * this.props.product.price)}</td>
                <td>
                    <FontAwesomeIcon style={{ color: "red" }} icon={faTimes} onClick={() => { this.props.removeProduct(this.props.product) }} />
                </td>
            </tr>
        );
    }
}