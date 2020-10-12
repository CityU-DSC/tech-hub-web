import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

const Article = ({ articles }) => {
  const articlesList = articles.length ? (
    articles.map((article) => {
      return (
        <Col lg={4} md={6} xs={12} className={"mt-3"} key={article.id}>
          <Card style={{ width: "22rem" }}>
            <Card.Header as="h5">{article.author}</Card.Header>
            <Card.Img variant="top" src={article.imageUrl} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.content}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    })
  ) : (
      <h4>You have no articles left</h4>
    )
  return <Row>{articlesList}</Row>;
};

export default Article;
