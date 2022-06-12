// import
import { UserDetailsStyles } from "./UserDetails.styles"

const UserDetails = ({ user }) => {
    let account_type;
    if (user.account_realm === 1 || 0) {
        account_type = "IQ";
    } else if (user.account_realm === 2) {
        account_type = "MSA";
    } else if (user.account_realm === 4) {
        account_type = "AAD";
    }

    let premium_status;
    if (user.is_premium === 0) {
        premium_status = "0 - Free"
    } else if (user.is_premium === 1) {
        premium_status = "1 - Premium"
    } else if (user.is_premium === 2) {
        premium_status = "2 - Expired/Churned"
    }

    let subscription_type;
    if (user.subscription_type === 0) {
        subscription_type = "0 - Free"
    } else if (user.subscription_type === 1) {
        subscription_type = "1 - Premium-Comped"
    } else if (user.subscription_type === 2) {
        subscription_type = "2 - Monthly"
    } else if (user.subscription_type === 3) {
        subscription_type = "3 - Annual"
    } else if (user.subscription_type === 4) {
        subscription_type = "4 - ADP"
    } else if (user.subscription_type === 5) {
        subscription_type = "5 - Enterprise/Org Account"
    } else if (user.subscription_type === 6) {
        subscription_type = "6 - O365 Account"
    } else if (user.subscription_type === 7) {
        subscription_type = "7 - O365 Comped"
    } else if (user.subscription_type === 8) {
        subscription_type = "8 - MSA"
    } else if (user.subscription_type === 9) {
        subscription_type = "9 - Teams Lite"
    } else if (user.subscription_type === 11) {
        subscription_type = "11 - Teams Pro"
    }

    return (
        <UserDetailsStyles>
            <h2>User</h2>
            <div className="user-info-container">
                <div className="basic-info-container">
                    <div className="user-info-title">Parse: <span>{user.parse_id}</span></div>
                    <div className="user-info-title">Email: <span>{user.email}</span></div>
                    <div className="user-info-title">Is Premium: <span>{premium_status}</span></div>
                    <div className="user-info-title">Subscription Type: <span>{subscription_type}</span></div>
                </div>
                <a target="_blank" rel="noreferrer" href={`https://mixpanel.com/report/197248/explore/#user?distinct_id=${user.mixpanel_distinct_id}`}><button>View Mixpanel</button></a>
                <div className="other-info-container">
                    <div className="user-info-title">Sign-up Date: <span>{user.created_at}</span></div>
                    <div className="user-info-title">Account Type: <span>{account_type}</span></div>
                    <div className="user-info-title">Country: <span>{user.country}</span></div>
                </div>
                <h2>Email Preferences</h2>
                <div className="email-preference-container">
                    <div className="user-info-title">Daily: <span>{user.email_preferences.send_daily> 0 ? "Enabled" : "Disabled"}</span></div>
                    <div className="user-info-title">Weekly: <span>{user.email_preferences.send_weekly > 0 ? "Enabled" : "Disabled"}</span></div>
                    <div className="user-info-title">Monthly: <span>{user.email_preferences.send_monthly > 0 ? "Enabled" : "Disabled"}</span></div>
                    <div className="user-info-title">Yearly: <span>{user.email_preferences.send_annually > 0 ? "Enabled" : "Disabled"}</span></div>
                </div>
                <h2>Device Information</h2>
                <div className="device-info-container">
                    <div className="user-info-title">Device: <span>{user.device_info || "No device info found"}</span></div>
                    <div className="user-info-title">App Version: <span>{user.app_version || "No app info found"}</span></div>
                    <div className="user-info-title">OS: <span>{user.os || "No OS info found"}</span></div>
                </div>
                <h2>Subscription Information</h2>
                <div className="sub-info-container">
                    <div className="sub-service-link-container">
                        <div className="user-info-title">Service: <span>{user.subscription_details ? user.subscription_details.payment_service : ""}</span></div>
                        {user.subscription_details && user.subscription_details.payment_service === 'STRIPE' && <div className="sub-btn-container">
                             <a href={`https://dashboard.stripe.com/search?query=${user.parse_id}`} target="_blank" rel="noreferrer"><button>View Subscription</button></a>   
                        </div>}
                    </div>
                    <div className="user-info-title">Type: <span>{user.subscription_details ? user.subscription_details.type : ""}</span></div>
                    <div className="user-info-title">Status: <span>{user.subscription_details ? user.subscription_details.subscription_status : ""}</span></div>
                    <div className="user-info-title">Start Date: <span>{user.subscription_details ? user.subscription_details.purchase_date : ""}</span></div>
                    <div className="user-info-title">Last Renewal Date: <span>{user.subscription_details ? user.subscription_details.last_updated : ""}</span></div>
                    <div className="user-info-title">End Date: <span>{user.subscription_details ? user.subscription_details.end_date : ""}</span></div>
                </div>
            </div>
        </UserDetailsStyles>
    )
}

export default UserDetails