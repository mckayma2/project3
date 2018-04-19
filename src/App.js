import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header';
import Titleheading from './components/titleheading';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      assets: []
    };
  }

  componentDidMount() {
    axios.get('/api/asset')
      .then(res => {
        this.setState({ assets: res.data });
        console.log(this.state.assets);
      });
  }

  render() {
    return (
      <div>
      <Header />
      <div class="container">
      <Titleheading />
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ASSET INVENTORY
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Asset</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ASSET TAG</th>
                  <th>Manufacturer</th>
                  <th>Model</th>
                </tr>
              </thead>
              <tbody>
                {this.state.assets.map(asset =>
                  <tr>
                    <td><Link to={`/show/${asset._id}`}>{asset.asset_tag}</Link></td>
                    <td>{asset.manufacturer}</td>
                    <td>{asset.model}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
