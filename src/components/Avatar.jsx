import AvatarIcon from "/image-avatar.png";

function Avatar() {
  return (
    <div>
      <img
        src={AvatarIcon}
        alt="avatar"
        className="hover:border-Orange  w-8 hover:rounded-full hover:border-2"
      />
    </div>
  );
}

export default Avatar;
