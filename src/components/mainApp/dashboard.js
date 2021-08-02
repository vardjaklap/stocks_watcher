import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import axios from "axios";
import {axiosInstance} from "../Services/AxiosAPI";
import UnsubscribeIcon from '@material-ui/icons/Unsubscribe';
import AddIcon from '@material-ui/icons/Add';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            popularStocks: [],
            watchedStocks: []
        };
        this.updateStocks = this.updateStocks.bind(this);

    }
    componentDidMount() {
        let self = this;
        axiosInstance.get('/get_user_watches/').then(function (response) {
            self.setState({
                watchedStocks: response.data.watches
            })
        })
            .catch(function (error) {
                console.log(error);

            });


        this.updateStocks();

        try {
            setInterval(async () => {
                this.updateStocks();

            }, 30000);
        } catch(e) {
            console.log(e);
        }
    }

    updateStocks(){
        let self = this;
        axios.get('/api/get_popular_stocks/', {
        })
            .then(function (response) {

                self.setState({
                    popularStocks: response.data.popular
                })
            })
            .catch(function (error) {
                console.log(error);

            });
    }
    clickSubscribe(stockSymbol){
        let self = this;
        axiosInstance.post('/create_watch/', {
            stockSymbol
        })
            .then(function () {
                let array = [...self.state.watchedStocks];
                array.push(stockSymbol);

                self.setState({
                    watchedStocks: array
                })

            })
            .catch(function (error) {
                console.log(error);

            });
    }
    clickUnsubscribe(stockSymbol){
        let self = this;
        axiosInstance.post('/delete_watch/', {
            stockSymbol
        })
            .then(function () {

                let array = [...self.state.watchedStocks];
                let index = array.indexOf(stockSymbol);
                if (index !== -1) {
                    array.splice(index, 1);
                    self.setState({
                        watchedStocks: array
                    })
                }


            })
            .catch(function (error) {
                console.log(error);

            });
    }

    StockCard (list, type) {
        return list.map((stock) => {

            let renderedItem = <Grid item key={stock.name}>
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
                        {this.state.watchedStocks.includes(stock.name) ? <Button onClick={() => this.clickUnsubscribe(stock.name)}> <UnsubscribeIcon/>Unsubscribe</Button> :
                            <Button onClick={() => this.clickSubscribe(stock.name)}> <AddIcon/>Subscribe</Button>}

                    </CardActions>
                </Card>
            </Grid>;
            if(type === "subscribed"){
                if(this.state.watchedStocks.includes(stock.name)){
                    return renderedItem;
                }
            }

            if(type === "popular"){
                return renderedItem;
            }

            return null

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
                        <Grid
                        item>
                            <Grid
                            container
                            justifyContent="start">
                                <Typography variant="h5" gutterBottom>My Watches</Typography>
                            </Grid>

                </Grid>
                    <Grid
                        item>
                        <Grid container spacing={3}>
                            {this.StockCard(this.state.popularStocks, "subscribed")}


                        </Grid>
                    </Grid>

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
                                {this.StockCard(this.state.popularStocks, "popular")}

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
