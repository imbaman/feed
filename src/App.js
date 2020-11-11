import React from 'react';
import { Container, Header, Loader } from "semantic-ui-react";
import PostsList from './Components/PostsList'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[],
      apiError:"",
      count:20,
      start:1,
      hasMore: true,
  };
  }

  
   componentDidMount() {
  const {count,start} = this.state;
  axios
  .get(`http://localhost:3000/posts?_start=${start}&_end=${count}`)
  .then(res=> this.setState({posts: res.data}))
  }

  loadPosts = () => {
   const {count,start} = this.state;
   this.setState({ start: this.state.count + 1, count:this.state.count + 20});
   axios
   .get(`http://localhost:3000/posts?_start=${start}&_end=${count}`)
   .then(res => this.setState({posts: this.state.posts.concat(res.data)}))
   
   if (this.state.count >= 340) {
      this.setState({ hasMore: false });
      return;
    }
  }

  
  render(){
    const { posts, apiError } = this.state;
  
  return (
  <Container>
    
    <Header as="h2" style={{textAlign:"center",margin:20}}>
      Oko.press
    </Header>
   
    <InfiniteScroll
          dataLength={this.state.posts.length}
          next={this.loadPosts}
          hasMore={this.state.hasMore}
          loader={<div>loading...</div>}
          hasChildren={false}
          endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Koniec Newsow</b>
    </p>}>
     <PostsList posts={posts} />
</InfiniteScroll>
 
  </Container>
 )
  }
}

export default App;
