import React from 'react'
import { Table, Button, ButtonGroup } from 'react-bootstrap'
import { Link , useNavigate } from 'react-router-dom'

const PostListItems = ({ records, loading, error, deleteRecord }) => {
  // pop up function modal to  make sure delete
  const deleteHandlerModal = (item) => {
    if (window.confirm(`do you want to delete : ${item.title}`)) {
      deleteRecord(item.id)
    }
  }

  const navigate = useNavigate()

  const allRecords = records.map((el, idx) => (
    <tr key={el.id}>
      <td>{++idx}</td>
      <td>
        <Link to={`post/${el.id}`}>{el.title}</Link>
      </td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success" onClick={()=> navigate(`post/${el.id}/edit`)}>Edit</Button>
          <Button variant="danger" onClick={() => deleteHandlerModal(el)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ))
  return loading ? (
    <div> please wait...</div>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: '70%' }}>Title</th>
          <th style={{ width: '10%' }}></th>
        </tr>
      </thead>
      <tbody>{allRecords}</tbody>
    </Table>
  )
}

export default PostListItems
