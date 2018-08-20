import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        // if (!isOpen) return null
        return (
            <Transition
                appear
                in={isOpen}
                timeout={{ enter: 100, exit: 300 }}
                unmountOnExit
            >
                {(state) => {
                    console.log(state);
                    return comments.length ? (
                        <ul className={`comments-list comments-list-${state}`}>
                            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
                        </ul>
                    ) : <h3 className={`empty-header empty-header-${state}`}>No comments yet</h3>;
                }}
            </Transition>
        )
    }
}


export default toggleOpen(CommentList)