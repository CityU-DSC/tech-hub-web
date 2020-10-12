import React from "react";
import { Card, Button } from "react-bootstrap";

const Article = ({ articles }) => {
  const articlesList = articles.length ? (
    articles.map((article) => {
      return (
        <Card style={{ width: "22rem" }}>
          <Card.Header as="h5">{article.author}</Card.Header>
          <Card.Img variant="top" src={article.imageUrl} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.content}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    })
  ) : (
    <h4>You have no articles left</h4>
  )
  return <div>{articlesList}</div>;
};

export default Article;
