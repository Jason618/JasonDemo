/**
 * Created by lichengjun on 16/10/18.
 */
var CommentBox = React.createClass({
    getInitialState: function () {
        "use strict";
        return {
            data: [
                {id: 1, author: 'jason', text: 'this is a comment'}, {
                id: 2,
                author: 'jason22',
                text: 'this is aa comment'
            }, {id: 3, author: 'jason2', text: 'this is aaa comment'},
                {id: 4, author: 'jason3', text: 'this is a aaacomment'},
                {id: 5, author: 'jason4', text: 'this is a aaaacomment'}
            ]
        }
    },
    componentDidMount: function () {
        "use strict";
        //this.loadCommentsFromServer();
        //setInterval(this.loadCommentsFromServer,this.props.pollInterval);
    },
    loadCommentsFromServer: function () {
        "use strict";
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (result) {
                var oldData = this.state.data;
                var allData = oldData.concat(result);
                console.dir("allData:" + allData);
                this.setState({data: allData});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    updateData: function () {
        "use strict";
        var oldData = this.state.data;
        oldData.splice(1,2);
        this.setState({data: oldData});
    },
    render: function () {
        console.dir('comments box' + this.props);
        console.dir('comments box' + this.state);
        console.dir('commetsbox this:' + this);
        return (
            <div className='commentBox'>
                <h1>this comment box</h1>
                <CommentList data={this.state.data}>

                </CommentList>
                <div onClick={this.updateData}>updateData</div>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        "use strict";
        console.dir(this.props);
        console.info("this object:" + this)
        var commentsNode = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                <h1>this is comment list</h1>
                {commentsNode}
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function () {
        var commentStyle = {
            color: '#999',
            lineHeight: '100px',
            fontSize: '36px'
        }
        "use strict";
        return (
            <div className="comment" >
                <p style={commentStyle}>this is comment from {this.props.author}</p>
                <p style={commentStyle}>{this.props.children}</p>
            </div>
        );
    }
});
var data = [
    {
        id: 1,
        author: 'jason',
        text: 'this is one comment'
    },
    {
        id: 2,
        author: 'jason2',
        text: 'this is two comment'
    }];
ReactDOM.render(
    <CommentBox url="http://127.0.0.1:3000/api/comments/" pollInterval={2000}>
    </CommentBox>,
    document.getElementById('container')
);