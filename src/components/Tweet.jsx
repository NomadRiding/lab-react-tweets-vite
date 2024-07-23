import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
  
      <ProfileImage image={IMAGE_URL} />
      <div className="body">
        <div className="top"></div>
        <User name={tweet.user.name} handle={tweet.handle} />
        <Timestamp time={tweet.timestamp} />
        </div>
      <Message message={tweet.message} />

      <Actions />

    <i className="fas fa-ellipsis-h"></i>
    </div>

);
}

export default Tweet;
