import { useEffect, useState } from 'react'
import usePostDetails from '../hooks/use-post-details'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updatePost, cleanRecord } from '../store/postSlice'
import { useNavigate } from 'react-router-dom'

const EditPost = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { record } = usePostDetails()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (record) {
      setTitle(record?.title)
      setDescription(record?.description)
    }
  }, [record])

  // clean record inputs
  useEffect(() => {
    return () => dispatch(cleanRecord())
  }, [dispatch])

  //submit form

  const formHandler = (e) => {
    e.preventDefault()
    dispatch(updatePost({ id: record.id, title, description }))
      .unwrap()
      .then(() => navigate('/'))
  }

  return (
    <Form onSubmit={formHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default EditPost
