/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPosts = /* GraphQL */ `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
      id
      image
      type
      title
      description
      bed
      bedroom
      maxGuests
      oldPrice
      newPrice
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listPostss = /* GraphQL */ `
  query ListPostss(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        type
        title
        description
        bed
        bedroom
        maxGuests
        oldPrice
        newPrice
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
