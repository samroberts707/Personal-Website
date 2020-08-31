import React, { Component } from 'react';
import './Timeline.scss';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeline: [
                {
                    'jobTitle': 'Full Stack Developer',
                    'linkText': 'NU Creative',
                    'linkURL': 'https://nucreative.co.uk',
                    'startDate': 'Oct 18',
                    'endDate': 'Present'
                  },
                  {
                    'jobTitle': 'Junior Web Developer',
                    'linkText': 'NU Creative',
                    'linkURL': 'https://nucreative.co.uk',
                    'startDate': 'Oct 15',
                    'endDate': 'Oct 18'
                  },
                  {
                    'jobTitle': 'Systems and Database Manager',
                    'linkText': 'Noord Group',
                    'linkURL': 'https://www.noordgroup.co.uk',
                    'startDate': 'Jun 15',
                    'endDate': 'Oct 15'
                  },
                  {
                    'jobTitle': 'Junior Android Developer',
                    'linkText': 'Panda Pay',
                    'linkURL': 'https://www.pandapayapp.com',
                    'startDate': 'Jan 15',
                    'endDate': 'Jun 15'
                  },
                  {
                    'jobTitle': 'BSc Computer Science Degree',
                    'linkText': 'University of Greenwich',
                    'linkURL': 'https://www.gre.ac.uk/',
                    'startDate': 'Sep 12',
                    'endDate': 'May 15'
                  }
            ]
        }
        this.createItems = this.createItems.bind(this);
    }
    createItems(item, index) {
        return (
        <div key="{item.key}" className="item" id={index} style={{gridRow: index+1}}>
            <h2>{ item.jobTitle }</h2>
            <h4><a href={ item.linkURL } target="_blank" rel="noopener noreferrer">{ item.linkText }</a></h4>
            <h4>{ item.startDate } - { item.endDate }</h4>
        </div> )
    }
    render() {
        var timelineItems = this.state.timeline.map(this.createItems);
        return (
            <div className="timeline">
                <h1>Timeline</h1>
                <div className="wrapper">
                    { timelineItems }
                </div>
            </div>
        );
    }
}

export default Timeline;