import usePostDetails from '../hooks/use-post-details'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cleanRecord } from '../store/postSlice'
const Details = () => {
  const dispatch = useDispatch()

  // clean record inputs
  useEffect(() => {
    return () => dispatch(cleanRecord())
  }, [dispatch])

  const { record } = usePostDetails()

  console.log(record)

  return (
    <div>
      <p> title : {record?.title} </p>
      <p> description : {record?.description} </p>
    </div>
  )
}

export default Details
