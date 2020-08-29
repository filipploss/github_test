import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as actions from "../../actions";

interface IStateProps {
  data: Array<object>;
  currentPage: number;
  postsPerPage: number;
  handlePageChange: any;
}

function PaginationComponent({
  data,
  currentPage,
  postsPerPage,
  handlePageChange,
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
  return (
    <>
      <Pagination onClick={handlePageChange}>{items}</Pagination>
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { pageChange } = bindActionCreators(actions, dispatch);
  return {
    handlePageChange: (e: any) => {
      if (e.target.text) {
        pageChange(+e.target.text);
      }
    },
  };
};

const mapStateToProps = ({ data, currentPage, postsPerPage }: IStateProps) => {
  return {
    data,
    currentPage,
    postsPerPage,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);
