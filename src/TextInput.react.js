'use strict';

import cx from 'classnames';
import React, {PropTypes} from 'react';

const TextInput = React.createClass({
  propTypes: {
    /**
     * Specify the size of the input.
     */
    bsSize: PropTypes.oneOf(['large', 'lg', 'small', 'sm']),
  },

  render() {
    const { type, bsSize, className, hasAux, ...otherProps} = this.props;
    return (
      <input
        {...otherProps}
        className={cx('form-control', {
          'has-aux': hasAux,
          'input-lg': bsSize === 'large' || bsSize === 'lg',
          'input-sm': bsSize === 'small' || bsSize === 'sm',
        }, className)}
        ref={input => this._input = input}
        type={type ? type : 'number'}
        onKeyUp = { e => { if (e.target.type=="number") { e.target.value = e.target.value.replace(/\D/g , ''); }}  }
      />
    );
  },

  getInstance() {
    return this._input;
  },
});

export default TextInput;
