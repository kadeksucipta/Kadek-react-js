import { useEffect } from "react"
import { useState } from "react"

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import hook from "../../hook.png"
import "./stylehook.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Loader from "./Loader";

const HookNews = () => {

    const [newsapi,setNewsapi] = useState([])
    const [keyword,setKeyword] = useState("")
    const [loading,setLoading] = useState(false)

    useEffect(() => {
       fetchNewsapi()
    }, [])
    
    const fetchNewsapi = () => {
        fetch(`https://newsapi.org/v2/top-headlines?q=${keyword}&country=id&apiKey=1b3f0ae9c4014d1cb5ea8f2613929f7e`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setNewsapi(data.articles)
            setLoading(false)
        })
    }
    
    const searchHandler = (query) =>  {
        setKeyword(query)
    }

    const requestButton = () => {
        setLoading(true)
        fetchNewsapi()
    }


    return (
        <div>
            <React.Fragment>
                <Navbar className="navbar">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={hook}
                        maxwidth= "100%"
                        width="170"
                        height="35"
                        className="d-inline-block align-center"
                        />{' '}
                    </Navbar.Brand>
                    </Container>
                </Navbar>
            <br />

            <div>
                <input onChange={e => searchHandler(e.target.value)} type="text" name="" id="" placeholder="Type to search" />
                <button onClick={() => requestButton()}>Search</button>
            </div>

            <br />

                <Container>
                    {loading ? <Loader /> : ""}

                    <br />

                    <Row className="g-4" xs={2} md={4} lg={5}>
                    {newsapi.length === 0 && <p className="text">Maaf berita tidak ditemukan</p>}
                    {newsapi.map((item, index) => ( 
                      
                    <Col key={index}> <Card className="h-100">
                     <Card.Img variant="top" src={item.urlToImage} />
                        <Card.Body>
                            {/* <img src={item.urlToImage} alt="" /> */}
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.author}</Card.Text>
                            <Card.Text>{item.description}</Card.Text>
                            <a className="btn" href={item.url}>Detail</a>
                        </Card.Body>
                    </Card></Col>
                    ))}
                    </Row>
                    </Container>
                        <br />
                        <div className='text-center p-2'>
                            &copy; {new Date().getFullYear()} Copyright, {'Sucipta Creative Team, All rights reserved.'}
                        </div>

            </React.Fragment>

        </div>
    )
}
export default HookNews