import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "./List.css";

interface IStateProps {
  data: Array<object>;
  currentPage: number;
  errorMessage: string;
  loading: boolean;
  postsPerPage: number;
  value: object
}

interface ICurrentPosts {
  id: number;
  html_url: string;
  name: string;
  forks_count: number;
  watchers_count: number;
  stargazers_count: number;
}

function List({
  data,
  currentPage,
  errorMessage,
  loading,
  postsPerPage,
}: IStateProps) {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts;
  if (data) {
    currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  }

  let items = [];
  if (currentPosts && data) {
    for (
      let number = 1;
      number <= Math.ceil(data.length / postsPerPage);
      number++
    ) {
      items.push(
        <Pagination.Item key={number} active={number === currentPage}>
          {number}
        </Pagination.Item>
      );
    }
  }

  if (loading) {
    return <Spinner animation="border" variant="info" />;
  }

  if (errorMessage) {
    return (
      <Alert variant={"danger"}>
        Something bad happened.
        <br /> Error message: {errorMessage}
      </Alert>
    );
  }

  return (
    <>
      <Table striped bordered hover size="sm" className="table">
        {currentPosts ? (
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Forks</th>
              <th>Watchers</th>
              <th>Stargazers</th>
            </tr>
          </thead>
        ) : (
          <></>
        )}
        <tbody>
          {currentPosts ? (
            currentPosts.map(
              (
                {
                  id,
                  html_url,
                  name,
                  forks_count,
                  watchers_count,
                  stargazers_count,
                } : any,
                index
              ) => {
                return (
                  <tr key={id}>
                    <td>
                      {postsPerPage * currentPage - (postsPerPage - index - 1)}
                    </td>
                    <td>
                      <a
                        href={html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    </td>
                    <td>{forks_count}</td>
                    <td>{watchers_count}</td>
                    <td>{stargazers_count}</td>
                  </tr>
                );
              }
            )
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </>
  );
}

const mapStateToProps = ({
  data,
  currentPage,
  errorMessage,
  loading,
  postsPerPage,
}: IStateProps) => {
  return {
    data,
    currentPage,
    errorMessage,
    loading,
    postsPerPage,
  };
};

export default connect(mapStateToProps)(List);
