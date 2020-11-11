import React from 'react'
import { Grid, List } from "semantic-ui-react";
import {  Image, Header} from "semantic-ui-react";


const Post = ({post}) =>{
    // const color = 'red'

    return (
      
    <List.Item style={{padding:30}}  >
        
        <Grid  columns={2} stackable>
           <Grid.Column width={9}
            style={{display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",}}>
            <List.Item href={post.url}><Header as="h3">{post.title}</Header></List.Item>   
            <List.Description style={{margin:"20px 0"}} href={post.url}>
          {post.excerpt}
            </List.Description>
            <List bulleted horizontal>
              <List.Item >{post.date}</List.Item>
               </List>
            </Grid.Column>
            <Grid.Column width={5}>
                <Image src={post.thumb} href={post.url} rounded/>
            </Grid.Column>
        </Grid>

    </List.Item>

    )
}

const PostsList = ({posts}) => {
    return (
<List divided style={{maxWidth:900, margin:"0 auto"}}>
            {
            posts.map((post)=>(
                <Post key={post.title} post={post}>{post.title}</Post>
                ))
                } 
        </List>   
    )
}

export default PostsList
