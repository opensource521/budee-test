import P from '../components/paragraph'
import Post from '../components/post'

import MainContainer from '../components/MainContainer'

export default function Home() {
  return (
    <div className="main">
      <MainContainer />
      <style jsx>{`
        .main {
          background: black;
          height: 800px;
          display: flex;
        }
      `}</style>
    </div>
  )
}
