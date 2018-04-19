import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './header';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      asset: {}
    };
  }

  componentDidMount() {
    axios.get('/api/asset/'+this.props.match.params.id)
      .then(res => {
        this.setState({ asset: res.data });
        console.log(this.state.asset);
      });
  }

  onChange = (e) => {
    const state = this.state.asset
    state[e.target.name] = e.target.value;
    this.setState({asset:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { asset_tag, manufacturer, model, serial_number, description, manufacture_year, device_type, status } = this.state.asset;

    axios.put('/api/asset/'+this.props.match.params.id, { asset_tag, manufacturer, model, serial_number, description, manufacture_year, device_type, status })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div>
      <Header />
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT ASSET
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.asset._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Asset List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="asset_tag">ASSET TAG:</label>
                <input type="text" class="form-control" name="asset_tag" value={this.state.asset.asset_tag} onChange={this.onChange} placeholder="ASSET TAG" />
              </div>
              <div class="form-group">
                <label for="manufacturer">Manufacturer:</label>
                <input type="text" class="form-control" name="manufacturer" value={this.state.asset.manufacturer} onChange={this.onChange} placeholder="Manufacturer" />
              </div>
              <div class="form-group">
                <label for="model">Model:</label>
                <input type="text" class="form-control" name="model" value={this.state.asset.model} onChange={this.onChange} placeholder="Model" />
              </div>
               <div class="form-group">
                <label for="serial_number">Serial Number:</label>
                <input type="text" class="form-control" name="serial_number" value={this.state.asset.serial_number} onChange={this.onChange} placeholder="Serial Number" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.asset.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="manufacture_year">Date of Manufacture:</label>
                <input type="number" class="form-control" name="manufacture_year" value={this.state.asset.manufacture_year} onChange={this.onChange} placeholder="Date of Manufacture" />
              </div>
              <div class="form-group">
                <label for="device_type">Device Type:</label>
                <input type="text" class="form-control" name="device_type" value={this.state.asset.device_type} onChange={this.onChange} placeholder="Device Type" />
              </div>
              <div class="form-group">
                <label for="status">Status:</label>
                <input type="text" class="form-control" name="status" value={this.state.asset.status} onChange={this.onChange} placeholder="Status" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Edit;
