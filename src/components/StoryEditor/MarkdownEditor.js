/**
 * StoryEditor
 *
 * A react component for editing and parsing markdown files,
 * features including:
 * 1. Takes input text in markdown style
 * 2. Preview mode to display markdown style in HTML format
 * 3. Auto highlight markdown syntax
 *
 * Bonus feature:
 * 1. Auto parse and display markdown when hitting enter key
 * 2. Auto change paragraph back to markdown syntax when hover
 * over it
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StoryEditor.css';

class StoryEditor extends Component {
  static state = {
    editMode: true,
    value: '',
    display: ''
  }

  static propTypes = {
    story: PropTypes.string
  }

  static defaultProps = {
    story: ''
  }

  onEditorInputChange(value) {
    this.setState({value});
  }

  render() {
    return (
      <div className={s.storyEditor}>
        <div className='editArea'>
          { this.state.display }
        </div>
        <textarea 
          onChange={(e) => this.onEditorInputChange(e.target.value)}>
          { this.state.value }
        </textarea>
      </div>
    );
  }
}

export default withStyles(s)(StoryEditor);

