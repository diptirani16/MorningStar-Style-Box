import React, { Component } from 'react';
import './StyleBox.css';
import {
  Grid, Container, Autocomplete, TextField,
} from '@mui/material';
import StyleBox from './StyleBox';

const mutualFundList = [
    { name: 'SBI FlexiCap Fund', marketCap: 129012, PE: 25.06, PB: 3.70 },
    { name: 'SBI Equity Hybrid Fund', marketCap: 470, PE: 7.14, PB: 4.14 },
    { name: 'Axis MidCap Fund', marketCap: 6267, PE: 5.40, PB: 6.9 },
    { name: 'Axis Small Cap Fund', marketCap: 9797, PE: 13.15, PB: 4.85 },
    { name: 'UTI Infrastructure Fund', marketCap: 71476, PE: 3.04, PB: 3.36 },
    { name: 'HDFC Hybrid Equity Fund', marketCap: 18909, PE: 19.68, PB: 2.75 },
    { name: 'IDFC Tax Advantage Fund', marketCap: 470, PE: 25.67, PB: 3.03 },
    { name: 'UTI Midcap Fund', marketCap: 6157, PE: 13.83, PB: 5.04 }
];

const nameList = mutualFundList.map(({name}) => name);

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mutualFundName: '',
      mutualFundMarketCap: 0,
      mutualFundProfit: 0,
    };
    this.handlechange = this.handlechange.bind(this);
    this.getHighlightId = this.getHighlightId.bind(this);
    this.getBoxes = this.getBoxes.bind(this);
  }

  handlechange(event, values) {
    this.setState({
      mutualFundName: values,
    }, () => {
      const selectedFund = mutualFundList.find(({ name }) => name === this.state.mutualFundName);
      this.setState({
        mutualFundMarketCap: selectedFund?.marketCap ?? 0,
        mutualFundProfit: selectedFund ? selectedFund.PE / selectedFund.PB : 0,
      });
    });
  }

  getHighlightId(mutualFundMarketCap, mutualFundProfit) {
    let x; 
    let y; 
    if (mutualFundMarketCap === 0 || mutualFundProfit === 0) return { x: -1, y: -1 };

    mutualFundMarketCap > 7000 ? x = 0 : 
    ((mutualFundMarketCap >= 500 && mutualFundMarketCap <= 7000) ? x = 1 : x = 2);

    mutualFundProfit < 1.25 ? y = 0 : 
    ((mutualFundProfit >= 1.25 && mutualFundProfit <= 1.75) ? y = 1 : y = 2);
    
    return { x, y };
  }

  getBoxes() {
      let {x, y} = this.getHighlightId(this.state.mutualFundMarketCap, this.state.mutualFundProfit);
      let components = [];
      let marketCapLabels = ['large', 'medium', 'small'];

      for(let i=0; i<3; i++) {
        components.push(<div className="textbox" key={components.length}>{marketCapLabels[i]}</div>)
        for(let j=0; j<3; j++) {
            components.push(<StyleBox highlight={(i === x && j === y)} key={components.length} />)
        }
      }

      return components;
  }

  render() {
    return (
      <>
        <Container
          className="containerStyle"
          style={{
            display: 'flex', width: '90vw', height: '90vh', alignItems: 'center',
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Container maxWidth="md" style={{ marginTop: '5%' }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  onChange={this.handlechange}
                  options={nameList}
                  sx={{ width: 300, my: 2 }}
                  renderInput={(params) => <TextField {...params} label="Choose Mutual Fund" size="small" />}
                />
              </Container>
            </Grid>
            <Grid item lg={6}>
              <div className="w">
                <section>
                  <div className="textbox" />
                  <div className="textbox">value</div>
                  <div className="textbox">blend</div>
                  {this.getBoxes()}
                </section>
              </div>
            </Grid>
          </Grid>

        </Container>
      </>
    );
  }
}

export default HomePage;
