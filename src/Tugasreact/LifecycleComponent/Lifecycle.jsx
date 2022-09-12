import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import news from "../../news.png"
import "./style.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Loader from "./Loader";

export default class Lifecycle extends React.Component {
    state = {
        data: [],
        keyword: "",
        isLoading: false
    }
    newsApi(search){
        let url = `https://newsapi.org/v2/top-headlines?q=${search}&country=id&apiKey=1b3f0ae9c4014d1cb5ea8f2613929f7e`
       
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    data: data.articles,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.newsApi("")
    }

    searchHandler(query) {
        this.setState({keyword: query})
           
    }

    requestButton() {
        this.setState({ isLoading: true });
        this.newsApi(this.state.keyword)
    }

    render() {
        return(
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={news}
                        maxwidth= "100%"
                        width="170"
                        height="35"
                        className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    </Container>
                </Navbar>

                <br />
                <div className="container-fluid">
                    <input onChange= {e => this.searchHandler(e.target.value)} className="jarak" type="text" placeholder="type to search" />
                    <button  onClick={() => this.requestButton()}>Search</button>
                </div>
                <br />

                <Container>
                    {this.state.isLoading ? <Loader /> : ""}
				    <Card
					newsData={this.state.news}
					isLoading={this.state.isLoading}
				    />

                    <br />

                    <Row className="g-4" xs={2} md={4} lg={5}>
                    {this.state.data.length === 0 && <p className="text">Maaf berita tidak ditemukan</p>}
                    {this.state.data.map(item => ( 
                     
                    <Col> <Card className="h-100">
                    <img src={item.urlToImage} alt="" />
                        <Card.Body>
                            <Card.Title><p>{item.title}</p></Card.Title>
                            <Card.Text><p>{item.author}</p></Card.Text>
                            <Card.Text><p>{item.description}</p></Card.Text>
                            <a className="btn" href={item.url}>Detail</a>
                        </Card.Body>
                    </Card></Col>
                    ))}
                    </Row>
                    </Container>
                        <br />
                        <div className='text-center p-2'>
                            &copy; {new Date().getFullYear()} Copyright, {'SuciptaCreativeTeam, All rights reserved.'}
                        </div>
            </React.Fragment>
            
        )
    }
}
