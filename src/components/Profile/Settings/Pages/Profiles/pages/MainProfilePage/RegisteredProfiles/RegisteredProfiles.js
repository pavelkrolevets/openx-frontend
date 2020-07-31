import React, { useEffect, useState } from "react";
import DivBox from "../../../../../../../General/DivBox/DivBox";
import {
  Highlight,
  StyledHeader,
  StyledText,
  StyledSeparator,
  StyledFlexContainer,
  StyledFundsInfo,
  StyledAccountBalance,
  Balance,
  Label,
  StyledCustomLink
} from "../../../../styles";
import styled from "styled-components";
import ToggleButton from "../../../../../../../General/ToggleButton";
import SeeMore from "../../../../../../../UI/SeeMore/SeeMore";
import history from "../../../../../../../../helpers/history";
import ROUTES from "../../../../../../../../routes/routes";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { dashboardAction } from "../../../../../../store/actions";
import Storage from "../../../../../../../../services/Storage";
import ConfirmModal from "../../../../../../../UI/ConfirmModal/ConfirmModal";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import {Http} from "../../../../../../../../services/Http";
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

const StyledProfileSection = styled.div`
  display: flex;
  width: 100%;
`;

const StyledProfileActionsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 25px;
`;

const RegisteredProfiles = ({
  investor,
  recipient,
  developer,
  isDeveloper,
  fetchInvestorDashboard,
  investorDashboard
}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [seedpwd, setSeedpwd] = useState("");
  const [alertBalance, setAlertBalance] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [alertTrasactionProcessed, setAlertTrasactionProcessed] = useState(false);
  const [alertStartTransaction, setStartTransaction] = useState(false);
  const [error, setErrMsg] = useState("");

  useEffect(() => {
    fetchInvestorDashboard("investor", Storage.get("username"));
  }, []);

  const handleVerify = (username, userType) => {
    history.push(
      ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES_PAGES.VERIFY.replace(
        ":username",
        username
      ).replace(":userType", userType)
    );
  };

  const handleLoadFunds = (username, userType) => {
    history.push(
      ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.LOAD_FUNDS.replace(
        ":username",
        username
      )
    );
  };

  const openModal = () => {
      console.log(investorDashboard["Account Balance 1"].toFixed(2))
      if (investorDashboard["Account Balance 1"].toFixed(2) > 100000.00) {
        setAlertBalance(true)
      } else {
        setModalOpen(true);
      }
      console.log(modalOpen, seedpwd);
      };

  const handleWithdrawFunds = (username, userType) => {
    history.push(
      ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.WITHDRAW_FUNDS.replace(
        ":username",
        username
      )
    );
  };

  const Confirm = async () => {
      //validate user seed
      try {
          await fetch(
              `https://demoapi.openx.solar:8081/user/validate?username=${Storage.get("username")}&token=${Storage.get("token")}&seedpwd=${seedpwd}`
          ).then((response) => {
                    console.log("Response", response);
                    if (response.status == 200) {
                        console.log("Verifucation success!");
                        setStartTransaction(true)
                        // Get some test XLM
                        try {
                            fetch(
                                `https://friendbot.stellar.org?addr=${encodeURIComponent(investor.StellarWallet.PublicKey)}`
                            ).then((response) => {
                                    // Get test stablecoins
                                    getTokens();
                                }
                            )
                        } catch (e) {
                            console.error("ERROR!", e);
                            setAlertError(true)
                        }
                    }
                    else {
                        setErrMsg("Wrong seed, try again")
                        setAlertError(true)
                    }
            })

      } catch (e) {
          console.error("ERROR!", e);
          setAlertError(true)
      }

    console.log(modalOpen, seedpwd);
  };

  const getTokens = async () => {

    Http.getStablecoins(
        1,
        seedpwd
    ).subscribe(
        () => {
          setStartTransaction(false)
          setAlertTrasactionProcessed(true)
          setTimeout(()=>{
                  setAlertTrasactionProcessed(false)
                  fetchInvestorDashboard("investor", Storage.get("username"))
              }, 10000)
        },
        error =>
        {
          console.log(error)
            setErrMsg(error)
          setAlertError(true)
        }
    );
  }

  return (
    <React.Fragment>
      <StyledHeader>Your Registered Profiles & Accounts</StyledHeader>
      <StyledText>
        <Highlight>Why? </Highlight>
        While you are registered in the platform as an individual, you may want
        to operate on behalf of a company or organisation for specific solar
        projects.
      </StyledText>
      <StyledSeparator size={4} />
      {investor && (
        <StyledFlexContainer>
          <StyledProfileSection>
            <DivBox
              type="full"
              text={investor.Name}
              label="INVESTOR PROFILE"
              leftIcon="investor-icon"
              rightIcon="profile-edit-icon"
              link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
            />
            <DivBox
              text={investor.StellarWallet && investor.StellarWallet.PublicKey}
              label="wallet address"
              leftIcon="wallet-icon"
            />
          </StyledProfileSection>
          <StyledProfileActionsSection>
            <ToggleButton
              label={
                <SeeMore
                  infoContent={
                    <div style={{ fontSize: 12 }}>
                      Is your account verified?{" "}
                    </div>
                  }
                >
                  Verified?
                </SeeMore>
              }
              checked={investor.Kyc}
              offLabel={"Start >"}
              handleChange={() => handleVerify(investor.Username, "investor")}
            />
            <StyledFundsInfo>
              <StyledAccountBalance>
                <Balance>
                  ${investorDashboard["Account Balance 1"] &&
                    investorDashboard["Account Balance 1"].toFixed(2)}
                </Balance>
                <Label>ACCOUNT BALANCE</Label>
              </StyledAccountBalance>
              {/*<StyledCustomLink*/}
              {/*  // onClick={() => handleLoadFunds(investor.Username, "investor")}*/}
              {/*    onClick={() => openModal()}*/}
              {/*>*/}
              {/*  Load Funds >*/}
              {/*</StyledCustomLink>*/}

              <Button variant="contained" onClick={() => openModal()}>Load Funds</Button>

              <StyledCustomLink
                  onClick={() => {navigator.clipboard.writeText(investor.StellarWallet.PublicKey)}}
              >
                Copy address to clipboard >
              </StyledCustomLink>

              {modalOpen && (
                  <ConfirmModal
                      title="Enter seed password"
                      onConfirm={Confirm}
                      onCancel={() => setModalOpen(false)}
                      body={
                        <Input
                            placeholder="Seed Password"
                            type="password"
                            value={seedpwd}
                            onChange={e => setSeedpwd(e.target.value)}
                        />
                      }
                  />
              )}

            </StyledFundsInfo>
          </StyledProfileActionsSection>
          {alertBalance && (
              <Alert severity="error" onClose={() => {setAlertBalance(false)}}>You already have test STABLEUSD in the account</Alert>
          )}
          {alertTrasactionProcessed && (
              <Alert severity="warning" onClose={() => {setAlertTrasactionProcessed(false)}}>Transaction is being sent. Please allow up to 30 seconds for a confirmation.</Alert>
          )}
          {alertError && (
              <Alert severity="error" onClose={() => {setAlertError(false)}}>Error {error}</Alert>
          )}
          {alertStartTransaction && (
              <Alert onClose={() => {setStartTransaction(false)}}>Sending test coins to your address.</Alert>
          )}
        </StyledFlexContainer>

      )}
      {investor && <StyledSeparator size={4} />}
      {recipient && (
        <StyledFlexContainer>
          <StyledProfileSection>
            <DivBox
              type="full"
              text={recipient.Name}
              label="RECEIVER PROFILE"
              leftIcon="beneficiary-icon"
              rightIcon="profile-edit-icon"
              link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
            />
            <DivBox
              text={
                recipient.StellarWallet && recipient.StellarWallet.PublicKey
              }
              label="wallet address"
              leftIcon="wallet-icon"
            />
          </StyledProfileSection>
          <StyledProfileActionsSection>
            <ToggleButton
              label={
                <SeeMore
                  infoContent={
                    <div style={{ fontSize: 12 }}>
                      Is your account verified?{" "}
                    </div>
                  }
                >
                  Verified?
                </SeeMore>
              }
              checked={recipient.Kyc}
              offLabel={"Start >"}
              handleChange={() => handleVerify(recipient.Username, "recipient")}
            />
            <StyledFundsInfo>
              {/*<StyledCustomLink*/}
              {/*  onClick={() => handleLoadFunds(recipient.Username, "recipient")}*/}
              {/*>*/}
              {/*  Load Funds >*/}
              {/*</StyledCustomLink>*/}
              <StyledCustomLink
                onClick={() =>
                  handleWithdrawFunds(recipient.Username, "recipient")
                }
              >
                Withdraw Funds >
              </StyledCustomLink>
            </StyledFundsInfo>
          </StyledProfileActionsSection>
        </StyledFlexContainer>
      )}
      {recipient && <StyledSeparator size={4} />}
      {isDeveloper && (
        <StyledFlexContainer>
          <StyledProfileSection>
            <DivBox
              type="full"
              text={developer.Name}
              label="developer profile"
              leftIcon="developer-icon"
              rightIcon="profile-edit-icon"
              link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
            />
            <DivBox
              text={
                developer.StellarWallet && developer.StellarWallet.PublicKey
              }
              label="wallet address"
              leftIcon="wallet-icon"
            />
          </StyledProfileSection>
          <StyledProfileActionsSection>
            <ToggleButton
              label={
                <SeeMore
                  infoContent={
                    <div style={{ fontSize: 12 }}>
                      Is your account verified?{" "}
                    </div>
                  }
                >
                  Verified?
                </SeeMore>
              }
              checked={developer.Kyc}
              offLabel={"Start >"}
              handleChange={() => handleVerify(developer.Username, "developer")}
            />
            <StyledFundsInfo>
              <StyledCustomLink
                onClick={() => handleLoadFunds(developer.Username, "developer")}
              >
                Load Funds >
              </StyledCustomLink>
              <StyledCustomLink
                onClick={() =>
                  handleWithdrawFunds(developer.Username, "developer")
                }
              >
                Withdraw Funds >
              </StyledCustomLink>
            </StyledFundsInfo>
          </StyledProfileActionsSection>
        </StyledFlexContainer>
      )}
      {isDeveloper && <StyledSeparator size={4} />}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  investor: state.profile.investor.items.U,
  investorDashboard: state.profile.investor.dashboard,
  recipient: state.profile.recipient.items.U,
  developer: state.profile.entity.items.U,
  isDeveloper: state.profile.entity.items.Developer
});
const mapDispatchToProps = dispatch => ({
  fetchInvestorDashboard: (entity, username) => dispatch(dashboardAction(entity, username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(RegisteredProfiles));
