import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";




export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        };


    }
    componentDidMount() {
        this.setState({
            stocks: [
                {
                    name: "BTC/USDT",
                    price: "39164.44",
                    grow: "-0.74% (-290.04)"
                },
                {
                    name: "BTC/USDT",
                    price: "39164.44",
                    grow: "-0.74% (-290.04)"
                },
                {
                    name: "BTC/USDT",
                    price: "39164.44",
                    grow: "-0.74% (-290.04)"
                },
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

                            {this.state.stocks.map((stock) => {
                                return (
                                <Grid item>
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
                                                    {stock.price}
                                                </Typography>
                                            </Grid>

                                            <Typography variant="h5" component="h3">
                                                {stock.grow}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Subscribe</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>)
                            })}

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

                            {this.state.stocks.map((stock) => {
                                return (
                                    <Grid item>
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
                                                        {stock.price}
                                                    </Typography>
                                                </Grid>

                                                <Typography variant="h5" component="h3">
                                                    {stock.grow}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Subscribe</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>)
                            })}

                        </Grid>
                    </Grid>

                    <Grid
                        item>
                        <Grid
                            container
                            justifyContent="start">
                            <Typography variant="h5" gutterBottom>Crypto</Typography>
                        </Grid>

                    </Grid>

                </Grid>
            </Container>
        </div>;
    }
}
