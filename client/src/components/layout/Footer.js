import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Link to="/dashboard/profile" className="footer-button"><i className="material-icons">face</i>Profile</Link>
                <Link to="/dashboard/history" className="footer-button"><i className="material-icons">access_time</i>History</Link>
                <Link to="/dashboard/workout" className="footer-button"><i className="material-icons">play_circle_filled</i>Workout</Link>
                <Link to="/dashboard/exercises" className="footer-button"><i className="material-icons">list_alt</i>Exercises</Link>
                <Link to="/dashboard/settings" className="footer-button"><i className="material-icons">settings</i>Settings</Link>
            </div>
        )
    }
}
