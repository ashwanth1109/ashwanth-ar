// @flow

import React from "react";
import Link from "redux-first-router-link";

import { Post, Title, Date, Clock, Length, Desc } from "./styles";

import { Container } from "styles";

import clock from "assets/clock.svg";

type Props = {
  article: any,
  route: string
};

const BlogPost = ({ article, route }: Props) => {
  const { title, link, date, description, length } = article;
  return (
    <Post>
      <Link
        to={{
          type: route,
          payload: {
            article: link
          }
        }}
      >
        <Title>{title}</Title>
      </Link>
      <Container justify="flex-start" margin="8px 0">
        <Date>{date}</Date>
        <Clock src={clock} />
        <Length>{length}</Length>
      </Container>
      <Desc>{description}</Desc>
    </Post>
  );
};

export default BlogPost;
