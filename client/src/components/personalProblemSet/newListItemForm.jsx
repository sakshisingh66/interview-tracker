import React from 'react';
import Form from '../form/formComponent';
import './newListItem.scss';

const NewListItemForm = ({ handleChange, handleSubmit, title, link, topic }) => {
    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="form-content">
                <Form name="title" type="text" value={title} className="form-control" id="#title" handleChange={handleChange} required={true} placeholder="Name of the question" />
                <Form name="link" type="text" value={link} className="form-control" id="#link" handleChange={handleChange} required={true} placeholder="Link" />
                {/* <Form name="topic" type="text" value={topic} className="form-control" id="#topic" handleChange={handleChange} required={false} placeholder="Topic" /> */}
                <select name="topic" defaultValue="Arrays" value={topic} onChange={handleChange}>
                    <option value="Dynamic Programming">Dynamic Programming</option>
                    <option value="Arrays">Arrays</option>
                    <option value="String">String</option>
                    <option value="Searching & Sorting">Searching & Sorting</option>
                    <option value="LinkedList">LinkedList</option>
                    <option value="Binary Trees">Binary Trees</option>
                    <option value="Binary Search Trees">Binary Search Trees</option>
                    <option value="Greedy">Greedy</option>
                    <option value="BackTracking">BackTracking</option>
                    <option value="Bit Manipulation">Bit Manipulation</option>
                    <option value="Stacks & Queues">Stacks & Queues</option>
                    <option value="Heaps">Heaps</option>
                    <option value="Graph">Graph</option>
                    <option value="Trie">Trie</option>
                </select>
                <input type="submit" className="submit-btn" id="#btn" value="Add" />
            </form>
        </div>
    );
};

export default NewListItemForm;