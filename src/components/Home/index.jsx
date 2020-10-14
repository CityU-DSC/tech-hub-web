import React, { Component } from "react";
import Banner from "../Banner";
import Articles from "../Article";
import AddArticle from "../Article/addArticle";
import { Container, Button, Modal} from "react-bootstrap";

//scss
import "./home.scss";

class Welcome extends Component {
  state = {
    addArticleDialog: false,
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
      {
        id: 3,
        author: "lover",
        title: "Third Title",
        content:
          "sdsfeffe 4g4t5t 53porkg r pgokrg pokgporkg pogk4 pgok3 gpok gpogk 5p gkt4 gk 53",
        imageUrl:
          "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: 4,
        author: "HelloV",
        title: "Fourth Title",
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
        <Modal centered show={this.state.addArticleDialog} onHide={()=>this.setState({addArticleDialog: false})}>
          <Modal.Header>Adding New Article</Modal.Header>
          <Modal.Body>
            <AddArticle />
          </Modal.Body>
        </Modal>
        <Banner />
        <Container className="mt-5">
          <Articles articles={this.state.articles} />
          <Button
            className="addArticle"
            variant="primary"
            onClick={()=>{this.setState({addArticleDialog: true})}}
          >
            <i className="fa fa-plus">Add</i>
          </Button>
        </Container>
      </div>
    );
  }
}

export default Welcome;
