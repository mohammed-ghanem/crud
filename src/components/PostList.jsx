import {memo} from 'react'

import PostListItems from './PostListItems'
const PostList = ({ records, loading, error , deleteRecord }) => {
  return <PostListItems records={records} loading={loading} error={error} deleteRecord={deleteRecord} />
}

export default memo(PostList)
