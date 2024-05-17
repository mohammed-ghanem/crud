import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostList from '../components/PostList'
import { fetchPosts, deletePost } from '../store/postSlice'

const Index = () => {
  const dispatch = useDispatch()

  const { records, loading, error } = useSelector(
    (state) => state.posts,
  )
  //fetch post data
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  // delete post
  const deleteRecord = useCallback((id) => dispatch(deletePost(id)), [dispatch])

  return (
    <div>
      <PostList
        records={records}
        loading={loading}
        error={error}
        deleteRecord={deleteRecord}
      />
    </div>
  )
}

export default Index
