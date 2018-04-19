import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './header';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      asset_tag: '',
      manufacturer: '',
      model: '',
      serial_number: '',
      description: '',
      manufacture_year: '',
      device_type: '', 
      status: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { asset_tag, manufacturer, model, serial_number, description, manufacture_year, device_type, status } = this.state;

    axios.post('/api/asset', { asset_tag, manufacturer, model, serial_number, description, manufacture_year, device_type, status })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { asset_tag, manufacturer, model, serial_number, description, manufacture_year, device_type, status } = this.state;
    return (
      <div>
      <Header />
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD ASSET
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Asset List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="asset_tag">ASSET TAG:</label>
                <input type="text" class="form-control" name="asset_tag" value={asset_tag} onChange={this.onChange} placeholder="ASSET TAG" />
              </div>
              <div class="form-group">
                <label for="manufacturer">Manufacturer:</label>
                <input type="text" class="form-control" name="manufacturer" value={manufacturer} onChange={this.onChange} placeholder="Manufacturer" />
              </div>
              <div class="form-group">
                <label for="model">Model:</label>
                <input type="text" class="form-control" name="model" value={model} onChange={this.onChange} placeholder="Model" />
              </div>
              <div class="form-group">
                <label for="serial_number">Serial Number:</label>
                <input type="text" class="form-control" name="serial_number" value={serial_number} onChange={this.onChange} placeholder="Serial Number" />
              </div>
              
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="manufacture_year">Date of Manufacture:</label>
                <input type="number" class="form-control" name="manufacture_year" value={manufacture_year} onChange={this.onChange} placeholder="Year of Manufacture" />
              </div>
              <div class="form-group">
                <label for="device_type">Device Type:</label>
                <input type="text" class="form-control" name="device_type" value={device_type} onChange={this.onChange} placeholder="Device Type" />
              </div>

              <div class="form-group">
                <label for="status">Status:</label>
                <input type="text" class="form-control" name="status" value={status} onChange={this.onChange} placeholder="Status" />
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

export default Create;
