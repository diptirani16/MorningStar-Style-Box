import React, { Component } from 'react';
import './StyleBox.css'
import { Grid, Container, Autocomplete, TextField } from '@mui/material'

const mutualFundList = [
    { name: 'SBI FlexiCap Fund', marketCap: 129012, PE: 25.06, PB: 3.70 },
    { name: 'SBI Equity Hybrid Fund', marketCap: 47470, PE: 27.14, PB: 4.14 },
    { name: 'Axis MidCap Fund', marketCap: 52267, PE: 40.40, PB: 6.9 },
    { name: 'Axis Small Cap Fund', marketCap: 9797, PE: 33.15, PB: 4.85 },
    { name: 'UTI Infrastructure Fund', marketCap: 71476, PE: 26.44, PB: 3.36 },
    { name: 'HDFC Hybrid Equity Fund', marketCap: 18909, PE: 19.68, PB: 2.75 },
    { name: 'IDFC Tax Advantage Fund', marketCap: 67670, PE: 25.67, PB: 3.03 },
    { name: 'UTI Midcap Fund', marketCap: 28157, PE: 33.83, PB: 5.04 }
];

let nameList = mutualFundList.map(function (obj) {
    return obj.name
})

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mutualFundName: '',
            
        }
        this.handlechange = this.handlechange.bind(this);
    }

    handlechange(event, values) {
        this.setState({
            mutualFundName: values
        }, () => {

            console.log(this.state.mutualFundName)
        })
    }

    render() {
        return (
            <>
                <Container style={{ display: 'flex', width: '90vw', height: '90vh', alignItems: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                            <Container maxWidth="md" style={{ marginTop: '5%', height: '80%' }}>
                                <Autocomplete disablePortal id="combo-box-demo" onChange={this.handlechange} options={nameList} sx={{ width: 300, my: 2 }}
                                    renderInput={(params) => <TextField {...params} label="Choose Mutual Fund" size="small" />} />
                            </Container>
                        </Grid>
                        <Grid item lg={6}>
                            <div class="w">
                                <section>
                                    <div className="textbox"></div>
                                    <div className="textbox">value</div>
                                    <div className="textbox">blend</div>
                                    <div className="textbox">growth</div>
                                    <div className="textbox">small</div>
                                    <div className="box">6</div>
                                    <div className="box">7</div>
                                    <div className="box">8</div>
                                    <div className="textbox">medium</div>
                                    <div className="box">10</div>
                                    <div className="box">11</div>
                                    <div className="box">12</div>
                                    <div className="textbox">growth</div>
                                    <div className="box">14</div>
                                    <div className="box">15</div>
                                    <div className="box">16</div>
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