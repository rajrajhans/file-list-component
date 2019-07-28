import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'
//Sample FilesList object for testing

let testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2019-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2019-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2019-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];

class FileList extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        return(
            <table className={"file-list"}>
                <tbody>
                        {this.props.files.map(file => (
                            <FileListItem key={file.id} file={file} />
                        ))}
                </tbody>
            </table>
        )
    }
}

FileList.propTypes = {
        files : PropTypes.array
};

class FileListItem extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)
    }

    render(){
        return(
            <tr className={"file-list-item"}>
                <td className={"file-name"}>
                    {this.props.file.name}
                </td>
            </tr>
        )
    }
}

FileListItem.propTypes = {
    file : PropTypes.object.isRequired
};



ReactDOM.render(<FileList files = {testFiles} />, document.getElementById("root"));