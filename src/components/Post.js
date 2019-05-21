import React from 'react';
import { connect} from 'react-redux';
import { fetchPosts} from '../actions/postActions';
import PropTypes from 'prop-types';





class Post extends React.Component {


  //tHE state is not needed as it is driven from redux
  /*constructor(props){
    super(props)
    this.state = {
      posts:[]
    }
  }*/
  //the service call is not needed as it is coming from redux
  /*componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => this.setState({
      posts:json
    }))
  }*/

  componentWillMount(){
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps){


    if(nextProps.newPost){  console.log("new propsadass")
      this.props.posts.unshift(nextProps.newPost)
    }

  }
  render(){
    const postItems = this.props.posts.map(p => (

      <div key = {p.id}>
      <h3 style={{color:"red"}}>{p.title}</h3>
      <p>{p.body}</p>
      </div>

    ))
  return (
     <div className="App">
        <h1>Posts</h1>
        {postItems}
    </div>
  );
}
}


const mapStateToProps = state =>({
  posts:state.posts.items,
  newPost:state.posts.item
})
Post.propTypes = {
  fetchPosts:PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired,
  newPost:PropTypes.object
}
export default connect(mapStateToProps,{ fetchPosts})(Post)
