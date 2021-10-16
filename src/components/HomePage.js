import React, { Component } from 'react';
import './StyleBox.css'
import { Grid, Container, Autocomplete, TextField } from '@mui/material'

// false details of mutual funds
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

// array of names of mutual funds
let nameList = mutualFundList.map(function (obj) {
    return obj.name
})

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mutualFundName: '',
            mutualFundMarketCap: 0,
            mutualFundProfit: 0
        }
        this.handlechange = this.handlechange.bind(this);
    }

    handlechange(event, values) {
        this.setState({
            mutualFundName: values
        }, () => {
            const selectedFund = mutualFundList.find(obj => obj.name === this.state.mutualFundName)
            this.setState({
                mutualFundMarketCap: selectedFund?.marketCap ?? 0,
                mutualFundProfit: selectedFund ? selectedFund.PE / selectedFund.PB : 0
            })
        }
        )
    }

    render() {

        return (
            <>
                <Container className="containerStyle" style={{ display: 'flex', width: '90vw', height: '90vh', alignItems: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} xs={12}>
                            <Container maxWidth="md" style={{ marginTop: '5%' }}>
                                <Autocomplete disablePortal id="combo-box-demo" onChange={this.handlechange} options={nameList} sx={{ width: 300, my: 2 }}
                                    renderInput={(params) => <TextField {...params} label="Choose Mutual Fund" size="small" />} />
                            </Container>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <div class="w">
                                <section>
                                    <div className="textbox"></div>
                                    <div className="textbox">value</div>
                                    <div className="textbox">blend</div>
                                    <div className="textbox">growth</div>
                                    <div className="textbox">large</div>
                                    <div style={
                                        (this.state.mutualFundMarketCap > 7000 && this.state.mutualFundProfit < 1.25 && this.state.mutualFundProfit !== 0 && this.state.mutualFundMarketCap !== 0) ? { backgroundColor: 'black' } : {}
                                    } className="box"></div>
                                    <div style={
                                        (this.state.mutualFundMarketCap > 7000 && this.state.mutualFundProfit >= 1.25 && this.state.mutualFundProfit <= 1.75 && this.state.mutualFundProfit !== 0 && this.state.mutualFundMarketCap !== 0) ? { backgroundColor: 'black' } : {}
                                    } className="box"></div>
                                    <div style={
                                        (this.state.mutualFundMarketCap > 7000 && this.state.mutualFundProfit > 1.75 && this.state.mutualFundProfit !== 0 && this.state.mutualFundMarketCap !== 0) ? { backgroundColor: 'black' } : {}
                                    } className="box"></div>
                                    <div className="textbox">medium</div>
                                    <div style={
                                        (this.state.mutualFundMarketCap >= 500 && this.state.mutualFundMarketCap <= 7000 && this.state.mutualFundProfit < 1.25 && this.state.mutualFundProfit !== 0 && this.state.mutualFundMarketCap !== 0) ? { backgroundColor: 'black' } : {}
                                    } className="box"></div>
                                    <div style={
                                        (this.state.mutualFundMarketCap >= 500 && this.state.mutualFundMarketCap <= 7000 && this.state.mutualFundProfit >= 1.25 && this.state.mutualFundProfit <= 1.75 && this.state.mutualFundProfit !== 0 && this.state.mutualFundMarketCap !== 0) ? { backgroundColor: 'black' } : {}
                                    } className="box"></div>
                                    <div style={
                                        (this.state.mutualFundMarketCap >= 500 && this.state.mutualFundMarketCap <= 7000 && this.state.mutualFundProfit > 1.75 && this.state.mutualFundProfit !== 0 && this.state.mutualFundMarketCap !== 0) ? { backgroundColor: 'black' } : {}
                                    } className="box"></div>
                                    <div className="textbox">small</div>
                                    <div style={
                                        (this.state.mutualFundMarketCap < 500 && this.state.mutualFundProfit < 1.25 && this.state.mutualFundProfit !== 0 && this.state.mutualFundMarketCap !== 0) ? { backgroundColor: 'black' } : {}
                                    } className="box"></div>
                                    <div style={
                                        (this.state.mutualFundMarketCap < 500 && this.state.mutualFundProfit >= 1.25 && this.state.mutualFundProfit <= 1.75 && this.state.mutualFundProfit !== 0 && this.state.mutualFundMarketCap !== 0) ? { backgroundColor: 'black' } : {}
                                    } className="box"></div>
                                    <div style={
                                        (this.state.mutualFundMarketCap < 500 && this.state.mutualFundProfit > 1.75 && this.state.mutualFundProfit !== 0 && this.state.mutualFundMarketCap !== 0) ? { backgroundColor: 'black' } : {}
                                    } className="box"></div>
                                </section>
                            </div>
                        </Grid>
                    </Grid>

                </Container>
            </>
        )
    }
}

export default HomePage;