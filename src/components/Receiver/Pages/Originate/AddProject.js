import React, { Component } from "react";
import RichText from "./slate_richtext"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles/index';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent:'left',
        alignItems:'left',
        flexDirection: 'column',
        // backgroundColor: 'black',
    },
});

class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {}
        };
    }

    handleChange = name => event => {
        console.log(name, event.target.value)
        this.setState({[name]: event.target.value})

    };


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <TextField label="Project name" variant="outlined" onChange={this.handleChange("name")} />
                <TextField label="City" variant="outlined" onChange={this.handleChange("city")}/>
                <TextField label="state" variant="outlined" onChange={this.handleChange("state")}/>
                <TextField label="country" variant="outlined" onChange={this.handleChange("country")}/>
                <TextField label="project type" variant="outlined" onChange={this.handleChange("project type")}/>
                <TextField label="originator name" variant="outlined" onChange={this.handleChange("originator name")}/>
                <br/>
                <h4> Description </h4>
                <RichText/>
                <TextField label="solar power kW" variant="outlined" onChange={this.handleChange("solar")}/>
                <TextField label="battery power kW" variant="outlined" onChange={this.handleChange("battery")}/>
                <TextField label="expected return APR%" variant="outlined" onChange={this.handleChange("return")}/>
            </div>
        )

    }

}

AddProject.propTypes = {
    classes: PropTypes.object.isRequired,

};
export default withStyles(styles)(AddProject);