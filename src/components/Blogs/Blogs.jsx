import React, { useEffect } from 'react'
import Blog from '../blog/blog'
const Blogs = () => {


// useEffect(() => {
//   fetch('../../fakeData/blogs.json')
//   .then((res) => console.log(res))
//   .then((data) => console.log(data))
// },[])

  return (
    <div>
      <Blog/>
    </div>
  )
}

export default Blogs