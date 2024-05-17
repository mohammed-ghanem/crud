import { useDispatch } from 'react-redux'
import { insertPost } from '../store/postSlice'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

const AddPost = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: (values) => {
      
      dispatch(
        insertPost({
          
          title: values.title,
          description: values.description,
        }),
      )
        .unwrap()
        .then(() => {
          navigate('/')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddPost



