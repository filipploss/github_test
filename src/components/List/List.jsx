import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Table from "react-bootstrap/Table";

function List({ data }) {
  console.log(data);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Forks</th>
          <th>Watchers</th>
          <th>Stargazers</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map(
            (
              {
                id,
                html_url,
                name,
                forks_count,
                watchers_count,
                stargazers_count,
              },
              index
            ) => {
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
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
  );
}

const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

export default connect(mapStateToProps)(List);
