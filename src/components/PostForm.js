import React from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';
class PostForm extends React.Component{

  constructor(){
    super()
    this.state = {
             title: '',
             body: ''
   };

   this.onChange =this.onChange.bind(this)
   this.onSubmit =this.onSubmit.bind(this)


  }

  onChange(event){
    const { name,value} =event.target
    this.setState({
      [name] :value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const post ={
      title:this.state.title,
      body:this.state.body
    }
    this.props.createPost(post)
    //This will be coming from Redux
    /*fetch('https://jsonplaceholder.typicode.com/posts',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))*/

  }




  render(){
  return (
     <div className="App">
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
        <div>
        <label>Post title</label>
        <input type="text"
        name="title"
        value ={this.state.title}
        onChange={this.onChange} />
        </div>

        <div>
        <label>Post Body</label><br/>
        <textarea
        name="body"
        onChange={this.onChange}
        value={this.state.body}
        ></textarea>
        </div>
        <div>
        <button type="submit">Create Post</button>
        </div>

        </form>
    </div>
  );
}
}
PostForm.propTypes = {
  createPost:PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired,
  

}

const mapStateToProps = state =>({
  posts:state.posts.items

})

export default connect(mapStateToProps,{ createPost})(PostForm)
