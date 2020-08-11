import React, { Component } from "react";
import "../Dashboard/Dashboard.scss";
import SummaryCards from "../../../General/SummaryCards/SummaryCards";
import { connect } from "react-redux";
import {
    dashboardAction,
    validateAction
} from "../../../Profile/store/actions";
import Storage from "../../../../services/Storage";
import NotAvailable from "../../../UI/NotAvailable/NotAvailable";
import ReceiverProject from "../Dashboard/ReceiverProject";
import {AddCircle} from '@material-ui/icons'
import { Button } from '@material-ui/core';
import AddProject from "./AddProject";

class Originate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCMSshow: false
        };
        this.showCMS = this.showCMS.bind(this)
    }

    componentDidMount = () => {
        this.props.fetchReceiver("recipient", Storage.get("username"));
        this.props.fetchReceiverDB("recipient", Storage.get("username"));
    };

    showCMS () {
        console.log(this.state.isCMSshow);
        this.setState({isCMSshow: true})
    }

    render() {
        const { authorized, receiver } = this.props;
        const {isCMSshow} = this.state;
        if (this.props.receiver && !this.props.authorized) {
            return <NotAvailable text={"You have not registered as a receiver"} />;
        }

        const projects = receiver["Your Projects"];

        if (!authorized || !receiver) {
            return (
                <div className="receiver-dashboard">
                    <div className="title-container -border">
                        <div className="container">
                            <h3 className="container-title">
                                You have not registered as a recipient
                            </h3>
                        </div>
                    </div>
                </div>
            );
        }

        function cms () {
            if (isCMSshow === true) {
                return <AddProject/>
            }
        }

        return (
            <div className="receiver-dashboard">


                <div className="title-container -border">
                    {!projects ? (
                        <div className="container" style={{ marginBottom: 40 }}>
                            {/*<NotAvailable text={"You don't have any projects"} />*/}
                            {/*<h6 className="container-title">Add project</h6>*/}
                            <Button variant="contained" onClick={this.showCMS}>
                                Add project
                            </Button>
                            <div>
                                {cms()}
                            </div>
                        </div>

                    ) : (
                        <div>
                            <div className="container">
                                <h3 className="container-title">Summary</h3>
                            </div>
                            <div className="profile-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 ">
                                            <SummaryCards
                                                title="your profile"
                                                items={[
                                                    {
                                                        value:
                                                            receiver["Your Profile"] &&
                                                            receiver["Your Profile"].Name,
                                                        desc: "beneficiary name"
                                                    },
                                                    {
                                                        value:
                                                            receiver["Your Profile"] &&
                                                            receiver["Your Profile"]["Active Projects"] !== 0
                                                                ? receiver["Your Profile"]["Active Projects"]
                                                                : "",
                                                        desc: "active projects"
                                                    }
                                                ]}
                                                icon="beneficiary-icon"
                                            />
                                        </div>
                                        <div className="col-sm-6 col-lg-3 ">
                                            <SummaryCards
                                                title="your energy"
                                                items={[
                                                    {
                                                        value:
                                                            receiver["Your Energy"] &&
                                                            receiver["Your Energy"][
                                                                "Total in Current Period"
                                                                ] + " Wh",
                                                        desc: "TOTAL IN CURRENT PERIOD"
                                                    },
                                                    {
                                                        value:
                                                            receiver["Your Energy"] &&
                                                            receiver["Your Energy"]["All Time"] + " Wh",
                                                        desc: "ALL TIME"
                                                    }
                                                ]}
                                                icon="solar-panel-icon"
                                            />
                                        </div>
                                        <div className="col-sm-6 col-lg-3 ">
                                            <SummaryCards
                                                title="YOUR WALLET"
                                                items={[
                                                    {
                                                        value: receiver["Your Wallet"]
                                                            ? receiver["Your Wallet"][
                                                                "Project Wallet Balance"
                                                                ] !== 0
                                                                ? receiver["Your Wallet"][
                                                                    "Project Wallet Balance"
                                                                    ]
                                                                : ""
                                                            : "",
                                                        desc: "PROJECT WALLET BALANCE"
                                                    },
                                                    {
                                                        value: receiver["Your Wallet"]
                                                            ? receiver["Your Wallet"]["Auto Reload"]
                                                            : "Inactive",
                                                        desc: "AUTO RE-LOAD"
                                                    }
                                                ]}
                                                icon="wallet-icon"
                                            />
                                        </div>
                                        <div className="col-sm-6 col-lg-3 ">
                                            <SummaryCards
                                                title="NOTIFICATIONS & ACTIONS"
                                                items={[
                                                    {
                                                        value: receiver["Notifications & Actions"]
                                                            ? receiver["Notifications & Actions"][
                                                                "Notification"
                                                                ]
                                                            : "None",
                                                        desc: "NOTIFICATION"
                                                    },
                                                    {
                                                        value: receiver["Notifications & Actions"]
                                                            ? receiver["Notifications & Actions"][
                                                                "Actions Required"
                                                                ]
                                                            : "None",
                                                        desc: "ACTIONS REQUIRED"
                                                    }
                                                ]}
                                                icon="flag-icon"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="title-container -border">
                                    <div className="container">
                                        <h3 className="container-title">Your Projects</h3>
                                    </div>
                                </div>
                                {projects.map(project => {
                                    return <ReceiverProject data={project} />;
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    receiver: state.profile.recipient.dashboard,
    loading: state.profile.recipient.isLoading,
    authorized: state.profile.recipient.authorized
});

const mapDispatchToProps = dispatch => ({
    fetchReceiver: (entity, username) =>
        dispatch(validateAction(entity, username)),
    fetchReceiverDB: (entity, username) =>
        dispatch(dashboardAction(entity, username))
});

export default connect(mapStateToProps, mapDispatchToProps)(Originate);
