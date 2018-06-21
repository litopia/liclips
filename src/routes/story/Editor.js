/**
 * 
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ???
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Editor.css';

class Editor extends Component {
  static state = {
      editMode: true,
      btnLabel: '',
      markdown: '',
      preview: 'preview mode'
  }

  static propTypes = {
    editMode: PropTypes.bool
  }

  static defaultProps = {
    editMode: true
  }

  // Toggle edit state for the component,
  // and update button label accordingly,
  // If it is editMode, change button label to 'Preview',
  // if it is not in editMode, change button label to 'Edit'
  updateEditState(isEditMode) {
    
    if(typeof(isEditMode) !== 'boolean') {
      isEditMode = !this.state.editMode
    }

    this.setState({
      editMode: isEditMode,
      btnLabel: isEditMode ? 'Preview' : 'Edit' //update btn label based on edit state
    });
  }

  componentWillMount() {
    this.updateEditState(this.props.editMode);
  }

  render() {
    
    return (
      <div className={s.root}>
        <button
          onClick = { this.updateEditState.bind(this) }>
          { this.state.btnLabel }
        </button>
        <textarea className={s.editArea} placeholder="#Title">
          { this.state.markdown }
        </textarea>
        <div>
          { this.state.preview }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Editor);