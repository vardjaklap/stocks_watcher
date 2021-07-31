import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import axios from "axios";
import {authMethods} from "../Services/authMethods";


function StockCard (list) {
    return list.map((stock) => {
        return(
            <Grid item key={stock.name}>
                <Card >
                    <CardContent>
                        <Grid container
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center">
                            <Typography gutterBottom>
                                {stock.name}
                            </Typography>
                            <Typography gutterBottom color="textSecondary">
                                {stock.c}
                            </Typography>
                        </Grid>
                        {stock.o > stock.c ? <Typography variant="h5" component="h3" style={{color: red[500]}}>
                                {stock.dp.toFixed(2)}% ({(stock.c-stock.pc).toFixed(2)})
                            </Typography> :
                            <Typography variant="h5" component="h3" style={{color: green[500]}}>
                                {stock.dp.toFixed(2)}% ({(stock.c-stock.pc).toFixed(2)})
                            </Typography>}


                    </CardContent>
                    <CardActions>
                        <Button >Subscribe</Button>
                    </CardActions>
                </Card>
            </Grid>)
    })
}

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            popularStocks: []
        };


    }
    componentDidMount() {
        let self = this;
        axios.get('/api/get_popular_stocks/', {
        })
            .then(function (response) {
                console.log(response)
                self.setState({
                    popularStocks: response.data.popular
                })
            })
            .catch(function (error) {
                console.log(error);

            });


        this.setState({
            stocks: [
                {
                    name: "BTC/USDT",
                    c: 0,
                    o: 0,
                    dp: 0,
                    pc: 0
                }
            ]
        })
    }


    render() {
        return <div>
            <Container>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch">
                {/*        <Grid*/}
                {/*        item>*/}
                {/*            <Grid*/}
                {/*            container*/}
                {/*            justifyContent="start">*/}
                {/*                <Typography variant="h5" gutterBottom>My Watches</Typography>*/}
                {/*            </Grid>*/}

                {/*</Grid>*/}
                {/*    <Grid*/}
                {/*        item>*/}
                {/*        <Grid container spacing={3}>*/}
                {/*            {StockCard(this.state.stocks)}*/}

                {/*        </Grid>*/}
                {/*    </Grid>*/}

                    <Grid
                        item>
                            <Grid
                                container
                                justifyContent="start">
                                <Typography variant="h5" gutterBottom>Popular</Typography>
                            </Grid>

                    </Grid>
                        <Grid
                            item>
                            <Grid container spacing={3}>
                                {StockCard(this.state.popularStocks)}

                            </Grid>
                    </Grid>

                    {/*<Grid*/}
                    {/*    item>*/}
                    {/*    <Grid*/}
                    {/*        container*/}
                    {/*        justifyContent="start">*/}
                    {/*        <Typography variant="h5" gutterBottom>Crypto</Typography>*/}
                    {/*    </Grid>*/}

                    {/*</Grid>*/}

                </Grid>
            </Container>
        </div>;
    }
}
