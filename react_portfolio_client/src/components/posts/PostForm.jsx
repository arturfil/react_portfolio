import React, { Component } from 'react'
// import PropTypes
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

export default class PostForm extends Component {
  constructor(porps) {
    super(props);
    this.state = {
      text: '',
      errors: {},
    };
  }

  componentWillReceiveProps = newProps =>  {
    if(newProps.erros) {
      this.setState({errors: newProps.errors});
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    }

    this.props.addPost(newPost);
    this.setState({text: ''});
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className="card-header bg-info text-white">Type Something</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              
            </div>
          </form>
        </div>
      </div>
    </div>
    const {errors} = this.state;
    return (
      <div>
        
      </div>
    )
  }
}
