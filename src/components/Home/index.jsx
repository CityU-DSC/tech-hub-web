import React, { Component } from "react";
import Banner from "../Banner";
import Articles from "../Article";
import { Container, Row, Col } from "react-bootstrap";

class Welcome extends Component {
  state = {
    articles: [
      {
        id: 1,
        author: "ryanyen",
        title: "First Title",
        content:
          "3oirfemroifj roijreoif rjoir3por kfpor3kfpo k3porkg r pgokrg pokgporkg pogk4 pgok3 gpok gpogk 5p gkt4 gk 53",
        imageUrl:
          "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: 2,
        author: "eugene",
        title: "Second Title",
        content:
          "3oirfemroifj roijreoif rjoir3por kfpor3kfpo k3porkg r pgokrg pokgporkg pogk4 pgok3 gpok gpogk 5p gkt4 gk 53",
        imageUrl:
          "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    ],
  };
  addArticle = (article) => {
      article.id = this.state.articles.length+1;
      let articles = [...this.state.articles, article];
      this.setState(()=>({
          articles: articles
      }));
  };
  render() {
    return (
      <div>
        <Banner />
        <Container className="mt-5">
          <Row>
            <Col>
              <Articles articles={this.state.articles} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Welcome;
