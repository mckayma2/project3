import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      asset: {}
    };
  }

  componentDidMount() {
    axios.get('/api/asset/'+this.props.match.params.asset_tag)
      .then(res => {
        this.setState({ asset: res.data });
        console.log(this.state.asset);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/asset/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.asset.manufacturer}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Asset List</Link></h4>
            <dl>
              <dt>ASSET TAG:</dt>
              <dd>{this.state.asset.asset_tag}</dd>
              <dt>Model:</dt>
              <dd>{this.state.asset.model}</dd>
              <dt>Serial Number:</dt>
              <dd>{this.state.asset.serial_number}</dd>
              <dt>Date of Manufacture:</dt>
              <dd>{this.state.asset.manufacture_year}</dd>
              <dt>Device Type:</dt>
              <dd>{this.state.asset.device_type}</dd>
              <dt>Status:</dt>
              <dd>{this.state.asset.status}</dd>
            </dl>
            <Link to={`/edit/${this.state.asset._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.asset._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
