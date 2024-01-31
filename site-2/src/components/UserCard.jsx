import RoundIndicator from './RoundIndicator';
import './UserCard.css';

const UserCard = ({
    name,
    onlineStatus,
    isOnline
}) => {
    return (
        <div className="user-card">
            <span className="user-name">{name}</span>
            <div className="user-is-online">
                {isOnline && <RoundIndicator />}
                <span>{isOnline ? 'Online' : onlineStatus}</span>
            </div>
        </div>
    );
}

export default UserCard;